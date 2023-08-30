import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion'
import { useRouter } from 'next/router'
import Navigation from '@/app/components/Navigation'

export default function App({ Component, pageProps }: AppProps) { 
  return (
    <main className={"h-screen w-screen flex flex-col"}>
      <Navigation/>
      {/* <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      > */}
        <Component {...pageProps}/>   
      {/* </AnimatePresence>  */}
    </main>
  )
}