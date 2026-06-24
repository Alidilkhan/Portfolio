const links = ["hero", "about", "skills", "projects", "contact"];

export function FloatingDock() {
  return (
    <div className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-slate-950/70 px-3 py-2 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link}`}
            className="rounded-full px-3 py-1.5 text-xs font-medium capitalize text-slate-300 transition hover:bg-white/10 hover:text-cyan-300"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
