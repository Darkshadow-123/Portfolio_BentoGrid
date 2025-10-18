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
    <div className="text-center text-white p-4">
      <h2 className="text-2xl font-bold">Profiles & Resume</h2>
    <Dock
      items={items}
      panelHeight={68}
      baseItemSize={50}
      magnification={60}
    />
    </div>
  );
}