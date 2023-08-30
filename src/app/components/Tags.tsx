import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"
import { useEffect, useState } from 'react'
import { Data, Project } from '@/app/types/Data'
import Tag from './Tag';

type TagsProps = {
    tags: string[],
    className?: string,
    selectedTag: string,
    setSelectedTag: (tag: string) => void, 
    selectedProject: Project | null | undefined,
    setSelectedProject: (project: Project | null | undefined) => void
}

export default function Tags({ className, tags, selectedTag, setSelectedTag, selectedProject, setSelectedProject }: TagsProps) {

    const [tagsArray, setTagsArray] = useState<string[]>([]);
    const [hoveredTag, setHoveredTag] = useState<string | null>(null);

    useEffect(() => {
        if (tags) {
            setTagsArray(Array.from(tags));
        } 
    }, [tags]);

    const handleTagHover = (tag: string) => {
        setHoveredTag(tag);
    }

    const handleTagLeave = (tag: string) => {
        setHoveredTag(null);
    }

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
        setHoveredTag(null);
    }

    return (
        <div className={'flex flex-row flex-wrap justify-start select-none pb-4 min-w-[235px]'}>
            {tagsArray.map((tag, index) => (
                <Tag 
                    key={index} 
                    id={index} 
                    name={tag} 
                    onHover={() => handleTagHover(tag)}
                    onLeave={() => handleTagLeave(tag)}
                    onClick={() => handleTagClick(tag)} 
                    hovered={tag === hoveredTag}
                    selected={tag === selectedTag}
                />
            ))}
        </div>
    );
}