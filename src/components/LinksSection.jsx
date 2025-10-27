import { Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Heatmap from "../components/Heatmap";
import Dock from './Dock';
import { LeetcodeSection } from "./LeetcodeSection";

  const items = [
    { icon: <Instagram size={18} color="white" />, label: 'Instagram', onClick: () => alert('Instagram!') },
    { icon: <Github size={18} color="white" />, label: 'Github', onClick: () => alert('Github!') },
    { icon: <Linkedin size={18} color="white" />, label: 'LinkedIn', onClick: () => alert('LinkedIn!') },
    { icon: <Twitter size={18} color="white" />, label: 'Twitter', onClick: () => alert('Twitter!') },
    { icon: <Mail size={18} color="white" />, label: 'Mail', onClick: () => alert('Mail!') },
  ];
export function LinksSection() {
  return (
    <div className="flex items-center justify-center p-10 rounded-2xl shadow-lg">
      <div className="w-full h-full max-w-md">
      <LeetcodeSection />
      </div>
      <div className="w-full h-full max-w-md">
      <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={60}
      />        
      </div>
    </div>

  );
}