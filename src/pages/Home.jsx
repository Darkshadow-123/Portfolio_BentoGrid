import React from "react";
import MagicBento from "../components/MagicBento"; // Adjust path as needed
import {Description} from "../components/Description";
import {ProfilePicture} from "../components/ProfilePicture";
import {LeetcodeSection} from "../components/LeetcodeSection";
import {SkillsSection} from "../components/SkillsSection";
import {LinksSection} from "../components/LinksSection";
import { ContactSection } from "../components/ContactSection";
import {ProjectsSection} from "../components/ProjectsSection";

import { ParticleCard } from "../components/MagicBento";
import ActivityHeatmap from "../components/ActivityHeatmap";
import HomeStage from "./HomeStage";
import Blogs from "../components/Blogs";

function Home() {
  const glowColor = "243, 243, 243";
  const particleCount = 12;
  
  return (
    
      < HomeStage> <MagicBento
        textAutoHide={true}
        enableStars={false} // We'll handle particles individually
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={75}
        particleCount={particleCount}
        glowColor={glowColor}
      >
        <div className="grid w-full grid-cols-10 grid-rows-[repeat(4,_350px)] gap-5">

    {/* Description */}
    <ParticleCard
      className="col-span-5 row-span-1 rounded-3xl bg-[#060010]/70 flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <Description />
    </ParticleCard>

    {/* Leetcode Section */}
    <ParticleCard
      className="col-span-3 row-span-1 rounded-3xl bg-[#060010]/70 flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={10}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <ActivityHeatmap />
    </ParticleCard>

    {/* Skills / Tech Stack */}
    <ParticleCard
      className="col-span-2 row-span-2 rounded-3xl bg-[#060010]/70 flex items-start justify-items-start magic-bento-card magic-bento-card--border-glow"
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <SkillsSection />
    </ParticleCard>

    {/* Profile Picture */}
    <ParticleCard
      className="col-span-4 row-span-2 rounded-3xl bg-[#060010]/70 flex items-start justify-start magic-bento-card magic-bento-card--border-glow"
      particleCount={8}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <ProfilePicture />
    </ParticleCard>

    {/* Links + Resume */}
    <ParticleCard
      className="col-span-4 row-span-1 rounded-3xl bg-[#060010]/70 flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={10}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <LinksSection />
    </ParticleCard>

    {/* Projects */}
    <ParticleCard
      className="col-span-6 row-span-1 rounded-3xl bg-[#060010]/70 flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <ProjectsSection />
    </ParticleCard>

    {/* Contact */}
    <ParticleCard
      className="col-span-6 row-span-2 h-full flex-col rounded-3xl bg-[#060010]/70 flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <Blogs />
    </ParticleCard>
    
    {/* Contact */}
    <ParticleCard
      className="col-span-4 row-span-2 h-full rounded-3xl bg-[#060010]/70 flex flex-col items-center justify-center magic-bento-card magic-bento-card--border-glow"
      particleCount={particleCount}
      glowColor={glowColor}
      enableTilt
      clickEffect
      enableMagnetism
    >
      <ContactSection />
    </ParticleCard>

  </div> 
      </MagicBento>
      </HomeStage>
  );
}

export default Home;