"use client"
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Sedco",
    description: "SEDCO offers advanced Queue Management & Self-Service Kiosk solutions to streamline customer visits, reduce wait times, and enhance service efficiency.",
    tags: ["Next.js", "Tailwind"],
    link: "https://sedco.co/",
  },
  {
    title: "Lulu Tech Park",
    description: "Lulu Tech Park is a premier technology park located in Kochi, Kerala, offering state-of-the-art infrastructure and facilities for IT companies.",
    tags: ["Next.js", "Tailwind"],
    link: "https://lulutechpark.com/",
  },
  {
    title: "Reporter",
    description: "Breaking News Malayalam from Kerala, India and around the world. Get the latest headlines on politics, business, Gulf, sports and entertainment on Reporter",
    tags: ["Next.js", "Tailwind"],
    link: "https://reporterlive.com/",
  },
  {
    title: "Celant",
    description: "Celant primarily refers to a modern, lightweight jewellery brand launched by the 100-year-old Bhima Jewellery group. It is designed for daily wear and office looks, focusing on 18K gold and diamond pieces",
    tags: ["Next.js", "Tailwind"],
    link: "https://celant.in/",
  },
  {
    title: "Travelogue Kerala",
    description: "Plan your Kerala trip with Travelogue Kerala – trusted local experts offering honest prices, friendly service, and smooth travel planning.",
    tags: ["Next.js", "Tailwind"],
    link: "https://traveloguekerala.com/",
  },
  {
    title: "Webcastle",
    description: "Webcastle is a leading provider of web development and digital marketing services to businesses of all sizes.",
    tags: ["Next.js", "Tailwind"],
    link: "https://webcastletech.com/",
  }
];

export default function Projects() {
  return (
    <section className="my-10 md:my-32 px-[5%] max-w-[1400px] mx-auto" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-16"
      >
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold tracking-[-0.03em] mb-4 gradient-text">Featured Projects </h2>
        <p className="text-neutral-400 text-[1.1rem]">A selection of my recent work</p>
      </motion.div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{
              y: -15,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="glass border-glass-border backdrop-blur-xs rounded-3xl p-5 md:p-10 transition-shadow duration-300 relative flex flex-col hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] cursor-default"
          >
            <h3 className="text-2xl font-bold text-neutral-300 mb-4">{project.title}</h3>
            <p className="text-neutral-400 leading-relaxed mb-8 text-[0.95rem] grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="bg-white/5 px-3 py-1.5 rounded-full text-xs text-neutral-300 border border-white/5">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href={project.link} target='_blank' className="text-neutral-400 transition-all duration-200 hover:scale-110"><ExternalLink size={20} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
