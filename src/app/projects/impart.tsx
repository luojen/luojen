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
import Image from '../components/Image';

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
    
    return (
        <div className={`${className} h-[50%] md:h-full w-full relative`}>            
            <div className={`h-full w-full mb-8`}>

                <div className={`h-full w-full min-h-[1200px] sm:min-h-[850px] p-8 flex flex-col bg-[#202020] text-[#FCFCFC] relative`} id="slide-1">
                    <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData} className={`self-end`}/>
                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}} className={`absolute text-sm lg:text-base`}>IMPART</div>
                    <div className={`flex-1 text-3xl md:text-4xl mt-24 mb-4 max-w-[900px]`}>
                        <span className={`mr-2`}>Less talking and more making—fostering creative collaboration between artists.</span>
                        <span style={{ fontFamily: 'NeueHaasUnicaW1G-Regular', fontWeight: 'normal', fontStyle: 'regular'}}  className={`text-base lg:text-s whitespace-nowrap`}>(January ‘21-March '21)</span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#FCFCFC] flex-none`}/>
                    <div className={`w-[300px] text-sm mt-4`}>In a design sprint with three other Stanford students for Stanford's foundational human-computer interaction course, we designed a mobile platform for artists to give and take inspiration.</div>
                    <div className={`w-[300px] h-[1px] bg-[#FCFCFC] my-4 flex-none`}/>
                    <div className={`flex flex-col`}>
                        <div className={`flex flex-row w-[300px] text-sm`}>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div className={`w-1/2`}><strong>Role</strong></div>
                                <div className={`w-1/2`}>Product Designer</div>
                                <div className={`w-1/2`}>Android Engineer</div>
                            </div>
                            <div className={`flex-1`}>
                                <div className={`w-1/2`}><strong>Scope</strong></div>
                                <div className={`w-1/2`}>10 weeks</div>
                            </div>
                        </div>
                        <div className={`w-[300px] h-[1px] bg-[#FCFCFC] my-4 flex-none`}/>
                        <div className={`flex flex-row w-[300px] text-sm whitespace-nowrap`}>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div className={`w-1/2`}><strong>Tools</strong></div>
                                <div className={`w-1/2`}>Figma</div>
                                <div className={`w-1/2`}>React Native</div>
                                <div className={`w-1/2`}>Expo</div>
                                <div className={`w-1/2`}>Miro</div>
                            </div>
                            <div className={`flex-1`}>
                                <div className={`w-1/2`}><strong>Methods</strong></div>
                                <div className={`w-1/2`}>Usability Testing</div>
                                <div className={`w-1/2`}>Concept</div>
                                <div className={`w-1/2`}>Interaction Prototyping</div>
                                <div className={`w-1/2`}>Visual Design</div>
                            </div>
                        </div>
                        <img src="/assets/impart/final_prototype.gif" className={`block sm:hidden w-[150px] h-auto object-contain mt-[24px]`} alt="Animated GIF demo for Impart"/>
                    </div>
                    <img src="/assets/impart/final_prototype.gif" className={`hidden sm:block sm:w-[200px] h-auto object-contain absolute right-[100px] top-[350px]`} alt="Animated GIF demo for Impart"/>
                    <div className={`h-full flex flex-col justify-end relative`}>
                    <ScrollButton className={`absolute xs:bottom-10 xs:left-0 sm:top-auto sm:bottom-10`}/>
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
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 01. Context </div>
                        <div className={`text-xl w-3/4 mb-5`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>How might we make creative collaboration feel more like play than work?</div>
                        <div className={`flex flex-col text-xs space-y-4 mt-4 md:mt-0 w-full sm:w-3/4 sm:max-w-[800px]`}>
                            <div><strong>Artistic collaboration builds meaningful connections</strong> and opens up opportunities for discovering new ways of creating. The initial first step toward <strong>building a network of collaborators and receiving feedback, however, is greatly inhibited by social risk and time to receive feedback.</strong></div>
                            <div>COVID-19 limited opportunities for collaboration by reducing the chance social encounters that might yield potential collaborators.</div>
                        </div>
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
                        <div className={`mt-5`}>
                            <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Empathy maps</div>
                            <div className={`text-xs mt-3`}><strong>I interviewed five artists</strong> on their experiences collaborating with one another during the pandemic and <strong>created the following empathy maps.</strong></div>
                            <motion.img 
                                src={`/assets/impart/empathy_map_${mapNumber}.png`} 
                                className={`object-contain w-[90%] max-w-[900px] rounded-xl border border-[#000000] border-opacity-20 mb-8 mt-6 `}
                                onClick={handleEmpathyMapClick}
                                whileHover={{ scale: 1.01 }}
                            />
                        </div>
                        <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>User personas</div>
                        <div className={`flex flex-col block sm:hidden mt-5`}>
                            <div className={`flex flex-row`}> 
                                <div className={`flex flex-row justify-center items-center flex-none h-[50px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-4 mr-4`}>
                                    <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}}>Veronica</div>
                                    <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Printmaker, video game designer, and art teacher </div>
                                </div>
                            </div>
                            <div className={`flex flex-row mt-4`}>
                                <div className={`flex-none w-[2px] h-[full] bg-[#202020] rounded-xl`}/>
                                <div className={`text-xs ml-4`}>Veronica expressed feeling disappointed when collaborators dropped off from projects, disliking the rigid, structured nature of collaboration, and how difficult it was to determine how artists act in collaboration.</div>
                            </div>
                            <div className={`flex flex-row mt-10`}> 
                                <div className={`flex flex-row justify-center items-center flex-none h-[50px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-4 mr-4`}>
                                    <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}}>Makena</div>
                                    <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Visual artist, art major at UCSB</div>
                                </div>
                            </div>
                            <div className={`flex flex-row mt-4 mb-10`}>
                                <div className={`flex-none w-[2px] h-[full] bg-[#202020] rounded-xl`}/>
                                <div className={`text-xs ml-4`}>Makena expressed feeling shy about sharing her own art, and feeling more connected to other artists by their work itself rather than their specific identities.</div>
                            </div>
                        </div>
                        <div className={`hidden sm:grid grid-cols-2 gap-x-10 mb-10 mt-6 max-w-[800px]`}>
                            <div className={`flex flex-row`}> 
                                <div className={`flex flex-row justify-center items-center flex-none h-[50px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-4 mr-4`}>
                                    <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}}>Veronica</div>
                                    <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Printmaker, video game designer, and art teacher </div>
                                </div>
                            </div>
                            <div className={`flex flex-row`}> 
                                <div className={`flex flex-row justify-center items-center flex-none h-[50px] bg-[#D9D9D9] bg-opacity-[25%] rounded-xl p-4 mr-4`}>
                                    <img className={`h-full`} src={`/assets/impart/user_icon.png`}/>
                                </div>
                                <div className={`flex flex-col`}>
                                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}}>Makena</div>
                                    <div className={`text-xs`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Visual artist, art major at UCSB</div>
                                </div>
                            </div>
                            <div className={`flex flex-row mt-4`}>
                                <div className={`flex-none w-[2px] h-full bg-[#202020]`}/>
                                <div className={`text-xs  ml-4`}>Veronica expressed feeling disappointed when collaborators dropped off from projects, disliking the rigid, structured nature of collaboration, and how difficult it was to determine how artists act in collaboration.</div>
                            </div>
                            <div className={`flex flex-row mt-4`}>
                                <div className={`flex-none w-[2px] h-[full] bg-[#202020]`}/>
                                <div className={`text-xs ml-4`}>Makena expressed feeling shy about sharing her own art, and feeling more connected to other artists by their work itself rather than their specific identities.</div>
                            </div>
                        </div>
                        <div className={`bg-[#202020] rounded-xl p-4 text-[#FCFCFC] mb-10 flex-none max-w-[700px]`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Daphne and Makena's experiences showed us that although artists desire creative community to seek out new art and inspire their own art, seeking collaborators feels risky.</div>
                    </motion.div>
                </div>
                <div className={`h-fit-content w-full p-8 py-20 bg-[#E2E2E2]`} id="slide-3">
                    <motion.div 
                        className={`h-full w-full flex flex-col justify-center items-center`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div className={`text-center`}>We refined our initial question</div>
                        <div className={`text-xl w-3/4 text-center`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>How might we make collaboration feel less risky?</div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 min-h-[800px] bg-[#202020] text-[#FCFCFC]`} id="slide-3">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 03. Prototype </div>
                        <div className={`text-lg lg:text-xl`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Experience prototyping </div>
                    <div className={`w-full text-xs mt-4`}>We came up with some initial solutions.</div>
                    <div className={`flex flex-col sm:flex-row mt-7 max-w-[800px]`}>
                        <div className={`flex flex-col sm:flex-row justify-start items-start`}>
                            <div className={`flex flex-col justify-start items-start mr-2 sm:mr-6 mb-5 sm:mb-0`}><img className={`flex-none w-[30px] sm:w-[40px] sm:h-full`} src={`/assets/impart/1_icon.svg`}/></div>
                            <div className={`flex flex-col space-y-3 mb-5 max-w-[400px] lg:max-w-[600px] text-xs`}>
                                <div className={``}><strong>Idea:</strong> Create a social media platform solely dedicated to allowing anonymous artists to connect and grow a following.</div>
                                <div className={``}><strong>Assumption: </strong>It is possible to make connections between strangers without revealing your identity.</div>
                                <div className={``} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>To test this assumption, we recruited three participants, asking each one to create something inspired by the previous participant’s creation.</div>
                                <div className={``} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Participants noted that the process of making was inspired, and expressed wanting to know more about the artists’ work they used to create their own. </div>
                            </div>
                            <div className={`sm:pl-5`}>
                                <img className={`w-full max-w-[400px]`} src={`/assets/impart/experience_prototype_2.png`}/>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full h-full flex flex-col sm:items-end mt-5 max-w-[900px]`}>
                        <img className={`w-full max-w-[400px]`} src={`/assets/impart/experience_prototype_1.png`}/>
                    </div>
                    <div className={`flex flex-col sm:flex-row mt-16`}>
                        <div className={`flex flex-col sm:flex-row justify-start items-start`}>
                            <div className={`flex flex-col justify-start items-start mr-2 sm:mr-6 mb-5 sm:mb-0`}><img className={`flex-none w-[30px] sm:w-[40px] sm:h-full`} src={`/assets/impart/2_icon.svg`}/></div>
                            <div className={`flex flex-col space-y-3 mb-5 max-w-[400px] lg:max-w-[600px] text-xs`}>
                                <div className={``}><strong>Idea: </strong>Create a collaboration platform that transforms collaboration into a game, allowing artists to piecemeal feedback by playing on one another's ideas.</div>
                                <div className={``}><strong>Assumption: </strong>Building off one another's work is rewarding for artists.</div>
                                <div className={``} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>To test this assumption, we presented one participant with one painting paired with an artist’s self-written biography, and one painting by an anonymous artist, and gauged how connected the participant felt to each artist.</div>
                                <div className={``} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>The participant noted she felt more connected to the artists on the basis of their work rather than on the basis of their identities. Moreover, in examining the work with the artist’s biography, the participant notably examined the work first, before reading the artist’s biography. </div>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full h-[1px] bg-[#FCFCFC] mt-[200px]`}/>
                    <div className={`text-lg lg:text-xl mt-4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Note</div>
                    <div className={`w-full text-xs mt-4`}>We had began our project assuming that collaboration was important for artists, with collaboration encompassing writing, visual art, and music. In user interviews after experience prototyping, we found that <strong>participants had difficulty what type of medium</strong> they should collaborate with. It became clear that <strong>defining the specific domain in which collaboration would take place was an important question</strong> that would shape how we thought about creative community, authenticity, and feedback. <strong>We decided to move forward with visual art being the primary site of collaboration.</strong></div>
                    </motion.div>
                </div>

                <div className={`h-fit-content w-full p-8 bg-[#F4F4F3]`} id="slide-3">
                    <motion.div 
                        className={`h-full w-full`} 
                        viewport={{ once: true }}
                        style={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1}}
                        transition={{ type: "easeIn", duration: 0.5, delay: 0.25}}
                    >
                       <div className={`text-lg lg:text-xl`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Low fidelity to high fidelity prototyping </div>
                       <div className={`text-xs mt-3`}><strong>Our prototypes sought to accomplish three primary tasks</strong></div>
                       <div className={`flex flex-col sm:flex-row sm:space-x-6 max-w-[900px] mt-5`}>
                            <div className={`bg-[#FCFCFC] basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-sm text-center`}><strong>Simple</strong></div>
                                <div className={`text-xs text-center`}>Browse art from other users to gain inspiration.</div>
                            </div>
                            <div className={`bg-[#FCFCFC] basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-sm text-center`}><strong>Moderate</strong></div>
                                <div className={`text-xs text-center`}>Upload a creatio­­­n of your own inspired by something you have seen by other users.</div>
                            </div>
                            <div className={`bg-[#FCFCFC] basis-1/3 border border-black p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-sm text-center`}><strong>Complex</strong></div>
                                <div className={`text-xs text-center`}>Join a collaboration group with other users.</div>
                            </div>
                        </div>
                        <div className={`text-xs mt-8`}>Once we finalized a product direction, we moved on toward building our prototypes, beginning with <strong>a few low fidelity prototypes.</strong></div>
                        <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'bold', fontStyle: 'roman'}} className={`mt-8`}>Simple</div>
                        <div className={`flex flex-col sm:flex-row relative mt-3`}>
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
                        <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'bold', fontStyle: 'roman'}} className={`mt-8`}>Moderate</div>
                        <div className={`flex flex-col sm:flex-row relative mt-3`}>
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
                        <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'bold', fontStyle: 'roman'}} className={`mt-8`}>Complex</div>
                        <div className={`flex flex-col sm:flex-row relative mt-3`}>
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
                        <div className={`flex flex-col text-xs space-y-4 mt-10 w-full sm:max-w-[800px]`}>
                            <div>We used heuristic evaluations with 4 different users at each step to improve our prototypes.</div>
                            <div>We used <strong>Nielsen Norman's usability heuristics</strong> to carry out our analysis: visiblity of system status, match between system and world, user control and freedom, consiste­ncy and standards, error prevention, recognition not recall, flexibility and efficiency of use, aesthetic and minimalist design, help users with errors, help and documentation, accessibility, fairness and inclusion, and value alignment.</div>
                        </div>
                        <div className={`mt-8`}>
                            <div className={`text-xs mb-2`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Summary of violations</div>
                            <img src={`/assets/impart/summary_of_violations.png`} className={`object-contain w-[80%] max-w-[500px]`}/>
                            <div className={`text-xs mt-8 mb-2`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Evaluation statistics</div>
                            <img src={`/assets/impart/evaluation_statistics.png`} className={`object-contain w-[65%] max-w-[450px]`}/>
                        </div>
                        <div className={`flex flex-col text-xs space-y-4 mt-10 w-full sm:max-w-[800px]`}>
                            <div><strong>Our final prototype</strong> was built using React Native. </div>
                        </div>
                        <div className={`grid grid-cols-3 sm:grid-cols-4 gap-y-6 gap-x-3 sm:gap-x-10 mb-10 mt-6`}>
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
                                With a team of four, I accomplished the following:
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Built lo-fi, med-fi, and hi-fi prototypes using Figma</li>
                                    <li className="ml-2">Built an MVP, an Android application using React Native and Expo</li>
                                    <li className="ml-2">Demoed our project at Stanford's Human-Computer Interaction Project Fair</li>
                                    <li className="ml-2">Interviewed over 30 users total, from experience prototyping to usability testing</li>
                                </ul>
                            </div>
                            <div className={`text-xl w-3/4 pt-6`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Learning </div>
                            <div className={`w-full text-xs mt-4`}><strong>Narrowing down the specific user we sought to help was important</strong> to establish early-on in the needfinding process.
                                <ul className="list-disc pl-4">
                                    <li className="ml-2">Mixing mediums meant that users struggled to figure out how their art might work with one another, particularly when we were experience prototyping.</li>
                                    <li className="ml-2">Each medium came with its own unique problems and concerns—resource constraints and equipment availability for musicians, rituals for writers, and commissions for painters.</li>
                                </ul>
                            </div>
                            <div className={`w-full text-xs mt-4`}><strong>Collaboration is a multidimensional problem,</strong> particularly when thinking about inspiration and feedback and how both feed in to one another.</div>
                            <div className={`w-full text-xs mt-4`}>
                                <strong>Some of my favorite papers on collaboration:</strong>
                                <ul className="list-disc pl-4">
                                    <li className="ml-2"><a target="__blank" href="https://doi.org/10.1207/S15327051HCI1523_4" className="text-black">Olson & Olson, Distance Matters</a></li>
                                    <li className="ml-2"><a target="__blank" href="https://dl.acm.org/doi/10.1145/142750.142769" className="text-black">Hollan & Stornetta, Beyond Being There</a></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}