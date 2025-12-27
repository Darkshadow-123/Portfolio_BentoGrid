import React from "react";
import { lazy, Suspense } from "react";
import MagicBento from "../components/MagicBento"; // Adjust path as needed
import {Description} from "../components/Description";
import {ToolStack} from "../components/ToolStack";
import {LeetcodeSection} from "../components/LeetcodeSection";
import {SkillsSection} from "../components/SkillsSection";
import {LinksSection} from "../components/LinksSection";
import { ContactSection } from "../components/ContactSection";
const ProjectsSection = lazy(()=>import ("../components/ProjectsSection"));
import { ParticleCard } from "../components/MagicBento";
const ActivityHeatmap = lazy(() => import('../components/ActivityHeatmap'));
import HomeStage from "./HomeStage";
const Blogs = lazy(() =>import('../components/Blogs'));

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
        spotlightRadius={90}
        particleCount={particleCount}
        glowColor={glowColor}
      >
        <div className="grid w-full grid-cols-10 grid-rows-[repeat(4,_350px)] rounded-3xl gap-5 p-6 magic-bento-card magic-bento-card--border-glow no-hover-lift">

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
      <LinksSection />
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
      <ToolStack />
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
      <ActivityHeatmap />
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