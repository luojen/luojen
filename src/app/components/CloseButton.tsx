import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"
import { useEffect, useState } from 'react'
import Row from './Row';
import { Data, Project } from '@/app/types/Data';

type CloseButtonProps = {
    className?: string, 
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}

export default function CloseButton({ className, selectedProject, setSelectedProject, projectData }: CloseButtonProps) {

    const handleCloseClick = () => {
        if (selectedProject?.id === projectData?.id) {
            setSelectedProject(null);
        } else {
            setSelectedProject(projectData);
        }
    };

    return (
        <div className={`${className} absolute top-0 right-0`}>
            <motion.button 
                className={"flex flex-row rounded-full px-4 py-1 justify-center bg-black text-white"}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 1)", color: 'rgba(0, 0, 0, 0.8)', border: "1px solid black" }}
                whileTap={{ scale: 1.1 }}
                onClick={handleCloseClick}
            >
                <p className={"pr-2 text-xs"} >X</p>
                <p className={`text-xs`}>CLOSE</p> 
            </motion.button>
        </div>
    );
}