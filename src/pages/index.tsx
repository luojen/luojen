import Image from 'next/image'
import { Inter } from 'next/font/google'
import Display from './Display'
import Work from './work'
import About from './about'
import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export default function Home() { 
  return (
      <Display/>
  )
}
