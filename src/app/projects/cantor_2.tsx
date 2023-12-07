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

type Cantor2Props = {
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void,
    projectData: Project
}


export default function Cantor2({ className, selectedProject, setSelectedProject, projectData }: Cantor2Props) {

    return (
        <div className={`${className} h-[50%] md:h-full w-full relative`}>            
            <div className={`h-full w-full mb-8`}>
                <div className={`h-full w-full min-h-[800px] sm:min-h-[700px] p-8 flex flex-col bg-[#202020] text-[#FCFCFC] relative`} id="slide-1">
                    <CloseButton selectedProject={selectedProject} setSelectedProject={setSelectedProject} projectData={projectData} className={`self-end`}/>
                    <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}} className={`absolute text-base`}>Installation</div>
                    <div className={`mt-10`}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/D0cz_3hIA88?si=-PeXjRcEqffmvpgX&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                    <div className={`mt-10 h-full`}>
                        <iframe src="/assets/cantor_2/process_paper.pdf" title="Compression / Decompression Paper" className={`rounded-xl h-full w-full`}/>
                    </div>
                </div>

            </div>
        </div>
    );
}