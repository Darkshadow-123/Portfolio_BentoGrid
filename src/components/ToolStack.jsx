import GlassIcons from "./GlassIcons";
import { lazy, Suspense } from "react";
const SpotifyTrack =lazy(()=>import ("./SpotifyTrack"));
import { typography } from "../utils/designSystem";

function ToolIcon({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="
        w-5 h-5
        object-contain
        select-none
        pointer-events-none
        opacity-90
      "
      loading="lazy"
      draggable={false}
    />
  );
}

const items = [
  {
    icon: <ToolIcon src="/assets/youtube.svg" alt="YouTube" />,
    color: "transparent",
    label: "YouTube"
  },
  {
    icon: <ToolIcon src="/assets/googlechrome.svg" alt="Chrome" />,
    color: "transparent",
    label: "Chrome"
  },
  {
    icon: <ToolIcon src="/assets/leetcode.svg" alt="LeetCode" />,
    color: "transparent",
    label: "LeetCode"
  },
  {
    icon: <ToolIcon src="/assets/github.svg" alt="GitHub" />,
    color: "transparent",
    label: "GitHub"
  }
];

export function ToolStack(){
 return (
  <div className="flex flex-col h-full w-full items-center justify-center">
      {/* Header Section */}
      <div className="flex flex-col items-center justify-center mt-6">
        <h1 className={`${typography.h1} text-center`}>
          Daily Tool Stack
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-row h-full w-full ">
        {/* Left Side - Icons */}
        <div className="flex flex-col h-full items-center text-left p-6 gap-10 sm:gap-12 md:gap-14 ">
          <GlassIcons items={items} />
        </div>

       {/* Right Side - Spotify Card */}
       <div className="w-full max-w-3xl mx-auto p-2 mt-10 flex flex-col group-hover:opacity-100 ">
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

    {/* 🎧 Spotify Embed (Secondary) */}
    <div className="p-4 bg-black/40">
      <Suspense fallback={<div className="text-xs text-white/40">Loading…</div>}>
      <SpotifyTrack />
      </Suspense>
    </div>


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
}