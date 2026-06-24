import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { roles } from "../utils/data";
import { useTypewriter } from "../hooks/useTypewriter";

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  mail: HiOutlineMail,
};

const socials = [
  { key: "github", href: "https://github.com/Alidilkhan" },
  { key: "linkedin", href: "https://www.linkedin.com/in/ali-ahmed05" },
 
];

export function HeroSection() {
  const typed = useTypewriter(roles);

  return (
    <section id="hero" className="relative overflow-hidden px-6 pb-28 pt-32 sm:pt-40">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 right-8 h-64 w-64 rounded-full bg-violet-500/30 blur-[100px]" />

      <div className="mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mb-6 w-fit rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 py-2 text-xs uppercase tracking-[0.2em] text-cyan-200"
        >
          Building future-proof web experiences
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-white sm:text-6xl md:text-7xl"
        >
          Ali Ahmed
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
            {typed}
            <span className="animate-pulse text-cyan-300">|</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-slate-300"
        >
          Junior software engineer crafting premium interfaces with performance, scalability, and detail-first interaction design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="neon-btn">
            View Projects <FiArrowRight />
          </a>
          <a href="#contact" className="glass-btn">Let's Connect</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          {socials.map((social) => {
            const Icon = iconMap[social.key];
            return (
              <a key={social.key} href={social.href} className="icon-chip" target="_blank" rel="noreferrer">
                <Icon />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
