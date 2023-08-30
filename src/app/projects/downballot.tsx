import Link from 'next/link';
import Image from 'next/image';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue, 
    useAnimation
} from "framer-motion"
import { useEffect, useState, useRef } from 'react'
import { Data, Project } from '@/app/types/Data';
import ScrollButton from '../components/ScrollButton';
import CloseButton from '../components/CloseButton';
import { useInView } from 'react-intersection-observer';

type DownBallotProps = {
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}


export default function Downballot({ className, selectedProject, setSelectedProject, projectData }: DownBallotProps) {

    const [thumbnails, setThumbnails] = useState<string[]>(["/assets/downballot/prototype_1_updates_1.png", "/assets/downballot/prototype_1_extended_1.png", "/assets/downballot/prototype_1_data_1.png"]);

    // scroll to top on open
    useEffect(() => {
        // console.log('useeffect');
        // if (selectedProject?.id != 'downballot') {
        //     console.log('selectedProject is downballot')
            window.scrollTo(0, 0); 
        // }
    }, [selectedProject]);

    // wiggle animation
    const wiggleControls = useAnimation();
    useEffect(() => {
        const animationInterval = setInterval(() => {
            wiggleControls.start({ rotate: [0, 1, -1, 1, 0] });
        }, 2000); // Adjust the interval time as needed
        return () => {
            clearInterval(animationInterval);
        };
    }, [wiggleControls]);

    // switch thumbnail
    const handleThumbnailClick = (item: number) => {
        const construction: string[] = [...thumbnails];
        if (item == 0) {
            if (thumbnails[item] == "/assets/downballot/prototype_1_updates_1.png") {
                construction[item] = "/assets/downballot/prototype_1_updates_2.png";
            } else {
                construction[item] = "/assets/downballot/prototype_1_updates_1.png";
            }
        } else if (item == 1) {
            if (thumbnails[item] == "/assets/downballot/prototype_1_extended_1.png") {
                construction[item] = "/assets/downballot/prototype_1_extended_2.png";
            } else {
                construction[item] = "/assets/downballot/prototype_1_extended_1.png";
            }
        } else if (item == 2) {
            if (thumbnails[item] == "/assets/downballot/prototype_1_data_1.png") {
                construction[item] = "/assets/downballot/prototype_1_data_2.png";
            } else {
                construction[item] = "/assets/downballot/prototype_1_data_1.png";
            }
        }
        setThumbnails(construction);
    };

    return (
        <div className={`${className} h-[50%] md:h-full w-full relative`}>            
            <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData}/>
            <div className={`h-full w-full mb-8`}>
                <motion.div 
                    className={`h-full w-full min-h-[700px] flex flex-col mb-8`} 
                    id="slide-1"
                >
                    <div style={{ fontFamily: 'Inter-Bold', fontWeight: 'bold', fontStyle: 'normal'}} className={`absolute text-xs lg:text-sm`}>DOWNBALLOT</div>
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mt-24 mb-4`}>
                        <span className={`mr-2`}>Building a tool to produce high-quality, customizable data visualizations for hyper-local races on election night. </span>
                        <span className={`text-base lg:text-s whitespace-nowrap`}>(August ‘22-July ‘23)</span>
                    </div>
                    <div className={`w-full h-[2px] bg-black flex-none`}/>
                    <div className={`h-full flex flex-col justify-end relative`}>
                        <ScrollButton className={`absolute xs:bottom-10 xs:left-0 sm:top-auto sm:bottom-10`}/>
                        <img src="/assets/downballot/final_prototype.gif" className={`w-[350px] md:w-[600px] h-auto object-contain absolute xs:left-0 xs:top-5 xs:-ml-8 sm:left-auto sm:top-auto sm:bottom-4 sm:right-0`} alt="Animated GIF demo for Downballot" />
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content py-60 pb-56 w-full mb-8`} 
                    id="slide-2"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 00. Overview </div>
                    <div className={`w-[300px] text-sm`}>I led the design and development of a suite of tools for election reporting, in partnership with the Brown Center for Media Innovation, Big Local News, and partner newsrooms in the San Francisco Bay Area. </div>
                    <div className={`w-[300px] h-[2px] bg-black my-4`}/>
                    <div className={`flex flex-row w-[300px] text-sm`}>
                        <div className={`flex-1 whitespace-nowrap`}>
                            <div className={`w-1/2 text-[#595959]`}>Role</div>
                            <div className={`w-1/2`}>Product Designer</div>
                            <div className={`w-1/2`}>Software Engineer</div>
                        </div>
                        <div className={`flex-1`}>
                            <div className={`w-1/2 text-[#595959]`}>Scope</div>
                            <div className={`w-1/2`}>11 months</div>
                        </div>
                    </div>
                    <div className={`w-[300px] h-[2px] bg-black my-4`}/>
                    <div className={`flex flex-row w-[300px] text-sm`}>
                        <div className={`flex-1`}>
                            <div className={`w-1/2 text-[#595959]`}>Methods</div>
                            <div className={`w-1/2`}>User Interviews</div>
                            <div className={`w-1/2`}>Interface Prototyping</div>
                            <div className={`w-1/2`}>Design System</div>
                        </div>
                        <div className={`flex-1 whitespace-nowrap`}>
                            <div className={`w-1/2 text-[#595959]`}>Tools</div>
                            <div className={`w-1/2`}>Figma</div>
                            <div className={`w-1/2`}>Python</div>
                            <div className={`w-1/2`}>PostgreSQL</div>
                            <div className={`w-1/2`}>React</div>
                            <div className={`w-1/2`}>Next</div>
                            <div className={`w-1/2`}>Google Cloud Platform</div>
                        </div>
                    </div>
                    <div className={`w-[300px] h-[2px] bg-black my-4`}/>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content w-full py-[25%] mb-8 min-h-[800px]`} 
                    id="slide-3"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 01. Understand </div>
                    <div className={`flex-1 text-lg lg:text-xl mb-4 mt-3`}> Context </div>
                    <div className={`md:flex flex-row text-sm justify-between`}> 
                        <div className={`w-full lg:w-1/4 pr-3 pb-3`}><strong>Covering live elections is a time and labor-intensive process</strong> that requires newsrooms to collect live election data from each voting jurisdiction, process data into visualizations, and provide in-depth analysis on election results as they are released.</div>
                        <div className={`w-full lg:w-1/4 pr-3 pb-3`}>To make matters even more complex, <strong>voting jurisdictions are extremely decentralized.</strong> Each jurisdiction maintains unique sites for hosting election data, maintain election data in unique data formats, and release election results on separate schedules.</div> 
                        <div className={`w-full lg:w-1/4 pr-3 pb-3`}><strong>For local newsrooms, collecting, cleaning, and reporting this data takes time and manpower in a time when newsrooms, increasingly understaffed and under-resourced, don't have much of either to spare.</strong></div>
                        <div className={`w-full lg:w-1/4 pr-3 pb-3`}>The effect? <strong>Small newsrooms must limit the scope of their coverage</strong> to a few primary districts <strong>at the cost of covering “down ballot” races in smaller municipalities—races that include voting for school boards, referenda, and funding for social services, agenda items that impact voters most.</strong></div>
                    </div>
                    <img src="/assets/downballot/site_structures.gif" className={`object-contain w-[50%] rounded-xl shadow-lg mb-8 mt-10`}/>
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full mb-8 flex flex-col sm:flex-row py-60`} 
                    id="slide-4"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`basis-1/3 text-xl lg:text-2xl sm:text-right sm:pl-8 xs:mb-4`}> How might we collect election data in a way that fosters greater depth and quality of election reporting? </div>
                    <div className={`w-full h-[2px] bg-black flex-none block sm:hidden`}/>
                    <div className={`w-[2px] h-80vh bg-black mt-2 mx-8`}/>
                    <div className={`basis-2/3 flex-grow text-2xl md:text-3xl lg:text-4xl pr-8`}> 
                        <div className={`mb-2`}>
                            <div className={`text-lg lg:text-xl`}> Opportunity </div>
                            <div className={`w-full text-sm mt-1`}>While there are paid services (Associated Press, Ballotpedia, and Decision Desk HQ) that standardize election night results into a single data feed for federal and state races, <strong>there are no existing services that provide election data (downballots) at the hyper-local level.*</strong> Additionally, these paid services are often outside of the scope of most local newsroom budgets. </div>
                        </div>
                        <div className={`mb-2 mt-3`}>
                            <div className={`text-lg lg:text-xl`}> Problem definition </div>
                            <div className={`w-full text-sm mt-1`}>The following stood out as clear problems:
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">There are no existing data services for elections at the hyper-local level. Comparable services provided by Ballotpedia and Associated Press cover the top 100 largest cities by population, federal races, and state races.</li>
                                    <li className="ml-2">Existing coverage by local newsrooms includes only vote totals with no election analysis.</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`mb-2 mt-3`}>
                            <div className={`text-lg lg:text-xl`}> Why hyper-local? </div>
                            <div className={`w-full text-sm mt-1`}>“Down ballots,” also called “down-ticket voting,” refer to all of the offices listed below that of the president and vice president, including voting for county and precinct officials, referenda, and funding for social services — items that disproportionately impact voters of color. Hyper-local elections most notably affect the funding and maintenance of critical infrastructure (re: clean water crisis in Flint). Enabling newsrooms to more easily cover down ballot elections fosters greater media awareness around local politics, which brings greater attention to the disproportionate impact that referenda, funding for social services, and that county and precinct officials have on communities of color.</div>
                        </div>
                        <div className={`mt-16`}><div className={`w-full text-xs`}>*We define hyper-local as any jurisdiction outside of the 100 most populated cities by population of each state.</div></div>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full flex flex-col space-y-3 pb-4 relative py-60 mb-36`} 
                    id="slide-5"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-2xl md:text-3xl lg:text-4xl pb-3`}> 02. Prototype </div>
                    <div className={`text-lg lg:text-xl `}> Discovery </div>
                    <div className={`w-full flex flex-row space-x-8`}>
                        <div className={`basis-1/2 text-sm flex flex-col h-full w-full`}>
                            <div>We needed more insight into pre-election and live-election reporting protocols, so <strong>we wore our best observer hat during the 2022 Midterm Elections</strong>, downloading HTML paths and preliminary election results to get a sense of the shape of the problem we were tackling.</div>
                        </div>
                        <div className={`basis-1/2 text-sm pr-10`}>Through user interviews with partner news organizations, web-scraping, and an initial ­­­prototype during the 2022 Midterm Elections, <strong>we documented 58 California counties' election reporting protocols.</strong></div>
                    </div>
                    <div className={`pt-4`}>
                        <div className={`w-full h-[2px] bg-black`}/>
                    </div>
                    <div className={`flex flex-row`}>
                        <motion.div 
                            className={`relative w-1/2 mt-10`}
                        >
                            <img src="/assets/downballot/ca_counties_by_data.png" className={`object-contain h-[250px] md:h-[300px]`} alt="Map of California county election data" />
                            <div className={`flex flex-col absolute top-0 left-48 hidden md:block`}>
                                <div className={`text-xs pb-1`}>Counties by election data</div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_0.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>External services</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_1.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>CSV</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_2.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>XLS</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_3.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>Custom HTML</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_4.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>Text PDF</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_data_5.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>Scanned PDF</div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div 
                            className={`relative w-1/2 mt-10`}
                        >
                            <img src="/assets/downballot/ca_counties_by_population.png" className={`object-contain h-[250px] md:h-[300px]`} alt="Map of California county population data" />
                            <div className={`flex flex-col hidden md:block absolute top-0 left-40`}>
                                <div className={`text-xs pb-1`}>Counties by population</div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_population_0.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>&gt; 1,000,000 people</div>
                                </div>
                                <div className={`flex flex-row items-center`}>  
                                    <img src="/assets/downballot/ca_counties_by_population_1.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>400,000-999,999 people</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_population_2.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>100,000-399,999 people</div>
                                </div>
                                <div className={`flex flex-row items-center`}>
                                    <img src="/assets/downballot/ca_counties_by_population_3.png" className={`object-contain h-3`}  />
                                    <div className={`text-xs pl-1`}>&lt; 100,000 people</div>
                                </div>
                            </div>
                            <div className={`flex flex-col absolute bottom-6 left-72 text-xs w-[150px] hidden xl:block`}>
                                Population data found by the 2022 Population Estimates Program and the 2021 American Community Survey.
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content py-[25%] w-full mb-8 flex flex-col justify-center items-center px-8 py-8`} 
                    id="slide-6"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <img src="/assets/downballot/midterm_prototype.gif" className={`object-contain w-[80%] rounded-xl shadow-lg mb-8`}/>
                    <div className={`flex flex-col w-[80%]`}>
                        <div className={`text-xs text-right self-end w-[50%]`}>Our discovery prototype for five Bay Area counties, used in partnership with Bay City News, built with Python, Apps Script, and Google Sheets.</div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content py-60 w-full mb-8 py-3 flex flex-col justify-center items-center`} 
                    id="slide-7"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-sm text-center sm:px-24`}>For our collaboration with Bay City News, <strong>I made a few mockups</strong> of what our data visualizations might look like. </div>
                    <div className={`flex flex-col sm:flex-row sm:space-x-10 pt-10 justify-center`}>
                        <div className={`flex w-full sm:w-1/2 h-full justify-center sm:justify-end items-center`}>
                            <img src="/assets/downballot/prototype_1_layout.png" className={`w-[70%] object-contain rounded-xl shadow-lg`}/>
                        </div>
                        <div className={`w-full sm:w-1/2 flex flex-col justify-center items-center sm:items-start`}>
                            <motion.img 
                                src={thumbnails[0]}
                                className={`xs:mt-8 sm:mt-0 flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                animate={wiggleControls}
                                onClick={() => handleThumbnailClick(0)}
                                whileHover={{ scale: 1.1 }}
                            />
                            <motion.img 
                                src={thumbnails[1]} 
                                className={`flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                animate={wiggleControls}
                                onClick={() => handleThumbnailClick(1)}
                                whileHover={{ scale: 1.1 }}
                            />
                            <motion.img 
                                src={thumbnails[2]}  
                                className={`flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                animate={wiggleControls}
                                onClick={() => handleThumbnailClick(2)}
                                whileHover={{ scale: 1.1 }}
                            />
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content py-60 w-full min-h-[500px] mb-8 md:pl-24 flex flex-col relative`} 
                    id="slide-8"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-base mb-3 md:absolute md:top-[280px] md:left-0 md:transform md:-rotate-90`}>User Persona</div>
                    <div>
                        <img src="/assets/downballot/bcn_logo.png" className={`object-contain w-[60px] block md:hidden mb-3`}/>
                        <div className={`flex flex-row`}>
                            <img src="/assets/downballot/bcn_logo.png" className={`object-contain w-[100px] ml-6 mr-10 hidden md:block`}/>
                            <div>
                                <div className={`text-base md:text-xl mb-3`}>Bay City News</div>
                                <div className={`flex flex-row text-xs md:text-sm space-x-8`}>
                                    <div>Bay Area newswire created in the late 1970s that supports 12 Bay Area counties with 50 partner organizations.</div>
                                    <div>Provide election feed tickers, statewide measures for longer form articles, civic and court coverage.</div>
                                </div>
                            </div>
                        </div>
                        <div className={`w-full h-[2px] bg-black my-6`}/>
                        <div>
                            <div className={`sm:grid sm:grid-cols-3 sm:gap-6 sm:gap-y-8 md:gap-8 text-xs md:text-sm`}>
                                <div className={`xs:mb-3 sm:mb-auto`}><strong>Intake systems are labor-intensive and clunky</strong>, involving manually updating templates for election night using plaintext, assigning reporters to cover different counties</div>
                                <div className={`xs:mb-3 sm:mb-auto`}><strong>Smaller news organizations prefer a templated content management system </strong>for producing content, using NewsPack Wordpress Platform</div>
                                <div className={`xs:mb-3 sm:mb-auto`}>Each news organization has its own intake system and <strong>reporters rely on systems they have used before</strong></div>
                                <div className={`xs:mb-3 sm:mb-auto`}>“The embeddable <strong>tool could be a great supplement </strong> for the roster of everything on the ballot”</div>
                                <div className={`xs:mb-3 sm:mb-auto`}>“Typically publish with updates 50-60 times per county... <strong>it’s very scattered.”</strong></div>
                                <div className={`xs:mb-3 sm:mb-auto`}><strong>Pre-election coverage is important</strong></div>
                            </div>
                        </div>
                        
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-full w-full mb-8 px-12 sm:px-24 md:px-56 min-h-[400px] flex flex-col justify-center items-center`} 
                    id="slide-9"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-base md:text-xl mb-3 text-center`}>Summary of findings from our discovery prototype</div>
                    <div className={`text-xs md:text-sm max-w-[500px]`}>
                        <div><strong>1. Quality of online election reporting increasingly declines away from population-dense areas</strong></div>
                        <div><strong>2.</strong> Each news organization has its own intake system and reporters rely on systems they have used before because <strong>reporters lack the technical knowledge</strong> </div>
                        <div><strong>3.</strong> <strong>Newsrooms devote 90% of their efforts to pre-election coverage</strong></div>
                        <div><strong>4.</strong> Voting jurisdictions are even more granular than counties</div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content w-full mb-8 flex flex-col sm:flex-row py-60`} 
                    id="slide-10"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`basis-1/3 text-xl lg:text-2xl text-left mb-6 sm:text-right md:pl-8 xs:mb-4`}> How might we collect election data to supplement existing election reporting at the hyperlocal level? </div>
                    <div className={`w-full h-[2px] bg-black flex-none block sm:hidden mb-4`}/>
                    <div className={`w-[2px] h-25vh bg-black mx-8`}/>
                    <div className={`basis-2/3 flex-grow text-2xl md:text-3xl lg:text-4xl pr-8 max-w-[500px]`}> 
                        <div className={`mb-2`}>
                            <div className={`text-lg lg:text-xl`}> Refinement </div>
                            <div className={`w-full text-sm mt-4`}>After discovery, <strong>we decided to shift our project's focus from aggregating vote totals toward collecting pre-election data.</strong></div>
                            <div className={`w-full text-sm mt-4`}>Additionally, <strong>it became clear that our specific domain space and target users were nontechnical users</strong> who had existing protocols and content management systems. With this in mind, <strong>we shifted our project toward producing simple, embedded charts rather than sophisticated visualizations.</strong></div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content w-full mb-8 py-[30%] flex flex-col sm:flex-row items-center sm:justify-end`} 
                    id="slide-11"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                        <div className={`basis-1/3`}/>
                        <div className={`flex flex-col basis-1/3 sm:px-8 pt-8`}>
                            <div className={`text-xs md:text-sm text-center mb-10 block sm:hidden`}>Once we finalized a product direction, I turned our prototypes into high-fidelity designs by creating a design system that was focused on simplicity for nontechnical reporters.</div>
                            <img src="/assets/downballot/prototype_2_simple_embed_3.png" className={`self-center sm:self-end object-contain rounded-xl shadow-lg flex-none max-w-[300px]`}/>
                            <div className={`text-xs md:text-sm text-right mt-10 hidden sm:block`}>Once we finalized a product direction, I turned our prototypes into high-fidelity designs by creating a design system that was focused on simplicity for nontechnical reporters.</div>
                        </div>
                        <div className={`flex flex-col basis-1/3 sm:pr-8 pt-8`}>
                            <img src="/assets/downballot/prototype_2_simple_embed_2.png" className={`flex-none object-contain rounded-xl shadow-lg max-w-[300px]`}/>
                            <img src="/assets/downballot/prototype_2_simple_embed_1.png" className={`flex-none object-contain rounded-xl shadow-lg mt-8 max-w-[300px]`}/>
                        </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content w-full mb-20 py-60 flex flex-col sm:flex-row justify-start items-center sm:items-start`} 
                    id="slide-12"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`w-1/2 flex flex-col sm:flex-row justify-start relative mb-10`}>
                        <div className={`mb-4 sm:mb-0 sm:absolute sm:top-10 sm:left-[-2px] text-sm md:text-base sm:transform sm:-rotate-90`}>Original design</div>
                        <img src="/assets/downballot/customize_before.png" className={`min-w-[200px] w-[300px] sm:w-full object-contain sm:ml-16`}/>
                    </div>
                    <div className={`w-1/2 flex flex-col sm:flex-row justify-start relative`}>
                    <div className={`mb-4 sm:mb-0 sm:absolute sm:top-10 sm:left-[-2px] text-sm md:text-base sm:transform sm:-rotate-90`}>Revised design</div>
                        <img src="/assets/downballot/customize_after.png" className={`min-w-[200px] w-[300px] sm:w-full object-contain sm:ml-16`}/>
                    </div>
                </motion.div>
               
                <motion.div 
                    className={`h-fit-content w-full mb-8 py-[25%]`} 
                    id="slide-13"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 03. Build </div>
                    <div className={`w-full pr-3 pb-3 text-sm`}>Using Scrapy, Postgres, Google Cloud Platform, React, and Python, I built our API. </div>
                    <div className={`h-full flex flex-col justify-start items-center lg:items-start`}>
                        <img src="/assets/downballot/final_prototype.gif" className={`w-[90%] max-w-[800px] h-auto object-contain -mr-8 md:-mr-12`} alt="Animated GIF demo for Downballot" />
                        <img src="/assets/downballot/create_prototype.gif" className={`flex-grow object-contain w-[70%] max-w-[800px] rounded-xl shadow-lg mb-8 mt-10 ml-10`}/>
                    </div>
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content w-full mb-8 flex flex-col min-h-[700px] py-60`} 
                    id="slide-14"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-2xl md:text-3xl lg:text-4xl mb-4`}> 04. Takeaways </div>
                    <div className={`flex flex-col md:flex-row`}>
                        <div className={`basis-1/2 pb-6`}>
                            <div className={`text-lg lg:text-xl`}> Outcomes </div>
                            <div className={`mt-4 text-sm`}>
                                As a solo designer and engineer, I was able to accomplish the following:
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Increased the scope of a partner news organization's coverage by five counties during the 2022 Midterm Election</li>
                                    <li className="ml-2">Successfully demonstrated need for greater investment in hyper-local election reporting through documenting county election reporting protocols</li>
                                    <li className="ml-2">Successfully led and tested two prototypes with two different partner organizations</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`w-[2px] h-100vh bg-black mt-2 mx-8`}/>
                        <div className={`basis-1/2`}>
                            <div className={`text-lg lg:text-xl`}> Learning </div>
                            <div className={`w-full text-sm mt-4`}>I learned that in working on highly technical products with nontechnical users, the greatest impact solution often leans simple.</div>
                            <div className={`w-full text-sm mt-4`}>While <strong>we assumed that local newsrooms wanted complex elections reporting visuals</strong> popularly used for federal and state level elections, <strong>but the nontechnical nature of their staff and their reluctance to leave existing content management systems</strong> meant that <strong>the simpler the visuals, the better</strong>.</div>
                            <div className={`w-full text-sm mt-4`}><strong>Longterm projects</strong>, particularly elections, <strong>require adjusting prototype timelines</strong> to accommodate for domain-specific schedules. I like to think of this as the feasibility component to designing, realizing futures that don't yet exist and making them possible. Luckily, we had enough funding for a few iterations, although we would have loved more time and funding to work on the project.</div>
                            <div className={`w-full text-sm mt-4`}>Focusing on impact, particularly when demonstrating need for continued investment in a space, meant that we had to shift toward carefully cherry-picking hyper-local news organizations for prototyping.</div>
                            <div className={`w-full text-sm mt-4`}><strong>There are particular concerns that are domain-specific</strong>, particularly security and integrity in reporting election data, that peer projects at the Brown Institute helped remind us of at every step of the project.</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}