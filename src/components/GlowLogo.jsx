import React from 'react';
import { motion } from 'framer-motion';

export default function GlowLogo(){ 
  return (
    <motion.div initial={{opacity:0.8}} animate={{scale:[1,1.03,1]}} transition={{repeat:Infinity, duration:4}} className="z-10">
      <h1 className="text-5xl md:text-6xl font-bold glow">Samadhi — пространство прикосновений</h1>
    </motion.div>
  )
}
