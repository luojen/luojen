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
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import fs from "node:fs/promises";

type BlurProps = {
    src: string,
    alt: string,
}

export default async function Blur({ src, alt }: BlurProps) {
  const buffer = await fs.readFile(src)
  const { base64 } = await getPlaiceholder(buffer);
  return (
    <Image
        src={src}
        alt={alt}
        fill={true}
        className={`object-contain`}
        placeholder='blur'
        blurDataURL={base64}
    />
  )
}