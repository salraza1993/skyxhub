import PageBanner from "@/src/components/PageBanner";
import Divider from "@/src/components/sections/Divider";
import CallToActions from "@/src/components/sections/solutions/CallToActions";
import Steps from "@/src/components/sections/solutions/Steps";
import Layouts from "@/src/layouts/Layouts";

export const metadata = {
  title: "Solutions - SKYXHUB",
  description:
    "Learn more about SKYXHUB, our mission, vision, and the team behind our technology solutions.",
};

function page() {
  return (
    <Layouts>
      <PageBanner pageName={"Solutions"} pageTitle={"SOLUTIONS and Services"} />
      <CallToActions />
      <Divider />
      <Steps />
      <Divider />
      {/* <NextStep />
      <Divider />
      <PartnersSection />
      <Divider />
      <Services /> */}
      {/* <ServicesTypes /> */}
    </Layouts>
  );
}

export default page;
