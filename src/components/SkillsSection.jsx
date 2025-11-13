export function SkillsSection() {
  return (
    <div className="text-white p-4 text-justify">
      <h2 className="text-4xl font-extrabold mb-10 mt-10">Tech Stack</h2>
      <ul className="mt-2 space-y-10 decoration-0">
        <li className="">Languages :
          <ul className="space-y-2 flex flex-wrap list-none list-inside ">
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">C++</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">HTML</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">JavaScript</li>
          </ul>
        </li>
        <li className="">Frontend :
          <ul className="space-y-2 flex flex-wrap list-none list-inside">
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">React</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">Tailwind CSS</li>
          </ul>
        </li>
        <li className="">Backend :
          <ul className="space-y-2 flex flex-wrap list-none list-inside">
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">Node.js</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">Express.js</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">FastAPI</li>
          </ul>
        </li>
        <li className="">Database and Services :
          <ul className="space-y-2 flex flex-wrap list-none list-inside">
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">MongoDB</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">Cloudinary</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">Redis</li>
          </ul>
        </li>
        <li className="">Tools and Others :
          <ul className="space-y-2 flex flex-wrap list-none list-inside">
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">Git</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">Postman</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 m-1 ">Figma</li>
            <li className="bg-violet-500 rounded-xs h-full flex flex-col sm:flex-row items-center hover:bg-violet-600 
            transition-all duration-200 cursor-pointer border border-slate-600/50 overflow-hidden p-0.5 mt-1 ">Authentication(JWT)</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
