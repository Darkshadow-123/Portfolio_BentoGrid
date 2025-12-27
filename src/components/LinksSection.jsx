import { Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Dock from './Dock';
import { typography } from "../utils/designSystem";
import RotatingText from "./RotatingText";
  const items = [
    { icon: <Instagram size={18} color="white" />, label: 'Instagram', onClick: () => alert('Instagram!') },
    { icon: <Github size={18} color="white" />, label: 'Github', onClick: () => alert('Github!') },
    { icon: <Linkedin size={18} color="white" />, label: 'LinkedIn', onClick: () => alert('LinkedIn!') },
    { icon: <Twitter size={18} color="white" />, label: 'Twitter', onClick: () => alert('Twitter!') },
    { icon: <Mail size={18} color="white" />, label: 'Mail', onClick: () => alert('Mail!') },
  ];
export function LinksSection() {
  return (
    <div className="relative h-full p-6 rounded-2xl shadow-lg flex flex-col">

      {/* Content Area */}
      <div className="flex flex-col flex-1 items-center justify-center gap-6">

        {/* Header */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="text-center space-y-1">
          <h2 className={typography.h2}>Coding-Links</h2>
          <p className={typography.label}>
            Connect • Code • Collaborate
          </p>
        </div>          
        </div>


        {/* Status + Activity */}
        {/* Status + Activity */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex flex-col items-center gap-2 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur text-xl text-white/60 tracking-wide">
          <div className="opacity-60">  Currently building  </div>
          <div>
            <RotatingText texts={[
            "Interactive UI",
            "API-Driven UI",
            "Auth Systems",
            "Cloud Integrations",
            "Performance UI"
          ]}
          mainClassName="
          text-white font-medium
          overflow-hidden
          leading-none"
          staggerFrom="last"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2200}/>

          </div>
          
          </div>
        </div>


      </div>

      {/* Dock (Pinned Bottom) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="relative h-[120px] w-full flex items-end justify-center">
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={45}
            magnification={50}
          />
        </div>
      </div>

    </div>
  );
}
