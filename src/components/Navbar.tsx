"use client"
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-[5%] transition-all duration-300 ease-in-out ${scrolled ? 'py-4 backdrop-blur-lg' : 'py-6'
        }`}
    >
      <div className="font-extrabold text-2xl tracking-tighter gradient-text">
        Vishnu Divakaran
      </div>
      <div className="flex gap-8 font-medium text-[0.95rem] gradient-text">
        <a href="#about" className="transition-colors hover:text-primary">About</a>
        <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
        <a href="#skills" className="transition-colors hover:text-primary">Skills</a>
        <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
      </div>
    </motion.nav>
  );
}
