import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";

function ProjectDetails() {
  const bannerTitle = 'Aero Star Aviation'
  const projectInfo = [
    {key: 'Client', value: 'eCoshop Club'},
    {key: 'Service', value: 'App Development'},
    {key: 'Industry', value: 'Retail, eCommerce'},
    {key: 'Stack', value: 'Android, Realm, Dagger 2, RxJava'},
  ];
  const keyPoints = [
    "Multi IATA, Multi GDS.",
    "Direct and Indirect NDC content of airlines.",
    "Direct Airlines' XML/JSON content.",
    "Real-time airline ticketing and inventory management.",
    "Multi-channel content access for sub-agents.",
    "Comprehensive reporting and sales optimization tools.",
    "Automation"
  ];
  return (
    <Layouts>
      <PageBanner
        pageName={"ndc-x"}
        pageTitle={bannerTitle}
        bannerPath={"/img/photo/hero-banner-team.jpg"}
      />
      {/* project */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row flex-sm-row-reverse justify-content-between">
            <div className="col-lg-4 col-xl-3">
              <div className="mil-project-info mil-mb-60">
                <h5 className="mil-list-title mil-mb-30">Project Info</h5>
                {
                  projectInfo.map((list, index) => {
                    return <div key={index}>
                      <p className="mil-mb-10">{list.key}</p>
                      <h6 className="mil-mb-15">{list.value}</h6>
                      { index < projectInfo.length - 1 && (
                        <div className="mil-divider mil-divider-left mil-mb-30" />
                      )}
                    </div>
                  })
                }
              </div>
            </div>
            <div className="col-lg-7 col-xl-8">
              <span className="mil-suptitle mil-suptitle-2 mil-dark-soft mil-mb-30">Overviews</span>
              <h3 className="mil-mb-30">Our Solution</h3>
              <p className="mil-mb-30 mil-dark-soft">
                To further enhance their aviation services.
              </p>
              <div className="row mil-mb-30">
                <div className="col-xl-6">
                  <ul className="mil-check-icon-list mil-mb-15">
                    {
                      keyPoints.map((point, index) => (
                        <li key={index}>
                          <img src="/img/icons/sm/12.svg" alt="icon" />
                          <span className="mil-dark">{point}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
              <p className="mil-mb-20 mil-dark-soft">
                Aero Star Aviations, a proud partner of SkyXHub, has integrated our NDC-enabled booking system. Through the use of flexible rates, real-time inventory management, and API connection, Aero Star Aviations provides their customers with individualized, effective travel solutions. Our white-label platform has enhanced their scalable travel technology and corporate travel management capabilities, enabling them to grow internationally while preserving a safe and easy user experience.
              </p>
              <div className="project-image">
                <img src="/img/photo/partners.png" alt="NDC-X Project" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default ProjectDetails;
