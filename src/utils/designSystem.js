/**
 * Design System Utilities
 * Standardized typography, headings, and button styles for consistent design
 */

// Typography Scale
export const typography = {
  // Headings
  h1: "text-3xl md:text-4xl font-extrabold text-white tracking-wide",
  h2: "text-2xl md:text-3xl font-bold text-white tracking-wide",
  h3: "text-xl md:text-2xl font-bold text-white tracking-wide",
  h4: "text-lg md:text-xl font-semibold text-white",
  
  // Body text
  body: "text-base text-white/80 leading-relaxed",
  bodySmall: "text-sm text-white/80 leading-relaxed",
  bodyLarge: "text-lg text-white/80 leading-relaxed",
  
  // Labels and captions
  label: "text-sm font-semibold text-white/70",
  caption: "text-xs text-white/60",
  small: "text-xs text-white/70",
};

// Button Variants
export const buttonStyles = {
  // Primary button - gradient purple with glow effect
  primary: `
    relative inline-flex items-center justify-center
    px-6 py-3 rounded-xl
    text-sm font-semibold tracking-wide
    text-black
    bg-gradient-to-r from-violet-400 to-violet-300
    shadow-md
    transition-all duration-300 ease-out
    hover:shadow-[0_0_30px_rgba(167,139,250,0.6)]
    hover:-translate-y-[1px]
    active:translate-y-0
    focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060010]
  `,
  
  // Primary glow layer (use inside primary button)
  primaryGlow: `
    pointer-events-none absolute inset-0 rounded-xl
    opacity-0 hover:opacity-100
    blur-xl transition-opacity duration-300
    bg-violet-400/50
  `,
  
  // Secondary button - white background
  secondary: `
    inline-flex items-center justify-center
    px-6 py-3 rounded-xl
    text-sm font-semibold
    text-black
    bg-white
    hover:bg-gray-200
    active:scale-95
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060010]
  `,
  
  // Toggle/segment button - for tabs and toggles
  toggle: {
    active: "px-5 py-2 text-sm rounded-full transition bg-violet-600 text-white font-medium",
    inactive: "px-5 py-2 text-sm rounded-full transition text-white/60 hover:text-white font-medium",
  },
  
  // Ghost button - transparent with border
  ghost: `
    inline-flex items-center justify-center
    px-6 py-3 rounded-xl
    text-sm font-semibold
    text-white
    bg-transparent
    border border-white/20
    hover:bg-white/10 hover:border-white/30
    active:scale-95
    transition-all duration-200 ease-out
    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#060010]
  `,
};

// Heading Components Helper
export const getHeadingClass = (level = 2) => {
  switch (level) {
    case 1:
      return typography.h1;
    case 2:
      return typography.h2;
    case 3:
      return typography.h3;
    case 4:
      return typography.h4;
    default:
      return typography.h2;
  }
};

// Text opacity levels (standardized)
export const textOpacity = {
  primary: "text-white", // 100%
  secondary: "text-white/80", // 80%
  tertiary: "text-white/70", // 70%
  muted: "text-white/60", // 60%
  disabled: "text-white/40", // 40%
};

