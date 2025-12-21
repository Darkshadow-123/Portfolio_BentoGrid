import { typography } from "../utils/designSystem";

export function SkillsSection() {
  return (
    <div className="text-white p-6 h-full flex flex-col">
      {/* Title */}
      <h2 className={`${typography.h3} mb-4`}>
        Tech Stack
      </h2>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2 pt-5 pb-5 space-y-6 no-scrollbar
      [mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]
      [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_4%,black_96%,transparent)]">
        
         <SkillBlock
          title="Languages"
          skills={[
            "C++",
            "JavaScript",
          ]}
        />

        <SkillBlock
          title="Frontend"
          skills={[
            "React.js",
            "Tailwind CSS",
            "Framer Motion",
            "Recharts",
            "React Router"
          ]}
        />

        <SkillBlock
          title="Backend"
          skills={[
            "Node.js",
            "Express.js",
            "REST APIs",
            "Passport.js"
          ]}
        />

        <SkillBlock
          title="Databases & Services"
          skills={[
            "MongoDB",
            "Cloudinary",
            "MapTiler",
            "EmailJS"
          ]}
        />

        <SkillBlock
          title="Developer Tools & Deployment"
          skills={[
            "Git",
            "GitHub",
            "Postman",
            "Vercel",
            "VS Code",
            "Figma"
          ]}
        />
      </div>
    </div>
  );
}

/* ---------- Reusable Sub Component ---------- */

function SkillBlock({ title, skills }) {
  return (
    <div>
      <p className="text-sm text-gray-400 mb-2">{title}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              px-3 py-1 text-xs font-medium
              rounded-full
              bg-white/10 border border-white/10
              hover:bg-white/15 hover:border-white/25
              transition-all duration-200
              cursor-default
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
