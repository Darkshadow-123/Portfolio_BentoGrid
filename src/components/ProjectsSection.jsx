import { Home, Cpu, Music, LayoutGrid } from "lucide-react";
import { typography, buttonStyles } from "../utils/designSystem";

const PROJECTS = [
  {
    id: 1,
    title: "StayFinder",
    description:
      "Full-stack Airbnb-style platform with authentication, maps, cloud uploads, and reviews.",
    icon: <Home className="w-4 h-4 text-violet-400" />,
    stack: ["React", "Node", "MongoDB"],
  },
  {
    id: 2,
    title: "Spotify Profile",
    description:
      "Live Spotify profile with embeds, activity, and themed UI.",
    icon: <Music className="w-4 h-4 text-green-400" />,
    stack: ["React", "API"],
  },
  {
    id: 3,
    title: "Bento Grid UI",
    description:
      "Experimental glassmorphism + motion-driven bento layout.",
    icon: <LayoutGrid className="w-4 h-4 text-cyan-400" />,
    stack: ["UI", "Motion"],
  },
];

export default function ProjectsSection() {
  return (
    <div className="w-full h-full px-5 py-5 flex flex-col">

      {/* Header */}
      <div className="mb-4 text-center">
        <h2 className={typography.h3}>Projects</h2>
      </div>

      {/* Horizontal strip */}
      <div
        className="
          flex gap-4 w-full h-full
          overflow-x-auto no-scrollbar
          snap-x snap-mandatory
          pb-2
        "
      >
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className={`
              snap-start
              min-w-[240px]
              rounded-xl
              border
              p-4
              transition-all duration-200
              ${
                project.featured
                  ? "bg-white/10 border-white/20"
                  : "bg-white/5 border-white/10"
              }
              hover:bg-white/10
            `}
          >
            {/* Title */}
            <div className="flex items-center gap-2 mb-2">
              {project.icon}
              <h3 className={`${typography.h4} leading-tight`}>
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className={`${typography.bodySmall} leading-relaxed line-clamp-3`}>
              {project.description}
            </p>

            {/* Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-2 py-0.5 rounded-full
                    text-[10px] text-white/50
                    bg-white/5 border border-white/10
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* View more */}
        <div
          className="
            snap-start
            min-w-[180px]
            rounded-xl
            border border-dashed border-white/20
            flex items-center justify-center
            text-xs text-white/50
            hover:text-white
            hover:border-white/30
            transition
          "
        >
          <span className="flex items-center gap-1">
            View all projects →
          </span>
        </div>
      </div>
    </div>
  );
}
