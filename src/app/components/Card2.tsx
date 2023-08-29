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

type Card2Props = {
    className?: string, 
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project,
    content: string | number | string[];
}

export default function Card2({ className, content, selectedProject, setSelectedProject, projectData }: Card2Props) {

    return (
        <div className={`h-[97%] ${className} bg-${projectData.color} rounded-md card2`}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}