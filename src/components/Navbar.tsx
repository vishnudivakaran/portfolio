"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'py-4 glass' : 'py-4 md:py-6'
        }`}
    >
      <div className="flex justify-between items-center px-6 md:px-[5%] relative z-50">
        <div className="font-extrabold text-xl md:text-2xl tracking-tighter gradient-text">
          Vishnu Divakaran
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-[0.95rem] gradient-text">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="transition-colors hover:text-primary">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full overflow-hidden flex flex-col md:hidden text-center bg-black"
          >
            <div className="flex flex-col py-4 gap-4 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="gradient-text font-medium text-lg py-2 border-b border-border/10 last:border-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
