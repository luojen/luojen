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

type ScrollButtonProps = {
    className?: string,
}

export default function ScrollButton({ className }: ScrollButtonProps) {

    const scroll_variants = {
        flash: { scale: 1.15 },
        normal: { scale: 1 },
    };

    return (
        <motion.div className={`${className} text-white flex flex-col justify-center items-center w-20`}>
        {/* <motion.div className={`${className} absolute bottom-0 left-0 ml-8 mb-8 text-white`}> */}
            <motion.p className={"text-xs text-black mb-3"}>
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
        </motion.div>
    );
}