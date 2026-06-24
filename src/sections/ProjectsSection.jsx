import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { GlowCard } from "../components/GlowCard";
import { SectionHeading } from "../components/SectionHeading";
import { projectCategories, projects } from "../utils/data";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () => projects.filter((project) => activeCategory === "All" || project.category === activeCategory),
    [activeCategory],
  );

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Projects" title="Premium case studies with real impact" />
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-xs transition ${activeCategory === category ? "bg-cyan-400/20 text-cyan-300" : "bg-white/5 text-slate-300 hover:bg-white/10"}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ rotateX: 3, rotateY: -3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <GlowCard className="h-full p-0">
                <img src={project.image} alt={project.title} className="h-44 w-full object-cover" />
                <div className="space-y-4 p-5">
                  <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <span key={tag} className="rounded-full bg-violet-400/15 px-3 py-1 text-xs text-violet-300">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} target="_blank" rel="noreferrer" className="glass-btn !px-3 !py-2 text-xs">
                      <FiGithub /> Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="neon-btn !px-3 !py-2 text-xs">
                      <FiExternalLink /> Live
                    </a>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
