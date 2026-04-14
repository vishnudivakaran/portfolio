"use client"
import { motion } from 'framer-motion';

const skillCategories = [
  {
    category: "Frontend Dev",
    skills: ["Next.js", "TypeScript", "HTML/CSS"]
  },
  {
    category: "Styling & Motion",
    skills: ["Framer Motion", "Tailwind CSS", "CSS Modules", "SASS", "GSAP"]
  },
  {
    category: "Tools & Testing",
    skills: ["Git"]
  }
];

export default function Skills() {
  return (
    <section className="my-32 px-[5%] max-w-[1400px] mx-auto" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.03em] mb-4 gradient-text">Technical Arsenal</h2>
        <p className="text-neutral-400 text-[1.1rem]">Technologies I use to bring ideas to life</p>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-white/2 border border-glass-border rounded-[20px] p-10 backdrop-blur-xs"
          >
            <h3 className="text-xl font-semibold mb-6  text-neutral-300">{cat.category}</h3>
            <div className="flex flex-wrap gap-3">
              {cat.skills.map((skill, sIdx) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * sIdx }}
                  className="bg-white/5 border border-white/10 px-4 py-2 text-neutral-300 rounded-lg text-[0.9rem] transition-colors duration-200 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
