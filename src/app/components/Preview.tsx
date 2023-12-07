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
import Mempano from '../projects/mempano';
import Cantor1 from '../projects/cantor_1';
import Cantor2 from '../projects/cantor_2';

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
        } else if (projectData?.id == 'mempano') {
            setProject(<Mempano setSelectedProject={setSelectedProject} selectedProject={selectedProject} projectData={projectData}/>);
        } else if (projectData?.id == "cantor_1") {
            setProject(<Cantor1 setSelectedProject={setSelectedProject} selectedProject={selectedProject} projectData={projectData}/>);
        } else if (projectData?.id == "cantor_2") {
            setProject(<Cantor2 setSelectedProject={setSelectedProject} selectedProject={selectedProject} projectData={projectData}/>);
        }
    }, [projectData?.id]);

    return (
        <motion.div className={`${className} z-9`} style={{ fontFamily: 'NeueHaasGroteskTextPro', fontWeight: 'normal', fontStyle: 'normal'}}>
            {Project}
        </motion.div>
    );
}