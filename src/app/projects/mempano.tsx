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
import Image from '../components/Image';

type MempanoProps = {
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}


export default function Mempano({ className, selectedProject, setSelectedProject, projectData }: MempanoProps) {

    return (
        <div className={`${className} h-[50%] md:h-full w-full relative`}>            
            <div className={`h-full w-full mb-8`}>

                <div className={`h-full w-full min-h-[700px] sm:min-h-[700px] p-8 flex flex-col bg-[#202020] text-[#FCFCFC] relative`} id="slide-1">
                    <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData} className={`self-end`}/>
                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}} className={`absolute text-sm lg:text-base`}>MEMPANO</div>
                    <div className={`flex-1 text-3xl md:text-4xl mt-24 mb-4`}>
                        <span className={`mr-2`}>Recreating sites of drastic change through immersive virtual representations. </span>
                        <span style={{ fontFamily: 'NeueHaasUnicaW1G-Regular', fontWeight: 'normal', fontStyle: 'regular'}}  className={`text-base lg:text-s whitespace-nowrap`}>(January ‘22—March ‘22)</span>
                    </div>
                    <div className={`w-full h-[1px] bg-[#FCFCFC]`}/>
                    <div className={`h-full flex flex-col justify-end relative`}>
                        <ScrollButton className={`absolute xs:bottom-10 xs:left-0 sm:top-auto sm:bottom-10`}/>
                        <img src="/assets/mempano/chinatown_panorama_edited.png" className={`w-[350px] md:w-[500px] h-auto object-contain absolute xs:left-8 xs:top-5 xs:-ml-8 sm:left-auto sm:top-auto sm:bottom-4 sm:right-0`} />
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
                        <div className={`w-[300px] sm:w-[350px]  text-xs sm:text-sm`}>With a team of four In Stanford’s Human-Computer Interaction Research Seminar, <strong>we co-authored a novel HCI study that investigates the relationship between digital representation and personal memory</strong> via enabling novice users to make high-level edits on panoramas. </div>
                        <div className={`w-[300px] sm:w-[350px]  h-[1px] bg-black my-4`}/>
                        <div className={`flex flex-row w-[350px] text-xs sm:text-sm`}>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Role</div>
                                <div className={`w-1/2`}>UX Researcher</div>
                            </div>
                            <div className={`flex-1`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Scope</div>
                                <div className={`w-1/2`}>10 weeks</div>
                            </div>
                        </div>
                        <div className={`w-[300px] sm:w-[350px] h-[1px] bg-black my-4`}/>
                        <div className={`flex flex-row w-[350px] sm:w-[360px] text-xs sm:text-sm`}>
                            <div className={`flex-1 whitespace-nowrap`}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Tools</div>
                                <div className={`w-1/2`}>Python</div>
                                <div className={`w-1/2`}>Javascript</div>
                                <div className={`w-1/2`}>Figma</div>
                            </div>
                            <div className={`flex-1 whitespace-nowrap `}>
                                <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'bold', fontStyle: 'normal'}} className={`w-1/2 text-[#595959]`}>Methods</div>
                                <div className={`w-1/2`}>System evaluation</div>
                                <div className={`w-1/2`}>Likert scale ratings</div>
                                <div className={`w-1/2`}>User studies</div>
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
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 02. Context </div>
                        <div className={`text-lg`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Introduction</div>
                        <div className={`flex flex-col text-xs sm:text-sm space-y-4 mt-4 w-full sm:w-3/4 sm:max-w-[800px]`}>
                            <div>In “The Image of The City,” Kevin Lynch defines <strong>the city as a form of temporal art.</strong> Much like sculptures, cities are spatial structures, but unlike sculptures, “cities undergo change at every moment.” <strong>As spaces evolve over time, the gap between digital representations of a specific location and individual experiences of a specific location widens.</strong></div>
                            <div><strong>We wanted to help individuals who have lived in locations that have experienced drastic change</strong> (natural disasters, gentrification, and displacement) <strong>bridge the gap between an inaccessible past and an accessible present.</strong> </div>
                        </div>
                        <div className={`text-lg mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Why panoramas?</div>
                        <div className={`mt-5 grid grid-cols-3 items-center justify-center text-xs sm:w-3/4 sm:max-w-[800px]`}>
                            <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#202020] border-r-[1px] border-r-[#202020]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}><div className='text-center'>Representation</div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#202020] border-r-[1px] border-r-[#202020]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}><div className='text-center'>Pro</div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#202020]`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}><div className='text-center'>Con</div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full border-r-[1px] border-r-[#202020] border-b-[1px] border-b-[#202020] `}><div className='text-center'><strong>Images</strong></div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full border-r-[1px] border-r-[#202020] border-b-[1px] border-b-[#202020] `}><div className='text-center'>Allow users to convey specific details relevant to a given location </div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full border-b-[1px] border-b-[#202020] `}><div className='text-center'><strong>Do not allow users to synthesize these details into a spatial portrait of a location in which users can model the relationships between these specific details</strong></div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full border-r-[1px] border-r-[#202020]`}><div className='text-center'><strong>Virtual reality reconstructions</strong></div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full border-r-[1px] border-r-[#202020]`}><div className='text-center'>Allow users to mold and texture places flexibly beyond real-world representations of a location </div></div>
                            <div className={`flex flex-col justify-start items-center p-4 h-full w-full`}><div className='text-center'><strong>Resource-intensive and inaccessible to non-technical individuals</strong></div></div>
                        </div>
                        <div className={`mt-10 bg-[#202020] rounded-xl p-4 text-[#FCFCFC] mb-10 flex-none max-w-[700px]`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>We hypothesized that panoramas could both make high-level image-edits accessible to non-technical users and  synthesize specific details into spatial portraits of locations.</div>
                        <div className={`text-lg mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Related work</div>
                        <div className={`flex flex-col sm:flex-row text-sm mt-4 max-w-[800px]`}>
                            <div className={`basis-1/3`}>Prior work follows under three umbrellas:</div>
                            <div className={`flex flex-col basis-2/3`}>
                                <div className={`flex flex-row mt-5 sm:mt-0 sm:ml-10 items-start sm:items-center`}>
                                    <div className={`flex flex-col justify-start items-start  flex-none`}><img className={`flex-none w-[30px]`} src={`icons/1_icon_black.svg`}/></div>
                                    <div className={`ml-5`}>Replicating physical location</div>
                                </div>
                                <div className={`flex flex-row basis-2/3 sm:ml-10 mt-4 items-start sm:items-center`}>
                                    <div className={`flex flex-col justify-start items-start  flex-none`}><img className={`flex-none w-[30px]`} src={`icons/2_icon_black.svg`}/></div>
                                    <div className={`ml-5`}>Creating an accurate representation of an individual’s spatial models</div>
                                </div>
                                <div className={`flex flex-row basis-2/3 sm:ml-10 mt-4 items-start sm:items-center`}>
                                    <div className={`flex flex-col justify-start items-start flex-none`}><img className={`flex-none w-[30px]`} src={`icons/3_icon_black.svg`}/></div>
                                    <div className={`ml-5`}>Image-editing to empower novice users</div>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-col sm:flex-row text-sm mt-10 max-w-[800px]`}>
                            <div className={`basis-1/3`}>Prior work exploring different mediums for representing spatial models:</div>
                        </div>
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
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 03. System </div>
                        <div className={`w-full text-sm my-4 max-w-[700px]`}>Using Python and Javascript, we built Mempano, a simple system integrating detailed user-provided images into a 360-degree panorama viewer, allowing novice users to seamlessly edit and experience locations significant to them. </div>
                        <div className={`text-lg lg:text-xl mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Goals </div>
                        <div className={`flex flex-col max-w-[700px] text-sm`}>
                            <div className={`flex flex-row mt-5 items-start sm:items-center flex-none`}>
                                <div className={`flex flex-col justify-start items-start flex-none`}><img className={`flex-none w-[40px]`} src={`icons/1_icon_white.svg`}/></div>
                                <div className={`ml-5`}>Enable users to make a series of high-level panoramic image edits that reflect their unique mental models of a location.</div>
                            </div>
                            <div className={`flex flex-row mt-5 items-start sm:items-center flex-none`}>
                                <div className={`flex flex-col justify-start items-start  flex-none`}><img className={`flex-none w-[40px]`} src={`icons/2_icon_white.svg`}/></div>
                                <div className={`ml-5`}>Enable viewers to view edited panoramas to gather a more distinctive narrative about a location.</div>
                            </div>
                        </div>
                        <div className={`text-lg lg:text-xl mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Process </div>
                        <div className={`flex flex-col sm:flex-row sm:space-x-6 max-w-[900px] mt-5 text-xs`}>
                            <div className={`basis-1/4 border border-[#FCFCFC] p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-xs text-center`}>Users provide coordinates of a geographic location and personal images</div>
                            </div>
                            <div className={`basis-1/4 border border-[#FCFCFC] p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-xs text-center`}>User specifies high-level edits to perform on the image (adjust object size, add/remove objects, upload images)</div>
                            </div>
                            <div className={`basis-1/4 border border-[#FCFCFC] p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-xs text-center`}>Mempano performs edits and represents edits in a 360-degree panorama</div>
                            </div>
                            <div className={`basis-1/4 border border-[#FCFCFC] p-5 md:p-10 rounded-xl mb-5 sm:mb-0`}>
                                <div className={`text-xs text-center`}>User uses 360-degree panorama viewer to explore their location</div>
                            </div>
                        </div>
                        <div className={`text-lg lg:text-xl mt-10`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Prototype </div>
                        <img src="/assets/mempano/system_prototype.png" className={`w-[350px] md:w-[500px] h-auto object-contain mt-5`} />
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
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}> 04. User study </div>
                        <div className={`text-lg lg:text-xl mt-5`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Study 1 </div>
                        <div className={`flex flex-col sm:flex-row max-w-[1000px] mt-5 sm:space-x-4`}>
                            <div className={`flex flex-col text-xs basis-1/2`}>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Goal</div>
                                    <div className={`mt-2`}>To enable users to make a series of high-level panoramic image edits that reflect their unique mental models of a location. </div>
                                </div>
                                <div className={`p-4 mt-3 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Hypotheses</div>
                                    <div className={`mt-2`}>1. Current digital ways of experiencing locations are not sufficient at representing individual perspectives and memories of locations.</div>
                                    <div className={`mt-2`}>2. User-edited panoramas can better represent the user's individual perspective and memories of a location.</div>
                                </div>
                                <div className={`p-4 mt-3 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Participants</div>
                                    <div className={`mt-2`}>6 total, ages 20 to 57, with limited experience in sketching and image editing</div>
                                </div>
                            </div>
                            <div className={`mt-3 sm:mt-0 flex flex-col text-xs basis-1/2`}>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Procedure</div>
                                    <div className={`flex flex-col space-y-3 mt-2`}>
                                        <div>For each participant, we asked them to provide a location of interest (coordinates or an address) and pictures of landmarks, people, and other details that pertained to their experience at the location. </div>
                                        <div>We asked each participant to describe the location and its significance to them, taking note of buildings, notable landmarks, density, etc. </div>
                                        <div>Each participant then used our system to reconstruct a panoramic image reflective of their unique experience of the location through high-level image edits. </div>
                                    </div>
                                </div>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl mt-3`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Evaluation</div>
                                    <div className={`mt-2`}>We evaluated how well our system addressed our project goals by asking participants to compare out systems with other tools and to rate the following statements on a Likert scale (1-7). </div>
                                    <ul className="list-disc pl-3 mt-4 space-y-2">
                                        <li className="ml-2">The system helped me transform the image to match my perspective of a location.</li>
                                        <li className="ml-2">The reconstructed image matched my expectations of the edits I suggested.</li>
                                        <li className="ml-2">The system was easy to use.</li>
                                        <li className="ml-2">I prefer the edited panorama over the normal panorama.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[#202020] text-[#FCFCFC] rounded-xl mt-6 p-6`}>
                            <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Results</div>
                            <div className={`flex flex-col sm:flex-row text-xs mt-5`}>
                                <div className={`mt-0 mr-8 min-w-[200px]`}>Checking back in on our hypotheses...</div>
                                <div className={`mt-5 sm:mt-0 flex flex-col`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>1. Current digital ways of experiencing locations are not sufficient at representing individual perspectives and memories of locations.</div>
                                    <div className={`mt-5`}>Generally, we found that users’ qualitative responses fell under one of two categories: </div>
                                    <ul className="list-disc pl-3 mt-4 space-y-2">
                                        <li className="ml-2">Users wanted to add objects consistent with their associations of the place and remove objects that conflicted with their image of the place, even if not geographically or physically accurate</li>
                                        <li className="ml-2">Users wanted to modify the panorama to match their emotions around the place</li>
                                    </ul>
                                    <div className={`text-base mt-8`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>2. User-edited panoramas can better represent the user’s individual perspective and memories of a location. </div>
                                    <div className={`mt-5`}>“It centered memory as opposed to the objective truth [so] I was able to do a patchwork of my memory from things that I didn’t see together at one time, but were all part of my associations of that place.” </div>
                                    <div className={`mt-2`}>“I wanted to restore some old memories I had there, and the panorama helped me construct the exact picture I wanted.”</div>
                                    <div className='mt-2'>“This was exactly what I imagined.”</div>
                                </div>
                            </div>
                            <div className={`flex flex-col sm:flex-row text-xs mt-20`}>
                                <div className={`mr-8 min-w-[200px]`}>Mean Likert scale ratings</div>
                                <div className={`mt-5 sm:mt-0 grid grid-cols-2 items-center justify-center text-xs sm:w-3/4 sm:max-w-[700px]`}>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC] border-r-[1px] border-r-[#FCFCFC]`}><div className='text-center'>Statement</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC]`}><div className='text-center'>Mean Likert scale rating</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC] border-r-[1px] border-r-[#FCFCFC]`}><div className='text-center'>The system helped me transform the image to match my perspective of a location</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC]`}><div className='text-center'>5.67</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC] border-r-[1px] border-r-[#FCFCFC]`}><div className='text-center'>The reconstructed image matched my expectations of the edits I suggested</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC]`}><div className='text-center'>6.4</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC] border-r-[1px] border-r-[#FCFCFC]`}><div className='text-center'>The system was easy to use</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-b-[1px] border-b-[#FCFCFC]`}><div className='text-center'>5.1</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full border-r-[1px] border-r-[#FCFCFC]`}><div className='text-center'>I liked the edited panorama over the original panorama</div></div>
                                    <div className={`flex flex-col justify-start items-center p-4 h-full `}><div className='text-center'>5.5</div></div>
                                </div>
                            </div>
                            <div className={`flex flex-col sm:flex-row text-xs mt-20 mb-8`}>
                                <div className={`mr-8 min-w-[200px]`}>Participant-created panoramas</div>
                                <div className={`flex flex-col mt-5 sm:mt-0`}>
                                    <div style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>A participant from New York City recreated their Chinese school that burned down in 2020. </div>
                                    <div className={`flex mt-5 flex-row space-x-4`}>
                                        <div><img className={`flex-none`} src={`assets/mempano/chinatown_image_1.png`}/></div>
                                        <div className='flex flex-col space-y-4'>
                                            <div><img className={`flex-none`} src={`assets/mempano/chinatown_image_2.png`}/></div>
                                            <div><img className={`flex-none`} src={`assets/mempano/chinatown_image_3.png`}/></div>
                                        </div>
                                    </div>
                                    <div className={`mt-8 mb-3`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Panorama from Chinatown—Unmodified</div>
                                    <div><img className={`flex-none`} src={`assets/mempano/chinatown_panorama_unedited.png`}/></div>
                                    <div className={`mt-8 mb-3`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'italic'}}>Panorama from Chinatown—Modified</div>
                                    <div><img className={`flex-none`} src={`assets/mempano/chinatown_panorama_edited.png`}/></div>
                                </div>
                            </div>
                        </div>
                        <div className={`text-lg lg:text-xl mt-5`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Study 2 </div>
                        <div className={`flex flex-col sm:flex-row max-w-[1000px] mt-5 sm:space-x-4`}>
                            <div className={`flex flex-col text-xs basis-1/2`}>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Goal</div>
                                    <div className={`mt-2`}>Enable viewers to view edited panoramas to gather a more distinctive narrative about a location. </div>
                                </div>
                                <div className={`p-4 mt-3 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Hypotheses</div>
                                    <div className={`mt-2`}>Viewers prefer looking at user-edited panoramas because they can gather more distinctive narratives about a location.</div>
                                </div>
                                <div className={`p-4 mt-3 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Participants</div>
                                    <div className={`mt-2`}>12 total, ages 19-26, all with limited photo editing experience</div>
                                </div>
                            </div>
                            <div className={`mt-3 sm:mt-0 flex flex-col text-xs basis-1/2`}>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Procedure</div>
                                    <div className={`flex flex-col space-y-3 mt-2`}>
                                        <div>For the first 6/12 participants, we showed them an unedited panorama, and then an edited panorama. </div>
                                        <div>For the other 6/12 participants, we showed them an edited panorama, and then an unedited panorama. </div>
                                    </div>
                                </div>
                                <div className={`p-4 bg-[#E2E2E2] rounded-xl mt-3`}>
                                    <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Evaluation</div>
                                    <div className={`mt-2`}><strong>We asked users 2 open-ended questions for each of the panoramas:</strong></div>
                                    <ul className="list-disc pl-3 mt-2 space-y-2">
                                        <li className="ml-2">What is your impression of this location based on the panoramas?</li>
                                        <li className="ml-2">Can you describe the setting and story depicted in this panorama?</li>
                                    </ul>
                                    <div className={`mt-2`}><strong>We asked users to response to 2 Likert statements (1-7, 1 for strongly disagree, 7 for strongly agree) for each panorama:</strong></div>
                                    <ul className="list-disc pl-3 mt-2 space-y-2">
                                        <li className="ml-2">I have a good understanding of the location presented in the panorama.</li>
                                        <li className="ml-2">I understood a distinctive or unique perspective on this specific location from this panorama.</li>
                                    </ul>
                                    <div className={`mt-2`}><strong>Users were then asked to read the textual description accompanying the edited panoramas and asked to respond to the following questions:</strong></div>
                                    <ul className="list-disc pl-3 mt-4 space-y-2">
                                        <li className="ml-2">The panorama matches the description for the original panorama. (1-7)</li>
                                        <li className="ml-2">The panorama matches the description for the edited panorama. (1-7)</li>
                                        <li className="ml-2">Which panorama contributed more to your understanding of the location?</li>
                                        <li className="ml-2">Which panorama do you prefer?</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={`bg-[#202020] text-[#FCFCFC] rounded-xl mt-6 p-6 pb-16`}>
                            <div className={`text-base`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Results</div>
                            <div className={`flex flex-col sm:flex-row text-xs mt-5`}>
                                <div className={`mt-0 mr-8 min-w-[200px]`}>Checking back in on our hypothesis...</div>
                                <div className={`mt-5 sm:mt-0 flex flex-col`}>
                                    <div className={`text-base max-w-[500px]`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}>Viewers prefer looking at user-edited panoramas because they can gather more distinctive narratives about a location. </div>
                                    <div className={`mt-5`}>Participants had mixed responses to edited panoramas:</div>
                                    <ul className="list-disc pl-3 mt-4 space-y-5 max-w-[500px]">
                                        <li className="ml-2">Participants who preferred the edited panoramas were confused by edits that either didn’t match the creator’s description or didn’t match their own projected expectation of the location</li>
                                        <img src="/assets/mempano/study_2_chart_1.png" className={`w-[250px] md:w-[300px] h-auto object-contain mt-5`} />
                                        <li className="ml-2">Participants who preferred the unedited panoramas expressed that poor graphic quality of edited panoramas hindered their utility and understandability</li>
                                        <img src="/assets/mempano/study_2_chart_2.png" className={`w-[250px] md:w-[300px] h-auto object-contain mt-5`} />
                                        <li className="ml-2">7/12 participants agreed that the edited panorama provided a distinctive or unique perspective on the location compared to the original panorama</li>
                                        <img src="/assets/mempano/study_2_chart_3.png" className={`w-[250px] md:w-[300px] h-auto object-contain mt-5`} />
                                    </ul>
                                </div>
                            </div>
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
                        <div style={{ fontFamily: 'SwearDisplay-Bold', fontWeight: 'bold', fontStyle: 'roman'}} className={`flex-1 text-2xl md:text-3xl lg:text-4xl mb-4`}>05. Takeaways</div>
                        <div className={`flex flex-col`}>
                            <div className={`text-xl w-3/4`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Outcomes </div>
                            <div className={`flex flex-col sm:flex-row text-sm`}>
                                <div className={`flex flex-col space-y-3`}>
                                    <div><strong>We were able to identify a unique contribution</strong> within the space of image-editing and scoped the problem to novice-level users. Not only did we successfully identify a problem space, but <strong>we designed and executed 2 user studies with a total of 18 participants.</strong> In our team of four, <strong>we presented our findings at Stanford’s HCI Forum.</strong></div>
                                    <div><strong>Collective memory and narratives of local history can drastically shape the ways people imagine a neighborhood’s present situation and future development. </strong></div>
                                    <div>These narratives are mostly text-based, however. One of the most exciting applications of Mempano is toward broadening the ability to <strong>visually create multiple narratives and histories of a particular location</strong>, particularly helpful to participatory community development approaches. </div>
                                </div>
                            </div>
                            <div className={`text-xl w-3/4 pt-6`} style={{ fontFamily: 'SwearDisplay-BlackItalic', fontWeight: 'black', fontStyle: 'cilati'}}> Learning </div>
                            <div className={`flex flex-col text-sm space-y-3 mt-3`}>
                                <div><strong>We narrowed down our problem space, but not enough. </strong></div>
                                <div>We tried to juggle too many questions at once: </div>
                                <ul className="list-disc pl-3 mt-2 space-y-1">
                                    <li className="ml-2">How realistic must image representations be to convey a user’s mental model of a space? </li>
                                    <li className="ml-2">What unique contribution would panoramas bring that images and virtual representations could not cover? </li>
                                    <li className="ml-2">Would broadening access to image-editing to low-level users extend toward creating a participatory history of a place? </li>
                                    <li className="ml-2">What do visual narratives contribute that text-based narratives miss? </li>
                                </ul>
                                <div>This meant that feedback in our user studies skewed broad and open-ended. We received feedback on everything from graphic quality of panoramic edits, to feedback on the textual descriptions accompanying panoramic edits.</div>
                            </div>
                        </div>
                    </motion.div>
                </div>





            </div>
        </div>
    );
}