import clsx from "clsx";

export function GlowCard({ className, children }) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30",
        className,
      )}
    >
      <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),rgba(139,92,246,0.14),transparent_70%)]" />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
