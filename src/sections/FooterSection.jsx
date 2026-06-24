import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-slate-400 sm:flex-row">
        <p>© {new Date().getFullYear()} Ali Ahmed. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#hero" className="hover:text-cyan-300">Home</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="icon-chip"><FaGithub /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="icon-chip"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}
