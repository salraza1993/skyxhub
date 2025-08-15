function AboutSpecialSection() {
  return (
    <section className="mil-deep-bg mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, left: "35%" }} />
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 mil-mb-60">
            <div className="mil-circle-illustration">
              <div className="mil-circle-bg" />
              <div className="mil-image-frame">
                <img src="/img/faces/t3.png" alt="img" />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="mil-suptitle mil-suptitle-2 mil-balance mil-dark mil-mb-30">
              Firm Overview
            </span>
            <h2 className="mil-mb-20 mil-uppercase">
              We Specialize in <br />
              <span className="mil-accent-2">Transforming Your Idea</span> or
              Business in The Current
              <br /> Digital Era.
            </h2>
            <p className="mil-mb-20">
              In today's fast-paced travel industry, innovation is the key to staying ahead. We help travel agencies, airlines, tour operators, and hospitality brands featuring  cutting-edge technology to streamline operations, enhance customer experiences, and maximize revenue potential.
            </p>
            <p className="mil-mb-20">
              From AI-powered booking platforms to seamless payment integrations, we bring your vision to life.
            </p>
            <div className="row align-items-end mil-display--none">
              <div className="col-xl-12">
                <ul className="mil-list mil-list-pills mil-list-pills--light mil-light-soft">
                  <li className="mil-list-item">
                    <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                    <span>
                      Smart booking solutions for effortless reservations
                    </span>
                  </li>
                  <li className="mil-list-item">
                    <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                    <span>
                      Seamless integrations with global travel platforms
                    </span>
                  </li>
                  <li className="mil-list-item">
                    <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                    <span>
                      Mobile-first experiences for travelers on the go
                    </span>
                  </li>
                  <li className="mil-list-item">
                    <span className="icon"><i className="fa-solid fa-circle-check"></i></span>
                    <span>
                      Data-driven insights to optimize your offerings
                    </span>
                  </li>
                </ul>
              </div>
              {/* <div className="col-xl-5">
                <Link href="team-single" className="mil-post-sm mil-mb-60">
                  <div className="mil-cover-frame">
                    <img src="/img/faces/1.jpg" alt="cover" />
                  </div>
                  <div className="mil-description">
                    <h4 className="mil-font-3 mil-accent-2">Jane Meldrum</h4>
                    <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                  </div>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSpecialSection;
