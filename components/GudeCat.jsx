import React from 'react';
import { motion } from 'framer-motion';

const GudeCat = ({ size = 200, gudeLevel = 0 }) => {
  const paths = [
    "M10,40 C10,20 30,10 50,10 C70,10 90,20 90,40 C90,60 80,90 50,90 C20,90 10,60 10,40 Z", // 通常
    "M5,50 C5,30 25,20 50,20 C75,20 95,30 95,50 C95,70 85,95 50,95 C15,95 5,70 5,50 Z",     // 溶け
    "M2,65 C2,55 20,50 50,50 C80,50 98,55 98,65 C98,85 80,98 50,98 C20,98 2,85 2,65 Z"      // 液体
  ];

  const currentPath = gudeLevel < 30 ? paths[0] : gudeLevel < 70 ? paths[1] : paths[2];

  return (
    <motion.div style={{ width: size, height: size }} className="relative">
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-xl">
        <motion.path
          animate={{ d: currentPath }}
          transition={{ type: "spring", stiffness: 40, damping: 10 }}
          fill="#FFFFFF" stroke="#F0F0F0" strokeWidth="0.5"
        />
        <motion.g animate={{ y: gudeLevel / 6 }}>
          <line x1="38" y1="48" x2="44" y2="48" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="56" y1="48" x2="62" y2="48" stroke="#4A4A4A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M48,53 Q50,55 52,53" fill="none" stroke="#4A4A4A" strokeWidth="1" />
        </motion.g>
      </svg>
    </motion.div>
  );
};
export default GudeCat;
