import { motion } from 'framer-motion';

const TechDrop = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 画面右上の大きなドロップ */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 w-96 h-96 opacity-10"
      >
        <svg viewBox="0 0 200 200">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00F2FF" />
              <stop offset="100%" stopColor="#FFB7C5" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill="url(#grad1)" />
          {/* 回路模様のパス */}
          <path d="M40 100 H160 M100 40 V160" stroke="white" strokeWidth="2" strokeDasharray="10 5" opacity="0.5" />
        </svg>
      </motion.div>
    </div>
  );
};

export default TechDrop;
