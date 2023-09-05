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
    <div className={"h-full w-full flex flex-col justify-center items-center"}>
            <div style={{ fontFamily: 'SwearDisplay-BlackCilati', fontWeight: 'black', fontStyle: 'cilati'}} className={"text-[#575757] text-[100px] md:text-[200px] w-[250px] md:w-[700px] h-[500px] select-none relative"}>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`transform absolute top-[-30px] left-[110px] md:top-[50px] md:left-[80px]`}>J</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:270 }} transition={{duration:0.2}} className={`transform absolute top-[30px] left-[90px] md:top-[-50px] md:left-[100px]`}>e</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:180 }} transition={{duration:0.2}} className={` transform absolute top-[10px] left-[170px] md:top-[50px] md:left-[240px]`}>n</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`transform absolute top-[80px] left-[30px] md:top-[170px] md:left-[215px]`}>n</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`transform absolute top-[160px] left-[190px] md:top-[95px] md:left-[450px]`}>i</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:0 }} transition={{duration:0.2}} className={`transform absolute top-[110px] left-[100px] md:top-[-80px] md:left-[400px]`}>f</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:90 }} transition={{duration:0.2}} className={`transform absolute top-[230px] left-[30px] md:top-[-5px] md:left-[525px]`}>e</motion.span>
                <motion.span animate={{ scale: 1 }} whileHover={{ rotate:15, scale:1.2 }} style={{ rotate:180 }} transition={{duration:0.2}} className={`transform absolute top-[250px] left-[180px] md:top-[245px] md:left-[475px]`}>r</motion.span>
                <a href="https://github.com/luojen" target="_blank"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/github.svg" className={`w-[60px] md:w-[80px] absolute top-[260px] left-[90px] md:top-[220px] md:left-[600px]`}/></a>
                <a href="https://www.linkedin.com/in/luojen/" target="_blank"><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/linkedin.svg" className='w-[60px] md:w-[80px] absolute top-[130px] left-[170px] md:top-[295px] md:left-[50px]'/></a>
                <div>
                  <Tooltip title="Copied" onClose={handleTooltipClose} disableTouchListener disableFocusListener open={tooltipOpen} placement='bottom' className='w-[60px] md:w-[80px] absolute top-[210px] left-[10px] md:top-0 md:left-[275px]'>
                    <button onClick={handleTooltipOpen}><motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/mail.svg"/></button>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip title="Website built with React by Jen" disableTouchListener disableFocusListener placement='bottom' className='w-[60px] md:w-[80px] absolute top-[50px] left-[10px] md:top-[320px] md:left-[350px]' 
                    sx={{marginTop: -16, color: 'blue'}}
                  >
                    <motion.img whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.1 }} src="icons/heart.svg"/>
                  </Tooltip>
                </div>
            </div>
      </div>
  )
}
