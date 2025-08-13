import Link from "next/link";

function Steps() {
  return (
    <section className="mil-p-120-90">
      <div className="container">
        <div className="row">
          <div className="col-12 mil-mb-50">
            <span className="mil-suptitle mil-dark-soft mil-suptitle-2 mil-mb-30">
              Where innovation meets technology.
            </span>
            <h2 className="mil-mb-30 mil-h1">
              <span className="mil-accent-2">Services</span> and
              <span className="mil-accent-2"> Solutions</span>
            </h2>
          </div>
        </div>
        <div className="row mil-mb-30-adapt gy-4">
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span>01</span>
              </div>
              <h4 className="mil-mb-15">Travel Agent Portal</h4>
              <p className="mil-dark-soft">
                A NEXT-GENERATION B2B TRAVEL ECOSYSTEM DESIGNED TO EMPOWER
                agencies with centralized access to global inventory, seamless
                booking workflows, and intelligent management tools.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>02</span>
              </div>
              <h4 className="mil-mb-15">White Label Travel Platform</h4>
              <p className="mil-dark-soft">
                A fully branded, rapidly deployable digital storefront that
                enables agencies to launch their own B2B Travel Portal with
                minimal infrastructure overhead.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-mb-30">
                <span>03</span>
              </div>
              <h4 className="mil-mb-15">Content Api (Aggregator API)</h4>
              <p className="mil-dark-soft">
                A developer-ready API that consolidates NDC content across
                multiple carriers, enabling seamless integration and access to
                competitive fares and ancillary services with real-time
                inventory.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-mb-30">
                <span>04</span>
              </div>
              <h4 className="mil-mb-15">NDC API Integration</h4>
              <p className="mil-dark-soft">
                Direct API connectivity for agencies with signed airline
                agreements, unlocking exclusive NDC content and enabling full
                control over <strong>NDC-enabled Booking</strong> the booking
                lifecycle.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-circle mil-mb-30">
                <span className="mil-h2">05</span>
              </div>
              <h4 className="mil-mb-15">Website Development Services</h4>
              <p className="mil-dark-soft">
                Professionally engineered travel websites (dynamic/static)
                tailored to agency-specific workflows, branding, and operational
                needs with Security Enhancements and Technological Excellence.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>06</span>
              </div>
              <h4 className="mil-mb-15">Markup Manager</h4>
              <p className="mil-dark-soft">
                Multiple Markup levels - Agency Level / Branch Level / Sub
                Agency / Corporate Markup by Fixed Amount or Percentage wise.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>07</span>
              </div>
              <h4 className="mil-mb-15">Service Fees Management</h4>
              <p className="mil-dark-soft">
                Customizable Markups, Rules-Based Fee Logic, Agent/Reseller
                Control, Flexibility Across Channels, Fee Transparency &
                Breakdown.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="services-card">
              <div className="mil-number-icon mil-lines mil-mb-30">
                <span>08</span>
              </div>
              <h4 className="mil-mb-15">Security and Compliance</h4>
              <p className="mil-dark-soft">
                Enterprise grade data security, <strong>Cyber Security</strong>,
                <strong>Data Protection</strong> &{" "}
                <strong>Privacy Regulations</strong>,{" "}
                <strong>Secure APIs & Integrations</strong>,{" "}
                <strong>Data Encryption</strong>, Secure Infrastructure,
                security enhancements.
              </p>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="cta-button-wrapper">
              <Link
                href={"/contact"}
                className="mil-button mil-border mil-mb-30"
              >
                <span>Tell us about your project</span>
              </Link>
            </div>
          </div>
          <div className="row align-items-center"></div>
          {/* <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <Link href={"/contact"} className="mil-link mil-mb-30">
                <span>See More</span>
                <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Steps;
