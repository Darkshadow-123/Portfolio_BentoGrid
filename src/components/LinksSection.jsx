import { Instagram, Github, Linkedin, Twitter } from "lucide-react";

export function LinksSection() {
  return (
    <div className="text-center text-white p-4">
      <h2 className="text-2xl font-bold">Profiles & Resume</h2>
      <ul className="mt-2 space-y-2">
        <li>      <a href="https://www.instagram.com/" target="_blank">
          <Instagram />
        </a></li>
        <li>            <a href="https://www.instagram.com/" target="_blank">
          <Github />
        </a></li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <Linkedin />
          </a></li>
        <li>
          <a href="https://www.instagram.com/" target="_blank">
            <Twitter />
          </a></li>
      </ul>

    </div>
  );
}


