import GlassIcons from "./GlassIcons";
import { FaYoutube, FaGithub } from "react-icons/fa";
import { SiOpenai, SiGooglechrome, SiLeetcode } from "react-icons/si";
import { VscCode } from "react-icons/vsc";import SpotifyTrack from "./SpotifyTrack";
import { typography } from "../utils/designSystem";

export function ToolStack() {
const items = [
  { icon: <VscCode />,color:'transparent' , label: 'VS Code' },
  { icon: <FaYoutube />,color:'transparent' , label: 'YouTube' },
  { icon: <SiOpenai />,color:'transparent' , label: 'ChatGPT' },
  { icon: <SiGooglechrome />,color:'transparent' , label: 'Chrome' },
  { icon: <SiLeetcode />,color:'transparent' , label: 'LeetCode' },
  { icon: <FaGithub />,color:'transparent' , label: 'GitHub' },
];

 return (
  <div className="flex flex-col h-full w-full items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className={`${typography.h1} text-center`}>
          Daily Tool Stack!
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-row h-full w-full">
        {/* Left Side - Icons */}
        <div className="flex flex-col h-full items-center text-left p-6 gap-10 sm:gap-12 md:gap-14">
          <GlassIcons items={items} />
        </div>

       {/* Right Side - Spotify Card */}
       <div className="w-full max-w-3xl mx-auto p-2 mt-10 flex flex-col">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.45)] overflow-hidden">
         
         {/* 🔥 Playlist Preview (Primary) */}
        <a
         href="https://open.spotify.com/playlist/0FNypq26NL5uuKXbWDDiaJ"
         target="_blank"
         rel="noopener noreferrer"
         className="block"
        >
        <div className="flex flex-col sm:flex-row items-center gap-4 p-5 bg-gradient-to-r from-violet-600/80 to-violet-500/80 hover:from-violet-600 hover:to-violet-500 transition-all duration-300 cursor-pointer">
          {/* Cover */}
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden bg-black flex-shrink-0 shadow-lg">
            <img
             src="https://i.pinimg.com/736x/a7/71/5c/a7715c7800d8c788a746667733f4b591.jpg"
             alt="Playlist Cover"
             className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-black"
            >
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>

            <h2 className="text-lg sm:text-xl font-black text-black">
              Locked In
            </h2>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-black/80 mb-1">
              The cost of not locking in is the rest of your life clocking in.
            </p>
            <span className="text-[10px] sm:text-xs font-bold text-black/70">
              Click to open playlist on Spotify
            </span>
          </div>
        </div>
        </a>

    {/* Divider */}
    <div className="h-px bg-white/10" />

    {/* 🎧 Spotify Embed (Secondary) */}
    <div className="p-4 bg-black/40">
      <SpotifyTrack />
    </div>

    {/* Divider */}
    <div className="h-px bg-white/10" />

    {/* 🎬 GIF / Visual Teaser (Accent) */}
    <div className="p-4">
      <a
        href="https://open.spotify.com/playlist/0FNypq26NL5uuKXbWDDiaJ"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="group w-full max-w-md mx-auto aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
          <img
            src="/assets/WhatsApp Video 2025-12-17 at 2.07.49 AM (1).gif"
            alt="Playlist Preview"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
          />
        </div>
      </a>
    </div>

  </div>
</div>


      </div>
    </div>
);
};

