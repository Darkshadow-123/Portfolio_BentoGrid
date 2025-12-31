import { typography, buttonStyles } from "../utils/designSystem";

export function Description() {
  return (
    <section className="w-full h-full flex">
      <div
        className="
          w-full h-full rounded-3xl border border-white/10
          backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.45)]
          p-6 md:p-8 flex flex-col justify-between
        "
      >
        {/* ───────────────────────────── */}
        {/* TOP ROW */}
        {/* ───────────────────────────── */}
        <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
          
          {/* Left: Profile + Name */}
          <div className="flex items-center gap-4">
            {/* Profile Image */}
            <div className="w-30 h-30 md:w-36 md:h-36 rounded-2xl overflow-hidden border border-white/20 shadow-lg flex-shrink-0">
              <img
                src="/assets/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover scale-105 transition-transform duration-500 ease-out group-hover:scale-115 group-hover:translate-y-1"
              />
            </div>

            {/* Name + Role */}
            <div>
              <h2 className={typography.h3}>
                Rishi Lalwani
              </h2>
              <p className={typography.label}>
                Frontend Developer • React • Tailwind • UI Motion
              </p>
            </div>
          </div>

          {/* Right: Resume Button */}
          <a
            href="/assets/Rishi_Lalwani_Resume (5).pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles.primary}
          >
            {/* Glow layer */}
            <span className={buttonStyles.primaryGlow} />

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
              Resume
            </span>
          </a>

        </div>

        {/* ───────────────────────────── */}
        {/* DESCRIPTION */}
        {/* ───────────────────────────── */}
        <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
          I'm a passionate developer who loves crafting clean, performant web
          experiences using modern frontend technologies. I focus on intuitive
          UX, animation polish, and building interfaces that feel alive.
        </p>

        {/* ───────────────────────────── */}
        {/* BOTTOM: AVAILABILITY */}
        {/* ───────────────────────────── */}
        <div className="flex items-center gap-2 self-start mt-4 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full border border-white/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs font-semibold text-green-400">
            Available for work
          </span>
        </div>
      </div>
    </section>
  );
}
