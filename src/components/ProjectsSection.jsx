import { Home, Music, LayoutGrid } from "lucide-react";
import { typography } from "../utils/designSystem";

const PROJECTS = [
  {
    id: 1,
    title: "CampTrek",
    description:
      "Full-stack campground platform with authentication, maps, reviews, and cloud image uploads.",
    icon: <Home className="w-4 h-4 text-violet-400" />,
    stack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Passport.js",
      "Cloudinary",
      "MapTiler",
    ],
    github: "https://github.com/Darkshadow-123/CampTrek-main",
    live: "https://camp-trek-main.vercel.app",
  },
  {
    id: 2,
    title: "Spotify Wrapped",
    description:
      "Spotify analytics dashboard with OAuth 2.0, live data visualization, and token refresh handling.",
    icon: <Music className="w-4 h-4 text-green-400" />,
    stack: [
      "React",
      "Spotify API",
      "OAuth 2.0",
      "Node.js",
      "Express",
      "Vercel",
    ],
    github: "https://github.com/Darkshadow-123/Spotify-Wrapped",
    live: "https://spotify-wrapped-chi.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Platform",
    description:
      "Interactive portfolio featuring a bento grid UI, motion effects, and live activity integrations.",
    icon: <LayoutGrid className="w-4 h-4 text-cyan-400" />,
    stack: [
      "React",
      "Tailwind",
      "Framer Motion",
      "REST APIs",
      "EmailJS",
    ],
    github: "https://github.com/Darkshadow-123/Portfolio_BentoGrid",
    live: "https://portfolio-bento-grid-sand.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <div className="w-full h-full px-6 py-6 flex flex-col justify-between">

      {/* Header */}
      <div className="mb-4">
        <h2 className={`${typography.h3} text-center`}>
          Projects
        </h2>
      </div>

      {/* Horizontal strip */}
      <div
        className="
          flex gap-4
          w-full
          overflow-x-auto no-scrollbar
          snap-x snap-mandatory
          pb-1
        "
      >
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="
              snap-start
              min-w-[260px]
              max-w-[280px]
              rounded-2xl
              bg-white/5
              border border-white/10
              p-4
              flex flex-col justify-between
              transition-all duration-200
              hover:bg-white/10
              hover:border-white/20
            "
          >
            {/* Title */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                {project.icon}
                <h3 className={`${typography.h4} leading-tight`}>
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-2 py-0.5
                    rounded-full
                    text-[10px]
                    text-white/50
                    bg-white/5
                    border border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-4 flex gap-4 text-[11px]">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/60
                    hover:text-white
                    transition
                  "
                >
                  GitHub
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    text-white/60
                    hover:text-white
                    transition
                  "
                >
                  Live Demo →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
