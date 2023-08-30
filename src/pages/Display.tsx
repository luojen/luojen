import Image from 'next/image'
import { Inter } from 'next/font/google'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion"
import { Tooltip } from '@mui/material'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Display() {

  const [tooltipOpen, setTooltipOpen] = useState<boolean>(false);

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
    const message = 'luojenniferr@gmail.com';
    navigator.clipboard.writeText(message);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  return (
    <div className={"relative h-full w-full mb-16"}>
            <div style={{ fontFamily: 'Inter-Bold', fontWeight: 'bold', fontStyle: 'normal'}} className={"w-full h-full select-none"}>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[15%] left-[18%]`}>J</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:270 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[30%] left-[27%]`}>e</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:180 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[7%] left-[33%]`}>n</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[45%] left-[41%]`}>n</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[22%] left-[51%]`}>i</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:0 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[57%] left-[58%]`}>f</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[37%] left-[68%]`}>e</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:360, scale:1.2 }} style={{ rotate:180 }} transition={{duration:0.2}} className={`text-5xl sm:text-7xl lg:text-9xl transform absolute top-[67%] left-[78%]`}>r</motion.span>
                <a href="https://github.com/luojen" target="_blank"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/github.svg" className={`w-[30px] sm:w-[40px] md:w-[40px] lg:w-[55px] absolute top-[17%] left-[68%]`}/></a>
                <div>
                  <Tooltip title="Copied" onClose={handleTooltipClose} disableTouchListener disableFocusListener open={tooltipOpen} placement='bottom' className='w-[30px] sm:w-[40px] md:w-[40px] lg:w-[55px] absolute top-[80%] left-[40%]'>
                    <button onClick={handleTooltipOpen}><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/mail.svg"/></button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Website built with React by Jen" disableTouchListener disableFocusListener placement='bottom' className='w-[30px] sm:w-[40px] md:w-[40px] lg:w-[55px] absolute top-[50%] left-[82%]' 
                    sx={{marginTop: -16, color: 'blue'}}
                  >
                    <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/heart.svg"/>
                  </Tooltip>
                </div>
                <a href="https://www.linkedin.com/in/luojen/" target="_blank"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/linkedin.svg" className='w-[30px] sm:w-[40px] md:w-[40px] lg:w-[55px] absolute top-[52%] left-[18%]'/></a>
            </div>
      </div>
  )
}
