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
import { useInView } from 'react-intersection-observer';

type CustomImageProps = {
    src: string,
    alt: string,
    className: string,
    fill?: boolean,
    height?: number,
    width?: number
}

export default function CustomImage({ className, src, alt, fill, height, width }: CustomImageProps) {

  const [imageLoaded, setImageLoaded] = useState(false);

  const background = {
    backgroundColor: imageLoaded ? 'transparent' : 'rgba(255, 255, 255, 0.2)',
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  })


  return (
    <div style={background} className={`rounded-xl ${className} ${imageLoaded ? '' : 'animate-pulse'}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`object-contain rounded-xl`}
        onLoad={handleImageLoad}
        style={{
          opacity: inView ? 0 : 1,
          transition: 'opacity cubic-bezier(0.3, 0.2, 0.2, 0.2s 0.8)'
        }}
      />
    </div>
  )
}