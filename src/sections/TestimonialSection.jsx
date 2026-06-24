import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard } from "../components/GlowCard";
import { testimonials } from "../utils/data";

export function TestimonialSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((value) => (value + 1) % testimonials.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Testimonials" title="Trusted by mentors and teams" />
        <GlowCard>
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              <p className="text-lg text-slate-100">"{testimonials[index].quote}"</p>
              <p className="mt-4 text-sm text-cyan-300">{testimonials[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </GlowCard>
      </div>
    </section>
  );
}
