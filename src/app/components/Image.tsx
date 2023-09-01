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
    alt?: string
}

export default function Image({ className, src, alt }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    console.log('image has loaded');
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
  };

  return (
    <>
        <img src={src} className={className} onLoad={handleImageLoad} onError={handleImageError} alt={alt}/>
        {isLoading && <div className={`w-[350px] h-5 md:h-10 bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse rounded-md mb-3`}/>}
    </>
  );
}