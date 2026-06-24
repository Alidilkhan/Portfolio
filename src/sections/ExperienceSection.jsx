import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { timeline } from "../utils/data";

export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Experience & Education" title="Growth timeline" />
        <div className="relative ml-4 border-l border-cyan-300/30 pl-8">
          {timeline.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative mb-10 rounded-2xl border border-white/10 bg-slate-900/50 p-5 backdrop-blur"
            >
              <span className="absolute -left-[2.2rem] top-6 h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.9)]" />
              <p className="text-xs text-cyan-300">{item.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-violet-300">{item.place}</p>
              <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
