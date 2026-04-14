"use client"
import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

export default function About() {

  const highlights = [
    {
      icon: <Code className="text-secondary" size={24} />,
      title: "Clean Code",
      description: "Writing maintainable, scalable and efficient code is my top priority."
    },
    {
      icon: <Palette className="text-secondary" size={24} />,
      title: "Modern UI",
      description: "Crafting beautiful and intuitive interfaces using the latest design trends."
    },
    {
      icon: <Zap className="text-secondary" size={24} />,
      title: "Performance",
      description: "Optimizing for speed and reliability to ensure the best user experience."
    }
  ];

  return (
    <section className="my-32 px-[5%] max-w-[1200px] mx-auto relative" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-px bg-secondary opacity-50"></span>
            <span className="text-secondary uppercase tracking-[0.2em] text-sm font-semibold">About Me</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.03em] mb-8 leading-tight gradient-text">
            I build digital <span className="gradient-text">masterpieces</span> design and code.
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-8">
            As a UI Developer and Next.js specialist, I focus on creating immersive web experiences.
            My approach combines technical precision with artistic flair, ensuring every pixel serves a purpose
            and every interaction feels natural.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            I thrive on turning complex problems into elegant, simple solutions that delight users and drive results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-6"
        >
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass p-8 rounded-2xl flex gap-6 items-start group transition-all duration-300 hover:border-white/20"
            >
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-glow blur-[100px] -z-1 opacity-20 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 blur-[100px] -z-1 opacity-20 pointer-events-none"></div>
    </section>
  );
}
