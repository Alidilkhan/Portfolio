import { motion } from "framer-motion";
import { fadeUp } from "../animations/motion";

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <p className="mb-3 text-xs uppercase tracking-[0.28em] text-cyan-300/90">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-sm text-slate-300 sm:text-base">{subtitle}</p> : null}
    </motion.div>
  );
}
