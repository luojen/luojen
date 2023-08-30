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

export default function Loading() {

    return (
        <div>
            Loading...
        </div>
    );
}