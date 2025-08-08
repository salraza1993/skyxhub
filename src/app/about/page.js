import IntoSection from "@components/sections/aboutPage/IntoSection";
import PageBanner from "../../components/PageBanner";
import Layouts from "../../layouts/Layouts";
import AboutSpecialSection from "@/src/components/sections/aboutPage/AboutSpecialSection";
import PartnersSection from "@/src/components/sections/Partners";
import OurMission from "@/src/components/sections/aboutPage/OurMission";
import Features2 from "@/src/components/sections/aboutPage/Features2";
import ContactSection from "@/src/components/sections/Contact";
import Counter from "@/src/components/sections/aboutPage/Counter";
import OurVision from "@/src/components/sections/aboutPage/OurVision";
import WhyWorkWithUs from "@/src/components/sections/aboutPage/WhyWorkWithUs";

export const metadata = {
  title: 'About Us - SKYXHUB',
  description: 'Learn more about SKYXHUB, our mission, vision, and the team behind our technology solutions.',
};

const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"ABOUT US:  SKYXHUB"} />
      <IntoSection />
      <AboutSpecialSection />
      <Counter />
      <PartnersSection />
      <OurMission />
      <OurVision />
      <WhyWorkWithUs />
      <Features2 />
      <ContactSection />
    </Layouts>
  );
};

export default About;
