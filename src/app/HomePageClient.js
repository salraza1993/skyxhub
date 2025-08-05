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

const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );
const LatestPostsSlider = dynamic( () => import("../components/sliders/LatestPosts"), { ssr: false } );
const HeroSlideshowSlider = dynamic( () => import("../components/sliders/HeroSlideshow"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("../components/sliders/Testimonial"), { ssr: false } );

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
      <HowItWorksSection />
      <SkillsSection />
      <Divider />
      <LatestPostsSlider posts={posts} />
      <TestimonialSlider />
      <ContactSection />
    </Layouts>
  );
}
