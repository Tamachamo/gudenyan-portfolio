import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONTENT } from './constants/content';
import GudeCat from './components/GudeCat';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';

export default function App() {
  const { scrollYProgress } = useScroll();
  const gudeLevel = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#FDFDFD] text-[#2D3436]">
      {/* Hero */}
      <section className="h-[120vh] flex flex-col items-center justify-center sticky top-0">
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }} className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic">GUDE-NYAN</h1>
          <p className="text-xl font-bold text-gray-400">{CONTENT.hero.sub}</p>
        </motion.div>
        <div className="mt-20">
          <GudeCat size={400} gudeLevel={gudeLevel.get()} />
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-20 bg-white/80 backdrop-blur-xl py-40 px-6 rounded-t-[4rem] shadow-2xl">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CONTENT.skills.map(s => <SkillCard key={s.id} {...s} />)}
          </div>
        </div>
        
        {/* Contact */}
        <div className="max-w-xl mx-auto mt-40 text-center">
          <h2 className="text-4xl font-black mb-8">なっとしたん？</h2>
          <ContactForm />
        </div>
      </section>
      
      <footer className="py-20 text-center font-bold text-gray-300">
        &copy; 2026 GUDENYAN-SEISAKU. MATSUSAKA, MIE.
      </footer>
    </div>
  );
}
