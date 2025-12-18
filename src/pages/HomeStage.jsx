import React from "react";

const HomeStage = ({ children }) => {
  return (
    <div
      className="
        relative w-full
        p-6 md:p-8 lg:p-8

        /* Glassy background */
        bg-[#05000b]/60
        backdrop-blur-[20px]
        bg-gradient-to-br from-[#0a0015]/80 via-[#070012]/60 to-[#04000a]/80

        /* Border + shadow */
        border border-white/5
        ring-1 ring-white/10

        /* Glow on hover */
        hover:ring-white/20 
        hover:shadow-[0_0_45px_rgba(255,255,255,0.12)]
        transition-all duration-300

        overflow-hidden
      "
    >
      {/* Inner subtle glow frame */}
      <div className="pointer-events-none absolute inset-0 rounded-[40px] 
                      bg-[radial-gradient(circle_at_50%_0%,rgba(126,0,255,0.08),transparent_70%)]" />

      {/* Actual content */}
      <div className="relative z-[2]">
        {children}
      </div>
    </div>
  );
};

export default HomeStage;
