import React from 'react';
import { motion } from 'framer-motion';

const SkillCard = ({ title, tags, phrase, color, id }) => {
  const styles = {
    cyan: "border-cyan-200 bg-cyan-50/10",
    gold: "border-yellow-200 bg-yellow-50/10",
    pink: "border-pink-200 bg-pink-50/10",
    indigo: "border-indigo-200 bg-indigo-50/10"
  };

  return (
    <motion.div whileHover={{ y: -8 }} className={`p-8 rounded-[2rem] border-2 ${styles[color]} backdrop-blur-sm shadow-sm`}>
      <div className="w-24 h-24 mb-6 rounded-2xl bg-white overflow-hidden shadow-inner flex items-center justify-center">
        <img src={`/images/skill-${id}.png`} alt={title} className="w-full h-full object-contain p-2" 
             onError={(e) => e.target.style.opacity = '0'} />
      </div>
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(t => <span key={t} className="text-[10px] font-bold px-2 py-1 bg-white rounded-full shadow-sm text-gray-500 uppercase">{t}</span>)}
      </div>
      <p className="text-gray-400 italic font-medium">「{phrase}」</p>
    </motion.div>
  );
};
export default SkillCard;
