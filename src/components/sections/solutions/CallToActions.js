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
              <h5>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqu quis
                ipsum suspendisse ultrices gravida.
              </h5>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mil-adaptive-right">
              <a href="/contact" className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToActions;
