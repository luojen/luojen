import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"
import { useEffect, useState, ReactNode } from 'react'
import Row from './Row';
import { Data, Project } from '@/app/types/Data';

type Card1Props = {
    className?: string, 
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project,
    content: string
}

export default function Card1({ className, content, selectedProject, setSelectedProject, projectData }: Card1Props) {

    // const handleCloseClick = () => {
    //     if (selectedProject?.id === projectData?.id) {
    //         setSelectedProject(null);
    //     } else {
    //         setSelectedProject(projectData);
    //     }
    // };

    // const scroll_variants = {
    //     flash: { scale: 1.15 },
    //     normal: { scale: 1 },
    // };

    return (
        <div className={`h-[95%] ${className} bg-purple-200 rounded-md relative card1`}>
            {/* <div className={"absolute top-0 right-0 mr-6 mt-2"}>
                <motion.button 
                    className={"flex flex-row bg-transparent border border-black rounded-full px-4 py-1 justify-center"}
                    whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.8)", color: 'rgba(255, 255, 255, 1)', scale: 1.05 }}
                    whileTap={{ scale: 1.1 }}
                    onClick={handleCloseClick}
                >
                    <p className={"pr-2 text-xs"} >X</p>
                    <button className={`text-xs`}>CLOSE</button> 
                </motion.button>
            </div> */}
            {/* <motion.div className={"absolute bottom-0 left-0 ml-5 mb-1 text-white"}>
                <motion.p className={"pr-2 text-xs text-black mb-3"}>
                    Scroll down
                </motion.p>
                <motion.div
                    variants={scroll_variants}
                    initial="normal"
                    animate="flash"
                    transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse"}}
                >
                    <motion.img src="icons/arrow-down.svg" className='h-6 absolute bottom-5 left-6'/>
                    <div className="w-16 h-16 rounded-full bg-black"></div>
                </motion.div>
            </motion.div> */}
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}