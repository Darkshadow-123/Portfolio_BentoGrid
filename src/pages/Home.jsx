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

function Home() {
  const glowColor = "243, 243, 243";
  const particleCount = 24;
  
  return (
    <div className="min-h-screen w-full p-6">
      <MagicBento
        textAutoHide={true}
        enableStars={false} // We'll handle particles individually
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={150}
        particleCount={particleCount}
        glowColor={glowColor}
      >
        <div className="grid h-full w-full grid-cols-10 grid-rows-5 gap-4">
          
          {/* Project Section */}
          <ParticleCard
            className="col-span-4 row-span-3 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <ProjectsSection/>
          </ParticleCard>
          
          {/* Profile Picture */}
          <ParticleCard
            className="col-span-1 row-span-1 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={8}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <ProfilePicture />
          </ParticleCard>

          {/* Description */}
          <ParticleCard
            className="col-span-5 row-span-1 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <Description />
          </ParticleCard>

          {/* Leetcode Section */}
          <ParticleCard
            className="col-span-2 row-span-2 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={10}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <LeetcodeSection />
          </ParticleCard>

          {/* Tech Stack */}
          <ParticleCard
            className="col-span-4 row-span-2 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <SkillsSection />
          </ParticleCard>

          {/* Links + Resume */}
          <ParticleCard
            className="col-span-4 row-span-2 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={10}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <LinksSection />
          </ParticleCard>

          {/* Contact Section */}
          <ParticleCard
            className="col-span-6 row-span-2 rounded-3xl bg-[#060010] flex items-center justify-center magic-bento-card magic-bento-card--border-glow"
            particleCount={particleCount}
            glowColor={glowColor}
            enableTilt={true}
            clickEffect={true}
            enableMagnetism={true}
          >
            <ContactSection />
          </ParticleCard>

        </div>
      </MagicBento>
    </div>
  );
}

export default Home;