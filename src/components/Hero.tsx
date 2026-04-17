"use client"
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import Antigravity from './ui/antigravity';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center items-center text-center px-[5%] relative overflow-hidden" id="home">
      <motion.div
        style={{ y: y2, opacity }}
        className="fixed top-1/2 left-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,var(--primary-glow)_0%,transparent_70%)] blur-[80px] -z-1 opacity-50 rounded-full"
      />

      <motion.div
        style={{ y: y1, opacity }}
        className="z-10 flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="glass px-4 py-2 rounded-full text-[0.85rem] font-medium mb-8 text-secondary tracking-wider uppercase flex items-center gap-2"
        >
          <span>✦</span>
          UI Developer & NextJs Developer
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[clamp(3rem,8vw,6rem)] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 max-w-[800px] gradient-text"
        >
          Crafting digital experiences with precision and motion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[clamp(1.1rem,2vw,1.25rem)] text-neutral-400 max-w-[600px] mb-12 leading-relaxed"
        >
          Elevating web interfaces through modern technologies, dark mode aesthetics, and fluid animations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex gap-3 md:gap-6"
        >
          <a href="#projects" className="bg-white text-[#000000] px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold flex items-center gap-2 border-none cursor-pointer transition-colors duration-400 hover:shadow-[0_10px_25px_rgba(255,255,255,0.5)]">
            View Works <ArrowRight size={18} />
          </a>
          <a href="#contact" className="bg-transparent text-white px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold border border-white/20 cursor-pointer transition-colors duration-400 hover:bg-white/5 hover:border-white/40">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      <div className='fixed w-full h-full z-0' >
        <Antigravity
          count={1000}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={.5}
          lerpSpeed={0.05}
          color="#6366f1"
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="sphere"
          fieldStrength={10}
        />
      </div>
    </section>
  );
}
