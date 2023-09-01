import Link from 'next/link';
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

type ImpartProps = {
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}


export default function Impart({ className, selectedProject, setSelectedProject, projectData }: ImpartProps) {
    
    const [mapNumber, setMapNumber] = useState<number>(0);

    // scroll to top on open
    useEffect(() => {
        // console.log(selectedProject);
        // window.scrollTo(0,0);
    }, [selectedProject]);

    // switch empathy map
    const handleEmpathyMapClick = () => {
        if (mapNumber == 3) {
            setMapNumber(0);
        } else {
            setMapNumber(mapNumber + 1);
        }
    };

    // wiggle animation
    const wiggleControls = useAnimation();
    let animationInterval: NodeJS.Timeout;
    useEffect(() => {
        animationInterval = setInterval(() => {
            wiggleControls.start({ rotate: [0, 1, -1, 1, 0] });
        }, 2000); 

        return () => {
            clearInterval(animationInterval);
        };
    }, [wiggleControls]);
    
    return (
        <div className={`${className} h-[50%] md:h-full w-full relative`}>            
            
            <div className={`h-full w-full mb-8`}>

                <motion.div 
                    className={`h-full w-full min-h-[1000px] sm:min-h-[700px] mb-8 relative border border-transparent`} 
                    id="slide-1"
                >
                    <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData}/>
                    <div style={{ fontFamily: 'Inter-Bold', fontWeight: 'bold', fontStyle: 'normal'}} className={`absolute text-xs lg:text-sm`}>IMPART</div>
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mt-16 mb-4`}>
                        <span className={`mr-2`}>Less talking and more making—fostering creative collaboration between artists.</span>
                        <span className={`text-base lg:text-s whitespace-nowrap`}>(January ‘21-March '21)</span>
                    </div>
                    <div className={`w-full h-[1px] bg-black`}/>
                    <div className={`w-[300px] text-sm mt-4`}>In a design sprint with three other Stanford students for Stanford's foundational human-computer interaction course, we designed a mobile platform for artists to give and take inspiration.</div>
                    <div className={`w-[300px] h-[1px] bg-black my-4`}/>
                    <div className={`flex flex-row w-[300px] text-sm`}>
                        <div className={`flex-1 whitespace-nowrap`}>
                            <div className={`w-1/2 text-[#595959]`}>Role</div>
                            <div className={`w-1/2`}>Product Designer</div>
                            <div className={`w-1/2`}>Android Engineer</div>
                        </div>
                        <div className={`flex-1`}>
                            <div className={`w-1/2 text-[#595959]`}>Scope</div>
                            <div className={`w-1/2`}>10 weeks</div>
                        </div>
                    </div>
                    <div className={`w-[300px] h-[1px] bg-black my-4`}/>
                    <div className={`flex flex-row w-[300px] text-sm whitespace-nowrap`}>
                        <div className={`flex-1 whitespace-nowrap`}>
                            <div className={`w-1/2 text-[#595959]`}>Tools</div>
                            <div className={`w-1/2`}>Figma</div>
                            <div className={`w-1/2`}>React Native</div>
                            <div className={`w-1/2`}>Expo</div>
                            <div className={`w-1/2`}>Miro</div>
                        </div>
                        <div className={`flex-1`}>
                            <div className={`w-1/2 text-[#595959]`}>Methods</div>
                            <div className={`w-1/2`}>Usability Testing</div>
                            <div className={`w-1/2`}>Concept</div>
                            <div className={`w-1/2`}>Interaction Prototyping</div>
                            <div className={`w-1/2`}>Visual Design</div>
                        </div>
                        
                    </div>
                    <div className={`w-[300px] h-[1px] bg-black my-4`}/>
                    <img src="/assets/impart/final_prototype.gif" className={`w-[700px] md:w-[900px] h-auto object-contain absolute sm:right-[-25%] lg:right-[-15%] sm:top-[200px] hidden sm:block`} alt="Animated GIF demo for Downballot" />
                    <ScrollButton className={`absolute xs:bottom-10 xs:left-0 sm:top-auto sm:bottom-10`}/>
                    <img src="/assets/impart/final_prototype.gif" className={`w-[700px] md:w-[900px] h-auto object-contain block sm:hidden ml-[-100px]`} alt="Animated GIF demo for Downballot" />
                </motion.div>
                
                <motion.div 
                    className={`h-fit-content min-h-[800px] sm:min-h-[500px] w-full mb-8 py-60`} 
                    id="slide-2"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 01. Context </div>
                    <div className={`flex flex-col sm:flex-row h-[70%] mt-4 sm:mt-10 justify-center`}>
                        <div className={`basis-1/4 text-xl lg:text-2xl sm:text-right sm:pl-8`}> How might we make collaboration between artists feel more like play than work? </div>
                        <div className={`w-full h-[1px] bg-black flex-none block sm:hidden my-4`}/>
                        <div className={`w-[1px] h-80vh bg-black flex-none hidden sm:block mx-10`}/>
                        <div className={`flex flex-col sm:flex-row sm:space-x-8 pr-16`}>
                            <div className={`basis-1/2 text-sm mt-4 sm:mt-1`}><strong>Artistic collaboration builds meaningful connections </strong> and opens up opportunities for discovering new ways of creating. The initial first step toward <strong>building a network of collaborators and receiving feedback, however, is greatly inhibited by social risk and time to receive feedback.</strong></div>
                            <div className={`basis-1/2 text-sm mt-4 sm:mt-1`}>COVID-19 limited opportunities for collaboration by reducing the chance social encounters that might yield potential collaborators.</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content md:min-h-[500px] w-full mb-8 py-[25%]`} 
                    id="slide-3"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 02. Understand </div>
                    <div className={`text-lg lg:text-xl`}> Empathy maps </div>
                    <div className={`w-full text-sm mt-1`}><strong>We interviewed five artists</strong> on their experiences collaborating with one another during the pandemic and created the following empathy maps. </div>
                    <motion.img 
                        src={`/assets/impart/empathy_map_${mapNumber}.png`} 
                        className={`object-contain w-[90%] max-w-[900px] rounded-xl border border-[#000000] border-opacity-20 mb-8 mt-6 `}
                        animate={wiggleControls}
                        onClick={handleEmpathyMapClick}
                        whileHover={{ scale: 1.01 }}
                    />
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full mb-8 flex flex-col items-center justify-center py-[40%]`} 
                    id="slide-4"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-base lg:text-lg self-start mb-4 sm:mb-0`}> User personas </div>
                    <div className={`flex flex-col block sm:hidden`}>
                        <div className={`flex flex-row`}> 
                            <div className={`flex flex-row justify-center flex-none max-h-[90px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-6 mr-4`}>
                                <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                            </div>
                            <div className={`flex flex-col`}>
                                <div>Veronica</div>
                                <div className={`text-xs`}>Printmaker, video game designer, and art teacher </div>
                            </div>
                        </div>
                        <div className={`flex flex-row mt-4`}>
                            <div className={`flex-none w-[2px] h-[full] bg-black rounded-xl`}/>
                            <div className={`text-xs ml-4`}>Veronica expressed feeling disappointed when collaborators dropped off from projects, disliking the rigid, structured nature of collaboration, and how difficult it was to determine how artists act in collaboration.</div>
                        </div>
                        <div className={`flex flex-row mt-10`}> 
                            <div className={`flex flex-row justify-center flex-none max-h-[90px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-6 mr-4`}>
                                <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                            </div>
                            <div className={`flex flex-col`}>
                                <div>Makena</div>
                                <div className={`text-xs`}>Visual artist, art major at UCSB</div>
                            </div>
                        </div>
                        <div className={`flex flex-row mt-4 mb-10`}>
                            <div className={`flex-none w-[2px] h-[full] bg-black rounded-xl`}/>
                            <div className={`text-xs ml-4`}>Makena expressed feeling shy about sharing her own art, and feeling more connected to other artists by their work itself rather than their specific identities.</div>
                        </div>
                    </div>

                    <div className={`hidden sm:grid grid-cols-2 gap-x-10 mb-10 mt-6`}>
                        <div className={`flex flex-row`}> 
                            <div className={`flex flex-row justify-center flex-none max-h-[90px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-6 mr-4`}>
                                <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                            </div>
                            <div className={`flex flex-col`}>
                                <div>Veronica</div>
                                <div className={`text-xs`}>Printmaker, video game designer, and art teacher </div>
                            </div>
                        </div>
                        <div className={`flex flex-row`}> 
                            <div className={`flex flex-row justify-center flex-none max-h-[90px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-6 mr-4`}>
                                <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                            </div>
                            <div className={`flex flex-col`}>
                                <div>Makena</div>
                                <div className={`text-xs`}>Visual artist, art major at UCSB</div>
                            </div>
                        </div>
                        <div className={`flex flex-row mt-4`}>
                            <div className={`flex-none w-[2px] h-full bg-black`}/>
                            <div className={`text-xs  ml-4`}>Veronica expressed feeling disappointed when collaborators dropped off from projects, disliking the rigid, structured nature of collaboration, and how difficult it was to determine how artists act in collaboration.</div>
                        </div>
                        <div className={`flex flex-row mt-4`}>
                            <div className={`flex-none w-[2px] h-[full] bg-black`}/>
                            <div className={`text-xs ml-4`}>Makena expressed feeling shy about sharing her own art, and feeling more connected to other artists by their work itself rather than their specific identities.</div>
                        </div>
                    </div>
                    <div className={`bg-black rounded-xl p-4 text-white text-center mx-10 mb-10 flex-none`}>Daphne and Makena's experiences showed us that although artists desire creative community to seek out new art and inspire their own art, seeking collaborators feels risky.</div>
                    <div className={`flex flex-col items-center`}>
                        <div className={``}>We refined our initial question.</div>
                        <div className={`text-center text-xl`}>How might we reduce the risk that prevents artists from seeking new sources of inspiration and feedback from a broader network of creators?</div>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content min-h-[1600px] lg:min-h-[1500px] w-full mb-8 py-32`} 
                    id="slide-5"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 03. Prototype </div>
                    <div className={`text-lg lg:text-xl`}> Experience prototyping </div>
                    <div className={`w-full text-sm mt-4`}>We came up with some initial solutions.</div>
                    <div className={`flex flex-col sm:flex-row mt-7`}>
                        <img className={`w-[30px] sm:w-auto sm:h-full mb-5 sm:mb-0 mr-6`} src={`/assets/impart/1_icon.png`}/>
                        <div>
                            <div className={`max-w-[400px] lg:max-w-[600px]`}>
                                <div className={`text-sm mb-5 md:mb-2`}><strong>Idea:</strong> Create a social media platform solely dedicated to allowing anonymous artists to connect and grow a following.</div>
                                <div className={`text-sm mb-5 md:mb-2`}><strong>Assumption: </strong>It is possible to make connections between strangers without revealing your identity.</div>
                                <div className={`text-sm mb-10 md:mb-10 text-black text-opacity-50`}>To test this assumption, we recruited three participants, asking each one to create something inspired by the previous participant’s creation.</div>
                            </div>
                            <div className={`flex flex-row space-x-6`}>
                                <div className={`basis-1/2`}>
                                    <img className={`w-full max-w-[400px]`} src={`/assets/impart/experience_prototype_1.png`}/>
                                    <div className={`text-sm mt-6 text-black text-opacity-50 max-w-[500px]`}>Participants noted that the process of making was inspired, and expressed wanting to know more about the artists’ work they used to create their own. </div>
                                </div>
                                <div className={`basis-1/2 `}>
                                    <img className={`w-full max-w-[400px]`} src={`/assets/impart/experience_prototype_2.png`}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row mt-20`}>
                    <img className={`w-[30px] sm:w-auto sm:h-full mb-5 sm:mb-0 mr-6`} src={`/assets/impart/2_icon.png`}/>
                        <div>
                            <div className={`max-w-[400px] lg:max-w-[600px]`}>
                                <div className={`text-sm mb-5 md:mb-2`}><strong>Idea: </strong>Create a collaboration platform that transforms collaboration into a game, allowing artists to piecemeal feedback by playing on one another's ideas.</div>
                                <div className={`text-sm mb-5 md:mb-2`}><strong>Assumption: </strong>Building off one another's work is rewarding for artists.</div>
                                <div className={`text-sm mb-5 md:mb-2 text-black text-opacity-50`}>To test this assumption, we presented one participant with one painting paired with an artist’s self-written biography, and one painting by an anonymous artist, and gauged how connected the participant felt to each artist. </div>
                                <div className={`text-sm mb-5 md:mb-2 text-black text-opacity-50`}>The participant noted she felt more connected to the artists on the basis of their work rather than on the basis of their identities. Moreover, in examining the work with the artist’s biography, the participant notably examined the work first, before reading the artist’s biography. </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full h-[1px] bg-black mt-48`}/>
                    <div className={`text-lg lg:text-xl mt-4`}> Note</div>
                    <div className={`w-full text-sm mt-4`}>We had began our project assuming that collaboration was important for artists, with collaboration encompassing writing, visual art, and music. In user interviews after experience prototyping, we found that <strong>participants had difficulty what type of medium</strong> they should collaborate with. It became clear that <strong>defining the specific domain in which collaboration would take place was an important question</strong> that would shape how we thought about creative community, authenticity, and feedback. <strong>We decided to move forward with visual art being the primary site of collaboration.</strong></div>
                </motion.div>

                <motion.div 
                    className={`h-full w-full mb-8 flex flex-col justify-center`} 
                    id="slide-6"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`text-lg lg:text-xl`}> Low fidelity to high fidelity prototyping </div>
                    <div className={`w-full text-sm mt-4`}><strong>Our prototypes sought to accomplish three primary tasks.</strong></div>
                    <div className={`flex flex-col sm:flex-row sm:space-x-6 max-w-[900px] mt-10`}>
                        <div className={`basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                            <div className={`text-sm text-center`}>Simple</div>
                            <div className={`text-xs text-center`}>Browse art from other users to gain inspiration.</div>
                        </div>
                        <div className={`basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                            <div className={`text-sm text-center`}>Moderate</div>
                            <div className={`text-xs text-center`}>Upload a creatio­­­n of your own inspired by something you have seen by other users.</div>
                        </div>
                        <div className={`basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                            <div className={`text-sm text-center`}>Complex</div>
                            <div className={`text-xs text-center`}>Join a collaboration group with other users.</div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full mb-8 pb-12`} 
                    id="slide-7"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`w-full text-sm`}>Once we finalized a product direction, we moved on toward building our prototypes, beginning with <strong>a few low fidelity prototypes.</strong></div>
                    <div className={`flex flex-col sm:flex-row relative mt-10`}>
                        <div className={`sm:transform sm:-rotate-90 sm:absolute top-6 left-[-2px] sm:text-xs mb-5 sm:mb-0`}>Simple</div>
                        <div className={`w-48 sm:w-36 md:w-32 lg:w-36 xl:w-24`}></div>
                        <div className={`grid grid-cols-4 gap-x-3 sm:gap-x-10 max-w-[1000px] bg-[#5B5B5B] bg-opacity-[5%] rounded-xl p-6 md:p-10`}>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/simple_1.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Image is clicked</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/simple_2.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Open to thread with related images</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/simple_3.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>View information about image</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/simple_4.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Bookmark image</div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row relative mt-10`}>
                        <div className={`sm:transform sm:-rotate-90 sm:absolute top-10 left-[-2px] sm:text-xs mb-5 sm:mb-0`}>Moderate</div>
                        <div className={`w-48 sm:w-36 md:w-32 lg:w-36 xl:w-24`}></div>
                        <div className={`grid grid-cols-4 gap-x-3 sm:gap-x-10 max-w-[1000px] bg-[#5B5B5B] bg-opacity-[5%] rounded-xl p-6 md:p-10`}>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/moderate_1.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Tap create button</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/moderate_2.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Upload work</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/moderate_3.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Add image details</div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col sm:flex-row relative mt-10`}>
                        <div className={`sm:transform sm:-rotate-90 sm:absolute top-6 left-[-2px] sm:text-xs mb-5 sm:mb-0`}>Complex</div>
                        <div className={`w-48 sm:w-36 md:w-32 lg:w-36 xl:w-24`}></div>
                        <div className={`grid grid-cols-4 gap-x-3 sm:gap-x-10 max-w-[1000px] bg-[#5B5B5B] bg-opacity-[5%] rounded-xl p-6 md:p-10`}>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/complex_1.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>View all notifications</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/complex_2.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Tap a single notification</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/complex_3.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>View a user's profile</div>
                            </div>
                            <div className={`flex flex-col`}> 
                                <img className={`w-full mr-6`} src={`/assets/impart/complex_4.png`}/>
                                <div className={`text-[10px] sm:text-xs text-center mt-4`}>Start collaboration group</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full mb-8 pb-12 py-60`} 
                    id="slide-8"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`w-full text-sm`}>We used heuristic evaluations with 4 different users at each step to improve our prototypes.</div>
                    <div className={`w-full text-sm mt-4`}>We used <strong>Nielsen Norman's usability heuristics</strong> to carry out our analysis: visiblity of system status, match between system and world, user control and freedom, consiste­ncy and standards, error prevention, recognition not recall, flexibility and efficiency of use, aesthetic and minimalist design, help users with errors, help and documentation, accessibility, fairness and inclusion, and value alignment.</div>
                    <div className={`mb-8 mt-16 sm:mt-6 relative flex flex-col sm:flex-row ml-5`}>
                        <div className={`sm:transform sm:-rotate-90 sm:absolute top-32 md:top-26 left-[-28px] text-xs mb-4 sm:mb-0`}>Summary of Violations</div>
                        <div className={`w-12`}/>
                        <img src={`/assets/impart/summary_of_violations.png`} className={`object-contain w-[80%] max-w-[500px]`}/>
                    </div>
                    <div className={`mb-8 mt-6 relative flex flex-col sm:flex-row ml-5`}>
                        <div className={`sm:transform sm:-rotate-90 sm:absolute top-24 md:top-26 left-[-28px] text-xs mb-4 sm:mb-0`}>Evaluation Statistics</div>
                        <div className={`w-12`}/>
                        <img src={`/assets/impart/evaluation_statistics.png`} className={`object-contain w-[65%] max-w-[450px]`}/>
                    </div>
                </motion.div>

                <motion.div 
                    className={`h-fit-content w-full mb-8 pb-12 py-60`} 
                    id="slide-9"
                    viewport={{ once: true }}
                    style={{ opacity: 0 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1}}
                    transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                >
                    <div className={`w-full text-sm`}><strong>Our final prototype</strong> was built using React Native.</div>
                    <div className={`grid grid-cols-4 gap-x-3 sm:gap-x-10 mb-10 mt-6`}>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_1.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_2.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_3.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_4.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_5.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_6.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_7.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_8.png`}/>
                        <img className={`w-full rounded-xl object-contain shadow-lg`} src={`/assets/impart/final_9.png`}/>
                    </div>

                </motion.div>

                <motion.div 
                    className={`h-full w-full mb-8 flex flex-col min-h-[700px] py-60`} 
                    id="slide-10"
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
                            With a team of four, I accomplished the following:
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Built lo-fi, med-fi, and hi-fi prototypes using Figma</li>
                                    <li className="ml-2">Built an MVP, an Android application using React Native and Expo</li>
                                    <li className="ml-2">Demoed our project at Stanford's Human-Computer Interaction Project Fair</li>
                                    <li className="ml-2">Interviewed over 30 users total, from experience prototyping to usability testing</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`w-[1px] h-100vh bg-black mt-2 mx-8`}/>
                        <div className={`basis-1/2`}>
                            <div className={`text-lg lg:text-xl`}> Learning </div>
                            <div className={`w-full text-sm mt-4`}><strong>Narrowing down the specific user we sought to help was important</strong> to establish early-on in the needfinding process.
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Mixing mediums meant that users struggled to figure out how their art might work with one another, particularly when we were experience prototyping.</li>
                                    <li className="ml-2">Each medium came with its own unique problems and concerns—resource constraints and equipment availability for musicians, rituals for writers, and commissions for painters.</li>
                                </ul>
                            </div>
                            <div className={`w-full text-sm mt-4`}><strong>Collaboration is a multidimensional problem,</strong> particularly when thinking about inspiration and feedback and how both feed in to one another.</div>
                            <div className={`w-full text-sm mt-4`}>
                                <strong>Some of my favorite papers on collaboration:</strong>
                                <ul className="list-disc pl-4">
                                    <li className="ml-2"><a target="__blank" href="https://doi.org/10.1207/S15327051HCI1523_4" className="text-black">Olson & Olson, Distance Matters</a></li>
                                    <li className="ml-2"><a target="__blank" href="https://dl.acm.org/doi/10.1145/142750.142769" className="text-black">Hollan & Stornetta, Beyond Being There</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}