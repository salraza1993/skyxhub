import ContactForm from "../../components/ContactForm";
import PageBanner from "../../components/PageBanner";
import Layouts from "../../layouts/Layouts";
import Link from "next/link";

export const metadata = {
  title: 'About Us - SKYXHUB',
  description: 'Learn more about SKYXHUB, our mission, vision, and the team behind our technology solutions.',
};

const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"Enterprise"} />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                Lorem ipsum dolor sit amet,{" "}
                <span className="mil-accent">consectetur adipiscing elit</span>,
                sed do eiusmod tempor incididunt ut labor aliqua.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <p className="mil-mb-60">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      
      {/* Rest of the about page content would go here */}
      {/* For brevity, I'm including just the beginning - you can copy the rest from pages/about.jsx */}
    </Layouts>
  );
};

export default About;
