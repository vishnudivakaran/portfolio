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
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${scrolled || isOpen ? 'py-4 backdrop-blur-lg border-b border-white/10 bg-black/80' : 'py-6'
        }`}
    >
      <div className="flex justify-between items-center px-[5%]">
        <div className="font-extrabold text-2xl tracking-tighter gradient-text">
          Vishnu Divakaran
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 font-medium text-[0.95rem]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70 gradient-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none flex items-center justify-center transition-transform active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} className='text-white/50' /> : <Menu size={28} className='text-white/50' />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="flex flex-col items-center py-8 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-semibold gradient-text hover:opacity-70 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

