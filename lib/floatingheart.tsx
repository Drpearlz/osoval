import React from 'react';
import { motion } from "framer-motion";


const FloatingHeart = () => {
    const randomX = Math.random() * 100;
    const randomDelay = Math.random() * 2;
    
  
    return (
      <motion.div
        className="absolute text-2xl"
        initial={{ y: 100, x: randomX, opacity: 0 }}
        animate={{
          y: -100,
          opacity: [0, 1, 0],
          x: randomX + Math.sin(randomX) * 50
        }}
        transition={{
          duration: 3,
          delay: randomDelay,
          repeat: Infinity
        }}
      >
        ❤️
      </motion.div>
    );
  };
  
  export default FloatingHeart;