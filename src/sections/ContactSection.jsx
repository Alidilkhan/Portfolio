import { motion } from "framer-motion";
import { SectionHeading } from "../components/SectionHeading";
import { GlowCard } from "../components/GlowCard";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Contact" title="Let's build something exceptional" />
        <GlowCard>
          <form className="grid gap-4 md:grid-cols-2">
            <input className="input" placeholder="Your Name" />
            <input className="input" placeholder="Your Email" type="email" />
            <input className="input md:col-span-2" placeholder="Subject" />
            <textarea className="input md:col-span-2 min-h-36" placeholder="Tell me about your project..." />
            <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
              <p className="text-xs text-slate-400">Email integration placeholder: connect Formspree, Resend, or custom API.</p>
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                className="neon-btn"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </GlowCard>
      </div>
    </section>
  );
}
