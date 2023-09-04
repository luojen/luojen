import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"
import { useEffect, useState } from 'react'
import Tag from './Tag';
import { Data, Project } from '@/app/types/Data';

type RowProps = {
    project?: Project,
    className?: string,
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void, 
}

export default function Row({ className, project, selectedProject, setSelectedProject }: RowProps) {

    const [tags, setTags] = useState<string[]>([]);
    const [columnOne, setColumnOne] = useState<string[]>([]);
    const [columnTwo, setColumnTwo] = useState<string[]>([]);
    const [color, setColor] = useState<string>();

    useEffect(() => {
        if (tags.length > 0) {
            const midpoint = Math.ceil(tags.length / 2);
            setColumnOne(tags.slice(0, midpoint));
            setColumnTwo(tags.slice(midpoint));
        }
    }, [tags]);

    useEffect(() => {
        if (project?.id == 'downballot') {
            setColor('bg-blue-400');
        } else if (project?.id == "impart") {
            setColor('bg-yellow-400');
        }
    }, [project?.color, project?.id]);

    useEffect(() => {
        if (project?.tags) {
            const edited_tags = project.tags.filter((tag) => tag !== 'All');
            setTags(edited_tags);
        }
    }, [project]);

    const handleClick = () => {
        if (selectedProject?.id === project?.id) {
            setSelectedProject(null);
        } else {
            setSelectedProject(project);
        }
    };

    return (
        <>
            <motion.div
            className={``}
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.25 },
            }}
            >
                <div className={`flex flex-row items-start pb-3 ${selectedProject?.id === project?.id ? 'bg-black text-white' : ''}`} onClick={handleClick} >
                    {/* Icon */}
                    <div className={`mr-5 mt-3 ml-3`}><div className={`w-10 h-10 md:w-10 md:h-10 lg:w-14 lg:h-14 ${color} rounded-md`}/></div>
                    {/* Title */}
                    <div className={"flex flex-col pr-6"}>
                        <p className={"text-2xl lg:text-2xl pt-2"} style={{ fontFamily: 'SwearDisplay-BoldCilati', fontWeight: 'bold', fontStyle: 'cilati'}}>{project && project["name"]}</p>
                        <p className={"text-sm lg:text-base align-end whitespace-nowrap"}>——{project && project["year"]}</p>
                    </div>
                    {/* Divider */}
                    <div className={"flex-grow"}/>
                    {/* Tags */}
                    {selectedProject === null && (
                        <div className={`hidden sm:block`}>
                            <div className={"pt-2 text-sm w-60 flex flex-row"}>
                                {tags.length > 3 ? (
                                    // Two columns
                                    <>
                                    <div className="w-1/2">
                                        {columnOne.map((item, index) => (
                                            <div key={index}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="w-1/2">
                                        {columnTwo.map((item, index) => (
                                            <div key={index}>
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                    </>
                                ) : (
                                    // Single column
                                    <div className={''}>
                                        {tags?.map((tag, index) => (
                                            <div key={index}>{tag}</div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
                <div className={"w-full h-px bg-black"}/>
            </motion.div>
        </>
    );
}