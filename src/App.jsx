import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FloatingDock } from "./components/FloatingDock";
import { CustomCursor } from "./components/CustomCursor";
import { HomePage } from "./pages/HomePage";
import { FooterSection } from "./sections/FooterSection";

const links = ["about", "skills", "projects", "experience", "contact"];

function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="text-lg font-bold text-white">
          Ali<span className="text-cyan-300">.dev</span>
        </a>
        <nav className="hidden gap-5 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="text-sm capitalize text-slate-300 transition hover:text-cyan-300">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Loader() {
  return (
    <div className="grid min-h-screen place-items-center bg-slate-950">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 1.4 }}
        className="h-14 w-14 rounded-full border-2 border-cyan-300/20 border-t-cyan-300"
      />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-app text-slate-100">
      <CustomCursor />
      <Navbar />
      <HomePage />
      <FooterSection />
      <FloatingDock />
    </div>
  );
}
