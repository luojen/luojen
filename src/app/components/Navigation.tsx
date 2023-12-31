'use client'

import Link from 'next/link';
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"

type NavigationProps = {
    className?: string,
}

export default function Navigation({ className }: NavigationProps) {
    return (
        <div style={{ fontFamily: 'NeueHaasUnicaW1G-Regular', fontWeight: 'normal', fontStyle: 'regular'}} className={"sticky top-0 px-4 py-4 flex flex-row bg-[#FCFCFC] z-10"} >
            <div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                >
                    <Link href="/" className={"px-4"}>Jen Luo</Link>
                </motion.div>
            </div>
            <div className={"grow"}/>
            <div className={"flex flex-row space-x-4"}>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                >
                    <a href="https://read.cv/luojen" target="__blank">Resume</a>
                    {/* <Link href="/about" className={"px-4"}>About</Link> */}
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                >
                    <Link href="/work" className={"px-4"}>Work</Link>
                </motion.div>
                
            </div>
        </div>
    );
}