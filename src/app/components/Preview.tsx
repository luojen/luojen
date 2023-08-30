import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
    AnimatePresence
} from "framer-motion"
import { useEffect, useState } from 'react'
import Tag from './Tag';
import { Data, Project } from '@/app/types/Data';
import React from 'react';
import Downballot from '../projects/downballot';
import ScrollButton from '../components/ScrollButton';
import CloseButton from '../components/CloseButton';
import Impart from '../projects/impart';

type PreviewProps = {
    className?: string,
    projectData?: Project,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void
}

export default function Preview({ className, projectData, selectedProject, setSelectedProject }: PreviewProps) {

    const [Project, setProject] = useState<(JSX.Element | null)>(null);    

    useEffect(() => {
        if (projectData?.id == 'downballot') {
            setProject(<Downballot setSelectedProject={setSelectedProject} selectedProject={selectedProject} projectData={projectData}/>);
        } else if (projectData?.id == 'impart') {
            setProject(<Impart setSelectedProject={setSelectedProject} selectedProject={selectedProject} projectData={projectData}/>);
        }
    }, [projectData?.id]);

    return (
            <motion.div className={`${className} px-8 pb-4`}>
                {Project}
            </motion.div>
    );
}