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

type ImageProps = {
    src?: string,
    className?: string, 
    alt?: string,
    placeholder?:string
}

export default function Image({ className, src, alt, placeholder }: ImageProps) {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handleImageError = () => {
    setLoaded(false);
  };

  return (
    <>
        <img src={src} className={className} onLoad={handleImageLoad} onError={handleImageError} alt={alt}/>
        {!loaded && <div className={`${placeholder} min-h-[5px] bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3`}/>}
    </>
  );
}