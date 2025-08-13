import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";

function page() {
  return (
    <Layouts>
      <PageBanner pageName={"Works"} pageTitle={"Case Studies: Projects"} />
      {/* portfolio */}
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="/img/projects/1.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                The majority have suffered alteration in some form.
              </span> */}
              <h3 className="mil-mb-30">NDC-X Platform</h3>
              <p className="mil-mb-30 mil-dark-soft">
                A powerful B2B portal designed for streamlined and efficient
                flight booking, offering reliability and advanced solutions for
                businesses
              </p>
              <Link href={"/projects/ndc-x"} className="mil-button-with-label">
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="mil-dark-soft">See More</span>
              </Link>
            </div>
          </div>
          <div className="row flex-sm-row-reverse justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover mil-type-2">
                <img src="/img/projects/2.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                The majority have suffered alteration in some form.
              </span> */}
              <h3 className="mil-mb-30">NSAS Tourism</h3>
              <p className="mil-mb-30 mil-dark-soft">
                A comprehensive tourism website offering tailored travel
                solutions, inspiring destinations, and seamless booking
                experiences for all your adventures.
              </p>
              <Link
                href={"/projects/nsas-tourism"}
                className="mil-button-with-label"
              >
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="mil-dark-soft">See More</span>
              </Link>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-6 mil-mb-60">
              <div className="mil-project-cover">
                <img src="/img/projects/3.jpg" alt="Project" />
              </div>
            </div>
            <div className="col-xl-5 mil-mb-60">
              {/* <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                The majority have suffered alteration in some form.
              </span> */}
              <h3 className="mil-mb-30">Aero Star Aviation</h3>
              <p className="mil-mb-30 mil-dark-soft">
                A trusted platform delivering top-notch aviation services,
                tailored solutions, and seamless experiences for all your
                aviation needs
              </p>
              <Link
                href={"/projects/aero-star-aviation"}
                className="mil-button-with-label"
              >
                <div className="mil-button mil-border mil-icon-button">
                  <span>
                    <i className="fas fa-plus" />
                  </span>
                </div>
                <span className="mil-dark-soft">See More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layouts>
  );
}

export default page;
