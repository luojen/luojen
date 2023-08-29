import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

type TagProps = {
    name?: string,
    className?: string, 
    id?: number,
    onHover: () => void,
    hovered: boolean,
    selected: boolean,
    onClick: () => void, 
    onLeave: () => void,
}

export default function Tag({ id, className, name, onHover, hovered, selected, onClick, onLeave }: TagProps) {  
    return (
        <motion.div
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            onClick={onClick}
            className={`text-sm sm:text-sm md:text-sm lg:text-sm cursor-pointer px-2 ${selected ? 'font-bold' : 'text-black'}`}
            whileHover={{ scale: 1.1 }}
        >
            {name}
        </motion.div>  
    );
}