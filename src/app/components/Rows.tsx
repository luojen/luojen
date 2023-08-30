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

type RowsProps = {
    data?: Data,
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void
}

export default function Rows({ className, data, selectedProject, setSelectedProject }: RowsProps) {

    return (
        <div className={`${className} min-w-[235px]`}>
                <div className={`w-full h-px bg-black`}/>
                {/* {data?.map((project, index) => (
                    <Row key={index} project={project} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
                ))} */}
                {data.map((project, index) => (
                    <Row key={index} project={project} selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
                ))}
        </div>
    );
}