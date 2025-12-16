export function SkillsSection() {
  return (
    <div className="text-white p-6 h-full flex flex-col">
      {/* Title */}
      <h2 className="text-xl font-bold mb-4 tracking-wide">
        Tech Stack
      </h2>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6 scrollbar-thin scrollbar-thumb-white/20">
        
        <SkillBlock
          title="Languages"
          skills={["C++", "HTML", "JavaScript"]}
        />

        <SkillBlock
          title="Frontend"
          skills={["React", "Tailwind CSS"]}
        />

        <SkillBlock
          title="Backend"
          skills={["Node.js", "Express.js"]}
        />

        <SkillBlock
          title="Database & Services"
          skills={["MongoDB", "Redis", "Cloudinary"]}
        />

        <SkillBlock
          title="Tools & Others"
          skills={[
            "Git",
            "Postman",
            "Figma",
            "JWT Authentication",
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
              hover:bg-white/20 hover:border-white/20
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
