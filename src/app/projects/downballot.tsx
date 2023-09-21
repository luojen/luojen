import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue, 
    useAnimation
} from "framer-motion"
import { useEffect, useState, useRef, Suspense } from 'react'
import { Data, Project } from '@/app/types/Data';
import ScrollButton from '../components/ScrollButton';
import CloseButton from '../components/CloseButton';
import { useInView } from 'react-intersection-observer';
import CustomImage from '../components/CustomImage';
import Image from 'next/image';
import FinalPrototypeGIF from '../../../public/assets/downballot/final_prototype.gif';

type DownBallotProps = {
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}


export default function Downballot({ className, selectedProject, setSelectedProject, projectData }: DownBallotProps) {

    const [thumbnails, setThumbnails] = useState<string[]>(["/assets/downballot/prototype_1_updates_1.png", "/assets/downballot/prototype_1_extended_1.png", "/assets/downballot/prototype_1_data_1.png"]);

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
            <div className={`h-full w-full mb-8`}>

                <div className={`h-full w-full min-h-[800px] sm:min-h-[700px] p-8 flex flex-col bg-[#202020] text-[#FCFCFC] relative`} id="slide-1">
                    <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData} className={`self-end`}/>
                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}} className={`absolute text-base`}>Downballot</div>
                    <div className={`flex-1 text-3xl md:text-4xl mt-24 mb-4`}>
                        <span className={`mr-2`}>High-quality, customizable data visualizations for hyper-local races on election night. </span>
                        <span style={{ fontFamily: 'NeueHaasUnicaW1G-Regular', fontWeight: 'normal', fontStyle: 'regular'}}  className={`text-base lg:text-s whitespace-nowrap`}>(August ‘22—July ‘23)</span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#FCFCFC]`}/>
                    <div className={`h-full flex flex-col justify-end relative`}>
                        <ScrollButton className={`absolute xs:bottom-10 xs:left-0 sm:top-auto sm:bottom-10`}/>
                        <div className={`ml-4`}>
                        <CustomImage className={`w-[350px] h-[300px] md:w-[600px] md:h-[400px] absolute xs:left-0 xs:top-5 xs:-ml-8 sm:left-auto sm:top-auto sm:bottom-4 sm:right-0`} src={"/assets/downballot/final_prototype.gif"} alt={"GIF of final prototype for Downballot"}/>
                        </div>
                        {/* <img src="/assets/downballot/final_prototype.gif" className={`w-[350px] md:w-[600px] h-auto object-contain absolute xs:left-0 xs:top-5 xs:-ml-8 sm:left-auto sm:top-auto sm:bottom-4 sm:right-0`} placeholder={`w-[300px] md:w-[500px] h-[200px] md:h-[350px] object-contain absolute xs:left-0 xs:top-5 xs:ml-0 sm:left-auto sm:top-auto sm:bottom-4 right-8 md:right-12`} alt="Animated GIF demo for Downballot"/> */}
                    </div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#E2E2E2]`} id="slide-2">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 01. Overview </div>
                        <div className={`w-[300px] sm:w-[350px]  text-xs sm:text-sm`}>I led the design and development of a suite of tools for election reporting, in partnership with the Brown Center for Media Innovation, Big Local News, and partner newsrooms in the San Francisco Bay Area. </div>
                        <div className={`w-[300px] sm:w-[350px]  h-[1px] bg-black my-4`}/>
                        <div className={`flex flex-row w-[350px] text-xs sm:text-sm`}>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Role</div>
                                <div className={`w-1/2`}>Product Designer</div>
                                <div className={`w-1/2`}>Software Engineer</div>
                            </div>
                            <div className={`flex-1`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Scope</div>
                                <div className={`w-1/2`}>11 months</div>
                            </div>
                        </div>
                        <div className={`w-[300px] sm:w-[350px] h-[1px] bg-black my-4`}/>
                        <div className={`flex flex-row w-[350px] text-xs sm:text-sm`}>
                            <div className={`flex-1 whitespace-nowrap `}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Methods</div>
                                <div className={`w-1/2`}>User Interviews</div>
                                <div className={`w-1/2`}>Interface Prototyping</div>
                                <div className={`w-1/2`}>Design System</div>
                            </div>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Tools</div>
                                <div className={`w-1/2`}>Figma</div>
                                <div className={`w-1/2`}>Python</div>
                                <div className={`w-1/2`}>PostgreSQL</div>
                                <div className={`w-1/2`}>React</div>
                                <div className={`w-1/2`}>Next</div>
                                <div className={`w-1/2`}>Google Cloud Platform</div>
                            </div>
                        </div>
                        <div className={`w-[300px] sm:w-[350px]  h-[1px] bg-black my-4`}/>
                    </motion.div>
                </div>
               
                <div className={`h-fit-content w-full p-8 min-h-[800px] bg-[#F4F4F3]`} id="slide-3">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 02. Understand </div>
                        <div className={`flex flex-col md:flex-row mt-10`}>
                            <div className={`mr-20 w-full md:w-1/4 min-w-[200px]`}>
                                <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Pain point #1</div>
                                <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Covering live elections is a time and labor-intensive process</div>
                            </div>
                            <div className={'flex flex-col'}>
                                <div className={`sm:self-center sm:text-center text-xs mb-4 mt-10 md:mt-0`}>Newsrooms must</div>
                                <div className={'flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 text-xs w-full sm:max-w-[800px]'}>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center w-3/4 sm:w-1/3`}><strong>Collect live election data</strong> from each voting jurisdiction within their coverage area</div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center w-3/4 sm:w-1/3`}>Process election data into <strong>visualizations</strong></div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center w-3/4 sm:w-1/3`}><strong>Provide in-depth analysis </strong> on election results</div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col md:flex-row mt-16`}>
                            <div className={`mr-20 w-full md:w-1/4 min-w-[200px]`}>
                                <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Pain point #2</div>
                                <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>There is no standard for election data</div>
                            </div>
                            <div className={`flex flex-col mt-10 md:mt-0`}>
                                {/* <CustomImage className={`w-full sm:max-w-[800px] h-[300px] self-end rounded-xl shadow-lg mb-8`} src={"/assets/downballot/site_structures.gif"} alt={"GIF of final prototype for Downballot"}/> */}
                                <img src="/assets/downballot/site_structures.gif" className={`object-contain w-full sm:max-w-[800px] self-end rounded-xl shadow-lg mb-8`}/>
                                <div className={`self-end text-end text-xs max-w-[300px]`}>Each jurisdiction maintains unique sites for hosting election data, maintain election data in unique data formats, and release election results on separate schedules.</div>
                            </div>
                        </div>
                        <div className={`flex flex-col md:flex-row mt-16`}>
                            <div className={`mr-20 w-full md:w-1/4 min-w-[200px]`}>
                                <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Pain point #3</div>
                                <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Smaller newsrooms are increasingly understaffed and under-resourced</div>
                            </div>
                            <div className={`flex flex-col space-y-4 mt-5 md:mt-0 text-xs`}>
                                <div className={`flex flex-col space-y-4 p-5 bg-[#FFFFFF] rounded-xl w-full sm:max-w-[800px]`}>
                                    <div>Newspapers are continuing to vanish at a rapid rate. An average of <strong>more than two a week are disappearing. Since 2005, the country has lost more than a fourth of its newspapers</strong> (2,500) and is <strong>on track to lose a third by 2025</strong>.</div>
                                    <div><strong>Most communities that lose a newspaper do not get a digital or print replacement. The country has 6,380 surviving papers: 1,230 dailies and 5,150 weeklies.</strong></div>
                                    <div><strong>More than a fifth of the nation’s citizens live in news deserts</strong>—with very limited access to local news—or in communities at risk of becoming news deserts. <strong>Seventy million people live in the more than 200 counties without a newspaper, or in the 1,630 counties with only one paper—usually a weekly—covering multiple communities spread over a vast area</strong>.</div>
                                    <div><strong>The surviving newspapers—especially the dailies—have cut staff and circulation significantly</strong> as print revenues and profits evaporated. This has sharply reduced their ability to provide news to communities that lose a weekly newspaper, further exacerbating an information gap not only in rural areas, but also in suburbs surrounding a city. <strong>Since 2005</strong>, when newspaper revenues topped $50 billion, <strong>overall newspaper employment has dropped 70 percent</strong> as revenues declined to $20 billion. <strong>Newsroom employment has declined by almost 60 percent, with on-staff photographers declining by 80 percent</strong>. </div>
                                </div>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}} className={`text-end`}>From Northwestern’s The State of Local News 2022 Report</div>
                            </div>
                        </div>
                        <div className={`flex flex-col md:flex-row mt-16`}>
                            <div className={`mr-20 w-full md:w-1/4 min-w-[200px]`}>
                                <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Pain point #4</div>
                                <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>There are no existing services that provide election data at the hyper-local level</div>
                            </div>
                            <div className={`flex flex-col`}>
                                <div className={`flex flex-col space-y-4 mt-5 md:mt-0 text-xs mb-16 w-full sm:max-w-[800px]`}>
                                    <div><strong>While there are paid services</strong> (Associated Press, Ballotpedia, and Decision Desk HQ) that standardize election night results into a single data feed <strong>for federal and state races, there are no existing services that provide election data (downballots) at the hyper-local level.*</strong> </div>
                                    <div><strong>Comparable services cover only the top 100 largest cities by population, federal races, and state races.</strong></div>
                                    <div>Additionally, <strong>these paid services are often outside of the scope of most local newsroom budgets. </strong></div>
                                </div>
                                <div className={`w-full h-[1px] bg-[#575757] mb-4`}/>
                                <div className={`text-[10px]`}>*We define hyper-local as any jurisdiction outside of the 100 most populated cities by population of each state.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#202020] text-[#FCFCFC]`} id="slide-4">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`w-full h-full flex flex-col md:flex-row`}>
                            <div className={`text-xl whitespace-nowrap w-1/4 text-right mr-20`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Why hyper-local?</div>
                            <div className={`flex flex-col text-xs space-y-4 mt-4 md:mt-0 w-full sm:w-3/4 sm:max-w-[800px]`}>
                                <div><strong>“Down ballots,” also called “down-ticket voting,” refer to all of the offices listed below that of the president and vice president</strong>, including voting for county and precinct officials, referenda, school boards, and funding for social services.  </div>
                                <div><strong>These are items that disproportionately impact voters of color.</strong> Enabling newsrooms to more easily cover down ballot elections fosters greater media awareness around local politics, which brings greater attention to the disproportionate impact that referenda, funding for social services, and that county and precinct officials have on communities of color.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#F4F4F3]`} id="slide-5">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`w-full h-full flex flex-col justify-center items-center pt-8`}>
                            <div className={`text-xs mb-2`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>What we see and hear</div>
                            <div className={`text-lg max-w-[500px] text-center mb-5 md:mb-0`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Smaller newsrooms are limiting the scope of their coverage to a few primary districts at the cost of covering downballot races in smaller municipalities</div>
                            <div className={`relative w-[300px] md:w-[650px] h-[900px] md:h-[625px] flex flex-col`}>
                                <motion.img src="/assets/downballot/bubble_right.svg" className='w-[290px] absolute top-0 md:top-[30px] right-0'/>
                                <div className={`absolute top-[16px] md:top-[50px] right-[45px] w-[225px]`}>
                                    <div className='text-[11px] mb-3'>Counties typically publish election results with updates 50-60 times per county... <strong>it’s very scattered.</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}><strong>Bay City News</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}>Newswire that supports 12 Bay Area counties with 50 partner organizations</div>
                                </div>
                                <motion.img src="/assets/downballot/bubble_left.svg" className='w-[325px] absolute top-[180px] md:top-[120px] left-0'/>
                                <div className={`absolute top-[195px] md:top-[140px] left-[35px] md:left-[42px] w-[270px]`}>
                                    <div className='text-[11px] mb-3'><strong>Pre-election coverage takes 90% of our efforts</strong>, and make a big difference toward providing important candidate information for voters. </div>
                                    <div className={`text-[9px] text-[#949494]`}><strong>Mercury News</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}>Daily Bay Area newspaper with 324,000 papers in circulation</div>
                                </div>
                                <motion.img src="/assets/downballot/bubble_right.svg" className='w-[290px] absolute top-[350px] md:top-[230px] right-0'/>
                                <div className={`absolute top-[375px] md:top-[255px] right-[40px] w-[225px]`}>
                                    <div className='text-[11px] mb-3'>The embeddable tool could be a great <strong>supplement</strong> for the roster of everything on the ballot.</div>
                                    <div className={`text-[9px] text-[#949494]`}><strong>Half Moon Bay Review</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}>Weekly Bay Area newspaper with 3,000 papers in circulation</div>
                                </div>
                                <motion.img src="/assets/downballot/bubble_left.svg" className='w-[325px] absolute top-[540px] md:top-[325px] left-0'/>
                                <div className={`absolute top-[555px] md:top-[350px] left-[35px] md:left-[42px] w-[255px] md:w-[270px]`}>
                                    <div className='text-[11px] mb-3'><strong>Intake systems are labor-intensive and clunky</strong>, involving manually updating templates for election night using plaintext</div>
                                    <div className={`text-[9px] text-[#949494]`}><strong>East Bay Times</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}>Weekly Bay Area newspaper with 55,000 papers in circulation</div>
                                </div>
                                <motion.img src="/assets/downballot/bubble_right.svg" className='w-[290px] absolute top-[710px] md:top-[430px] right-0'/>
                                <div className={`absolute top-[740px] md:top-[455px] right-[40px] w-[225px]`}>
                                    <div className='text-[11px] mb-3'><strong>We prefer to stick with our existing content management system.</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}><strong>Gilroy Dispatch</strong></div>
                                    <div className={`text-[9px] text-[#949494]`}>Weekly Bay Area newspaper with 11,000 papers in circulation</div>
                                </div>
                            </div>
                            <div className={`text-xs mb-2`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>These are snippets from user interviews with our 12 partner news organizations</div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#E2E2E2]`} id="slide-6">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`flex flex-col w-full max-w-[1000px]`}>
                            <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>How might we collect election data in a way that fosters greater depth and quality of election reporting?</div>
                            <div className={`text-xs my-5`}>We hypothesized that if we could help newsrooms with <strong>collecting live election data</strong>, the effect would be that newsrooms could either <strong>1) broaden their coverage area</strong> or <strong>2) provide more in-depth analysis on elections.</strong></div>
                            <div className={'hidden md:grid grid-cols-4 text-xs w-full gap-x-3 gap-y-3'}>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect live election data</strong> from each voting jurisdiction within their coverage area</div>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}>Process election data into <strong>visualizations</strong></div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`}><strong>Provide in-depth analysis </strong> on election results</div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'italic'}}><strong>Expand coverage area to hyper-local counties</strong></div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>We handle this</div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And this</div>
                                    <div className={`flex flex-col justify-center items-center`}><div className={`text-xs text-center max-w-[100px]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Newsrooms can now do this</div></div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Bonus</div>
                            </div>
                            <div className={'grid grid-cols-2 md:hidden text-xs gap-y-3 gap-x-6 w-full'}>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect live election data</strong> from each voting jurisdiction within their coverage area</div>
                                    <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>We handle this</div></div>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}>Process election data into <strong>visualizations</strong></div>
                                    <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And this</div></div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`}><strong>Provide in-depth analysis </strong> on election results</div>
                                    <div className={`flex flex-col justify-center items-start`}><div className={`text-xs max-w-[100px]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Newsrooms can now do this</div></div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'italic'}}><strong>Expand coverage area to hyper-local counties</strong></div>
                                    <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Bonus</div></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#202020]`} id="slide-7">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`flex flex-col w-full max-w-[1000px] text-[#FCFCFC]`}>
                            <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}>02. Prototype</div>
                            <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Discovery prototype</div>
                            <div className={`flex flex-col text-xs space-y-4 mt-4 w-full sm:w-1/2 max-w-[500px]`}>
                                <div>We wanted to verify how things worked on election night, and to see exactly what kind of election data we were dealing with.</div>
                                <div><strong>We wore our best observer hat during the 2022 Midterm Elections</strong>, downloading HTML paths, and preliminary election reports. </div>
                            </div>
                            <div className={`text-base mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>We documented all 58 California counties’ election reporting protocols. </div>
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
                            <div className={`text-base mt-20`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>We partnered with one news organization to provide election results for five Bay Area counties. </div>
                            <img src="/assets/downballot/midterm_prototype.gif" className={`mt-10 object-contain w-[80%] rounded-xl shadow-lg`}/>
                            <div className={`text-base mt-20`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>I also made a few mockups of sample data visualizations which we ran by Bay City News for a future prototype. </div>
                            <div className={`flex flex-col sm:flex-row sm:space-x-10 pt-10 justify-start`}>
                                <div className={`flex w-full sm:w-1/2 h-full justify-start sm:justify-end items-center`}>
                                    <img src="/assets/downballot/prototype_1_layout.png" className={`w-[70%] object-contain rounded-xl shadow-lg`}/>
                                </div>
                                <div className={`w-full sm:w-1/2 flex flex-col justify-center items-start`}>
                                    <motion.img 
                                        src={thumbnails[0]}
                                        className={`xs:mt-8 sm:mt-0 flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                        onClick={() => handleThumbnailClick(0)}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.img 
                                        src={thumbnails[1]} 
                                        className={`flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                        onClick={() => handleThumbnailClick(1)}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                    <motion.img 
                                        src={thumbnails[2]}  
                                        className={`flex-grow object-contain w-[70%] rounded-xl shadow-lg mb-8`}
                                        onClick={() => handleThumbnailClick(2)}
                                        whileHover={{ scale: 1.1 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#F4F4F3]`} id="slide-8">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`w-full h-full flex flex-col items-center justify-center`}>
                            <div className={`text-xl whitespace-nowrap w-1/4 text-right mr-20`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Findings from discovery</div>
                            <div className={`text-xs max-w-[500px] text-center flex flex-col space-y-3 mt-5`}>
                                <div><strong>1. Quality of online election reporting increasingly declines away from population-dense areas</strong></div>
                                <div><strong>2.</strong> Each news organization has its own intake system and reporters rely on systems they have used before because <strong>reporters lack the technical knowledge</strong> </div>
                                <div><strong>3.</strong> <strong>Newsrooms devote 90% of their efforts to pre-election coverage</strong></div>
                                <div><strong>4.</strong> Voting jurisdictions are even more granular than counties</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#E2E2E2]`} id="slide-9">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`flex flex-col w-full max-w-[1000px]`}>
                        <div className={`text-xs mb-2`}>We refined our initial question</div>
                        <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>How might we collect election data in a way that fosters greater depth and quality of election reporting?</div>
                        <div className={`flex flex-col text-xs space-y-4 my-6 mb-10 w-full sm:max-w-[650px]`}>
                            <div>After discovery, we learned that standardizing pre-election data was a prerequisite to collecting vote totals. Candidate information was as difficult to collect as vote totals, and would have an equally-sized impact in increasing the quality of election reporting for local newsrooms. <strong>We decided to shift our project's focus from aggregating vote totals toward collecting pre-election data.</strong> </div>
                            <div>Additionally, <strong>it became clear that our specific domain space and target users were nontechnical users</strong> who had existing protocols and content management systems. With this in mind, <strong>we shifted our project toward producing simple, embedded charts</strong> rather than sophisticated visualizations.</div>
                        </div> 
                            <div className={'hidden md:grid grid-cols-5 text-xs w-full gap-x-3 gap-y-3'}>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect pre-election data</strong></div>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect live election data</strong></div>
                                    <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}>Process election data into <strong>visualizations</strong></div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`}><strong>Provide in-depth analysis</strong> on election results</div>
                                    <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'italic'}}><strong>Expand coverage area to hyper-local counties</strong></div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>We focus on this first</div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And this next</div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And later this</div>
                                    <div className={`flex flex-col justify-center items-center`}><div className={`text-xs text-center max-w-[100px]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Newsrooms can now do this</div></div>
                                    <div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Bonus</div>
                            </div>
                            <div className={'grid grid-cols-2 md:hidden text-xs gap-y-3 gap-x-6 w-full'}>
                                <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect pre-election data</strong></div>
                                <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>We focus on this first</div></div>
                                <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}><strong>Collect live election data</strong></div>
                                <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And this next</div></div>
                                <div className={`bg-[#202020] p-6 rounded-xl text-center text-[#FCFCFC]`}>Process election data into <strong>visualizations</strong></div>
                                <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>And later this</div></div>
                                <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`}><strong>Provide in-depth analysis</strong> on election results</div>
                                <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-start max-w-[100px]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Newsrooms can now do this</div></div>
                                <div className={`bg-[#FFFFFF] p-6 rounded-xl text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'italic'}}><strong>Expand coverage area to hyper-local counties</strong></div>
                                <div className={`flex flex-col justify-center items-start`}><div className={`text-xs text-center`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Bonus</div></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#F4F4F3]`} id="slide-10">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`flex flex-col w-full max-w-[1000px]`}>
                            <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Low fidelity to high fidelity</div>
                            <div className={`w-full sm:w-1/2 max-w-[500px] text-xs mt-4`}>Once we finalized a product direction, I turned our prototypes into high-fidelity designs by creating a design system that was focused on simplicity for nontechnical reporters.</div>
                            <div className={`text-base mt-6`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Three sketches for a low fidelity embeddable graphic</div>
                            <div className={`flex flex-col md:flex-row justify-start items-start w-full space-y-3 md:space-y-0 md:space-x-3 md:max-w-[700px] mt-5`}>
                                <img src="/assets/downballot/prototype_2_simple_embed_3.png" className={`flex-none object-contain rounded-xl shadow-lg w-3/4 sm:w-1/2 md:w-1/3`}/>
                                <img src="/assets/downballot/prototype_2_simple_embed_2.png" className={`flex-none object-contain rounded-xl shadow-lg w-3/4 sm:w-1/2 md:w-1/3`}/>
                                <img src="/assets/downballot/prototype_2_simple_embed_1.png" className={`flex-none object-contain rounded-xl shadow-lg w-3/4 sm:w-1/2 md:w-1/3`}/>
                            </div>
                            <div className={`text-base mt-16`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Modifying the embeddable graphic from highly customizable to a simple copy and paste</div>
                            <div className={`flex flex-col md:flex-row w-full justify-start items-start mt-8 space-y-5 md:space-y-0 md:space-x-5`}>
                                <img src="/assets/downballot/customize_before.png" className={`min-w-[200px] w-[300px] sm:w-full object-contain rounded-xl shadow-lg`}/>
                                <img src="/assets/downballot/customize_after.png" className={`min-w-[200px] w-[300px] sm:w-full object-contain rounded-xl shadow-lg`}/>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#202020] text-[#FCFCFC]`} id="slide-11">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}>03. Build</div>
                        <div className={`text-xs mb-2`}>Using Scrapy, Postgres, Google Cloud Platform, React, and Python, I built our API. </div>
                        <div className={`h-full flex flex-col justify-start items-center lg:items-start`}>
                            <img src="/assets/downballot/final_prototype.gif" className={`w-[90%] max-w-[800px] h-auto object-contain -mr-8 md:-mr-12`} alt="Animated GIF demo for Downballot" />
                            <img src="/assets/downballot/create_prototype.gif" className={`md:ml-20 flex-grow object-contain w-[70%] max-w-[600px] rounded-xl shadow-lg mb-8 mt-10 ml-10`}/>
                        </div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#E2E2E2] pb-16`} id="slide-12">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}>04. Takeaways</div>
                        <div className={`flex flex-col`}>
                            <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Outcomes </div>
                            <div className={`mt-4 text-xs`}>
                                As a solo designer and engineer, I was able to accomplish the following:
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Increased the scope of a partner news organization's coverage by five counties during the 2022 Midterm Election</li>
                                    <li className="ml-2">Successfully demonstrated need for greater investment in hyper-local election reporting through documenting county election reporting protocols</li>
                                    <li className="ml-2">Successfully led and tested two prototypes with two different partner organizations</li>
                                </ul>
                            </div>
                            <div className={`text-xl w-3/4 pt-6`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Learning </div>
                            <div className={`w-full text-xs mt-4`}>I learned that in working on highly technical products with nontechnical users, the greatest impact solution often leans simple.</div>
                            <div className={`w-full text-xs mt-4`}>While <strong>we assumed that local newsrooms wanted complex elections reporting visuals</strong> popularly used for federal and state level elections, <strong>but the nontechnical nature of their staff and their reluctance to leave existing content management systems</strong> meant that <strong>the simpler the visuals, the better</strong>.</div>
                            <div className={`w-full text-xs mt-4`}><strong>Longterm projects</strong>, particularly elections, <strong>require adjusting prototype timelines</strong> to accommodate for domain-specific schedules. I like to think of this as the feasibility component to designing, realizing futures that don't yet exist and making them possible. Luckily, we had enough funding for a few iterations, although we would have loved more time and funding to work on the project.</div>
                            <div className={`w-full text-xs mt-4`}>Focusing on impact, particularly when demonstrating need for continued investment in a space, meant that we had to shift toward carefully cherry-picking hyper-local news organizations for prototyping.</div>
                            <div className={`w-full text-xs mt-4`}><strong>There are particular concerns that are domain-specific</strong>, particularly security and integrity in reporting election data, that peer projects at the Brown Institute helped remind us of at every step of the project.</div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}