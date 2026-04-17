"use client"
import { motion } from 'framer-motion';
import { PhoneCallIcon, MailIcon, LucideLinkedin } from 'lucide-react';
import Whatsapp from './ui/whatsapp';

export default function Contact() {
  return (
    <section className="mt-10 md:mt-24 pb-8 px-[5%] max-w-[1400px] mx-auto" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass border-glass-border backdrop-blur-xs rounded-[32px] p-5 md:py-20 md:px-8 text-center flex flex-col items-center mb-16"
      >
        <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-extrabold mb-4 tracking-[-0.02em] gradient-text">Let's build something amazing together.</h2>
        <p className="text-neutral-400 mb-5 md:mb-12 text-[1.1rem]">Currently open to new opportunities.</p>

        <a href="callto:+919961663127" className="bg-white text-[#000000] px-10 py-4 rounded-full font-semibold flex items-center gap-2 border-none cursor-pointer transition-colors duration-200  hover:shadow-[0_10px_25px_rgba(255,255,255,0.1)] text-[1.1rem]">
          <PhoneCallIcon size={18} /> Say Hello
        </a>

        <div className="flex gap-6 mt-6 md:mt-12">
          <a href="mailto:vishnupd8967@gmail.com" className="text-neutral-400 transition-all duration-200 hover:text-primary hover:-translate-y-[2px]"><MailIcon size={24} /></a>
          <a href="https://www.linkedin.com/in/vishnu-divakaran-6135a420a?utm_source=share_via&utm_content=profile&utm_medium=member_android" target='_blank' className="text-neutral-400 transition-all duration-200 hover:text-primary hover:-translate-y-[2px]"><LucideLinkedin size={24} /></a>
          <a href="https://wa.me/919961663127" className='text-neutral-400 transition-all duration-200 hover:text-primary hover:-translate-y-[2px]' target='_blank'><Whatsapp /></a>
        </div>
      </motion.div>
      <div className="text-center text-neutral-500 text-[0.9rem]">
        <p>© {new Date().getFullYear()} Vishnu Divakaran. </p>
      </div>
    </section>
  );
}
