export function SkillsSection() {
  return (
    <div className="text-white p-4 text-justify">
      <h2 className="text-4xl font-extrabold mb-20">Tech Stack</h2>
      <ul className="mt-2 space-y-15">
        <li className="">Languages :
          <ul className="space-y-2 list-disc list-inside">
            <li>C++</li>
            <li>HTML</li>
            <li>JavaScript</li>
          </ul>
        </li>
        <li className="">Frontend :
          <ul className="space-y-2 list-disc list-inside">
            <li>React</li>
            <li>Tailwind CSS</li>
          </ul>
        </li>
        <li className="">Backend :
          <ul className="space-y-2 list-disc list-inside">
            <li>Node.js</li>
            <li>Express.js</li>
            <li>FastAPI</li>
          </ul>
        </li>
        <li className="">Database and Services :
          <ul className="space-y-2 list-disc list-inside">
            <li>MongoDB</li>
            <li>Cloudinary</li>
            <li>Redis</li>
          </ul>
        </li>
        <li className="">Tools and Others :
          <ul className="space-y-2 list-disc list-inside">
            <li>Git</li>
            <li>Postman</li>
            <li>Figma</li>
            <li>Authentication(JWT)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
