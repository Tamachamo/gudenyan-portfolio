import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CONTENT } from './constants/content';
import GudeCat from './components/GudeCat';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';
import TechDrop from './components/TechDrop';

export default function App() {
  const { scrollYProgress } = useScroll();
  const gudeLevel = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="bg-[#FDFDFD] text-[#2D3436] overflow-x-hidden">
      <TechDrop />
      
      {/* Hero */}
      <section className="h-[100vh] flex flex-col items-center justify-center sticky top-0">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img src="/images/hero.png" alt="Hero" className="w-full h-full object-cover opacity-20" />
        </div>
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }} className="text-center z-10">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 italic">GUDE-NYAN</h1>
          <p className="text-xl font-bold text-gray-400">{CONTENT.hero.sub}</p>
        </motion.div>
        <div className="mt-20 z-10">
          <GudeCat size={350} gudeLevel={gudeLevel.get()} />
        </div>
      </section>

      {/* Grid */}
      <section className="relative z-20 bg-white/90 backdrop-blur-xl py-40 px-6 rounded-t-[4rem] shadow-2xl border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CONTENT.skills.map(s => <SkillCard key={s.id} {...s} />)}
          </div>
          
          <div className="max-w-xl mx-auto mt-40 text-center">
            <h2 className="text-4xl font-black mb-12">なっとしたん？</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      
      <footer className="py-20 text-center font-bold text-gray-300">
        &copy; 2026 GUDENYAN-SEISAKU. MATSUSAKA, MIE.
      </footer>
    </div>
  );
}
