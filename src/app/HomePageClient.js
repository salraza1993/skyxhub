'use client';

import React from "react";
import Layouts from "../layouts/Layouts";
import dynamic from "next/dynamic";

import PartnersSection from "../components/sections/Partners";
import ServicesSection from "../components/sections/Services";
import HowItWorksSection from "../components/sections/HowItWorks";
import SkillsSection from "../components/sections/Skills";
import ContactSection from "../components/sections/Contact";
import Divider from "../components/sections/Divider";
import AwardsSection from "../components/sections/Awards";
import HomeSpecialSection from "../components/sections/HomeSpecialSection";

const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects.jsx"), { ssr: false } );
const HeroSlideshowSlider = dynamic( () => import("../components/sliders/HeroSlideshow"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts.jsx"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("../components/sliders/Testimonial.jsx"), { ssr: false } );

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
      <Divider />
      <LatestPostsSlider posts={posts} />
      <TestimonialSlider />
      <ContactSection />
    </Layouts>
  );
}
