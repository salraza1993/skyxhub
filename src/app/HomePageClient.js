"use client";

import dynamic from "next/dynamic";
import Layouts from "../layouts/Layouts";

import ContactSection from "../components/sections/Contact";
import Divider from "../components/sections/Divider";
import HomeSpecialSection from "../components/sections/HomeSpecialSection";
import HowItWorksSection from "../components/sections/HowItWorks";
import PartnersSection from "../components/sections/Partners";
import ServicesSection from "../components/sections/Services";
import SkillsSection from "../components/sections/Skills";

const LatestProjectsSlider = dynamic(() => import("../components/sliders/LatestProjects.js"), { ssr: false });
const HeroSlideshowSlider = dynamic(() => import("../components/sliders/HeroSlideshow.js"), { ssr: false });

// Client Component - handles interactive elements
export default function HomePageClient({ posts, projects }) {
  return (
    <Layouts transparent>
      <HeroSlideshowSlider />
      <PartnersSection />
      <Divider />
      <ServicesSection />
      <Divider />
      <LatestProjectsSlider projects={projects} />
      <HomeSpecialSection />
      <HowItWorksSection />
      <SkillsSection />
      <ContactSection />
    </Layouts>
  );
}
