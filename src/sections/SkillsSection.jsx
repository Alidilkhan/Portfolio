import { motion } from "framer-motion";
import { FaCode, FaServer, FaToolbox } from "react-icons/fa";
import { GlowCard } from "../components/GlowCard";
import { SectionHeading } from "../components/SectionHeading";
import { skillGroups } from "../utils/data";

const icons = {
  Frontend: FaCode,
  Backend: FaServer,
  Tools: FaToolbox,
};

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="Technical depth across the stack" />
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const Icon = icons[group.title];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: groupIndex * 0.08 }}
              >
                <GlowCard className="h-full">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="rounded-lg bg-cyan-400/15 p-2 text-cyan-300"><Icon /></div>
                    <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {group.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="mb-1 flex justify-between text-xs text-slate-300">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-[0_0_12px_rgba(34,211,238,0.55)]"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
