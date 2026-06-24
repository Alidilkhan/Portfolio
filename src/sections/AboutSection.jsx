import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard } from "../components/GlowCard";
import { fadeUp } from "../animations/motion";

const highlights = [
  "2+ years shipping production-grade frontend features",
  "Strong in component architecture and reusable design systems",
  "Obsessed with smooth interactions and clean code quality",
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="Precision, speed, and product thinking"
          subtitle="I build software with an engineering mindset and a designer's attention to detail."
        />
        <motion.div
          className="grid gap-6 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeUp}>
            <GlowCard className="h-full">
              <p className="text-slate-200">
                "Frontend Developer & Software Engineering Student pursuing a 3-year Higher Diploma at Aptech. Specialized in crafting fast, intuitive, and premium user experiences with React, while managing solid backend architectures using PHP and MySQL. Passionate about solving complex UI challenges, optimizing interactive user flows, and engineering scalable frontend systems."
              </p>
            </GlowCard>
          </motion.div>
          <motion.div variants={fadeUp} custom={0.1}>
            <GlowCard className="h-full space-y-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-slate-300">
                  {item}
                </div>
              ))}
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
