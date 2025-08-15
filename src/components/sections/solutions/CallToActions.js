import Link from "next/link";

function CallToActions() {
  return (
    <section className="mil-p-120-90">
      <div
        className="mil-deco"
        style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="mil-hori-box mil-mb-30">
              <div className="mil-mr-30">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                  <img src="/img/icons/md/1.svg" alt="icon" />
                </div>
              </div>
              <h4>
                Boost revenue and delight customers with our cutting-edge travel technology solutions. Designed travel industry ,  while specializing in B2B, A2A our tools transform how you operate and grow your business.
              </h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mil-adaptive-right">
              <Link href={"/contact"} className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActions;
