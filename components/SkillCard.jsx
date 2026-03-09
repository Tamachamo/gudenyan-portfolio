import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, tags, phrase, color }) => {
  const styles = {
    cyan: "border-cyan-200 hover:shadow-cyan-100 bg-cyan-50/10",
    gold: "border-yellow-200 hover:shadow-yellow-100 bg-yellow-50/10",
    pink: "border-pink-200 hover:shadow-pink-100 bg-pink-50/10",
    indigo: "border-indigo-200 hover:shadow-indigo-100 bg-indigo-50/10"
  };

  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-8 rounded-[2rem] border-2 ${styles[color]} transition-all backdrop-blur-sm`}
    >
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white rounded-full shadow-sm text-gray-500 uppercase">{t}</span>)}
      </div>
      <p className="text-gray-400 italic font-medium">「{phrase}」</p>
    </motion.div>
  );
};
export default SkillCard;
