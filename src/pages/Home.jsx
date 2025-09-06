import React from "react";
import {Description} from "../components/Description";
import {ProfilePicture} from "../components/ProfilePicture";
import {LeetcodeSection} from "../components/LeetcodeSection";
import {SkillsSection} from "../components/SkillsSection";
import {LinksSection} from "../components/LinksSection";
import { ContactSection } from "../components/ContactSection";
import {ProjectsSection} from "../components/ProjectsSection";

function Home() {
  return (
    <div className="min-h-screen w-full p-6">
      <div className="grid h-full w-full grid-cols-10 grid-rows-5 gap-4">
        
        {/* Project Section */}
        <div className="col-span-4 row-span-3 rounded-3xl bg-orange-400 flex items-center justify-center">
          <ProjectsSection/>
        </div>
        
        {/* Description */}
        <div className="col-span-5 row-span-1 rounded-3xl bg-orange-400 flex items-center justify-center">
          <Description />
        </div>

        {/* Profile Picture */}
        <div className="col-span-1 row-span-1 rounded-3xl bg-orange-400 flex items-center justify-center">
          <ProfilePicture />
        </div>

        {/* Leetcode Section */}
        <div className="col-span-2 row-span-2 rounded-3xl bg-orange-400 flex items-center justify-center">
          <LeetcodeSection />
        </div>

        {/* Tech Stack */}
        <div className="col-span-4 row-span-2 rounded-3xl bg-orange-400 flex items-center justify-center">
          <SkillsSection />
        </div>

        {/* Links + Resume */}
        <div className="col-span-4 row-span-2 rounded-3xl bg-orange-400 flex items-center justify-center">
          <LinksSection />
        </div>

        {/* Contact Section */}
        <div className="col-span-6 row-span-2 rounded-3xl bg-orange-400 flex items-center justify-center">
          <ContactSection />
        </div>


      </div>
    </div>
  );
}

export default Home;
