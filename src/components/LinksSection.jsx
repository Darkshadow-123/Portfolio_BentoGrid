import { Instagram, Github, Linkedin, Twitter, Mail } from "lucide-react";
import Dock from './Dock';
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
      <div className="w-full h-full absolute bottom-35 flex items-center justify-center">
        <h2 className="text-2xl font-bold text-white justify-center text-center">
          Coding-Links
        </h2>
      </div>
      <div className="w-full h-full absolute bottom-25 flex items-center justify-center mt-2">
        <p className="text-sm font-semibold text-center text-white/70">
        Connect • Code • Collaborate
        </p>
      </div>
      <div className="w-full h-full max-w-md">
      <Dock
      items={items}
      panelHeight={68}
      baseItemSize={45}
      magnification={50}
      />        
      </div>
    </div>

  );
}