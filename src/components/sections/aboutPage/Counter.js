import React from 'react'

function Counter() {
  return (
    <section className="mil-p-120-60 mil-dark-bg mil-dark-color">
      <div className="mil-deco mil-deco-accent" style={{ top: 0, left: "25%" }} />
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="mil-h1 mil-dark-color">
              8<span className="mil-accent-2">+</span>
            </div>
            <h6 className="mil-mb-60 mil-dark-color mil-font-300">Years Experience</h6>
            <h2 className="mil-mb-60 mil-dark-color">
              We Run All Kinds of <span className="mil-accent-2">IT Services</span> That Vow Your <span className="mil-accent-2">Success</span>
            </h2>
          </div>
          <div className="col-lg-6">
            <h3 className="mil-mb-60 mil-dark-color">
              Accelerate <span className="mil-accent-2">Innovation</span> with
              world class tech teams We’ll match you to an entire{" "}
              <span className="mil-accent-2">Remote Technology</span>
            </h3>
            <div className="row">
              <div className="col-lg-6">
                <h5 className="mil-mb-30 mil-dark-color">
                  <span className="mil-accent-2">16+</span>&nbsp; Software
                  Development
                </h5>
                <div className="mil-divider mil-divider-dark mil-divider-left mil-mb-60" />
              </div>
              <div className="col-lg-6 ">
                <h5 className="mil-mb-30 mil-dark-color">
                  <span className="mil-accent-2">3+</span>&nbsp; Years Client
                  Engagement
                </h5>
                <div className="mil-divider mil-divider-dark mil-divider-left mil-mb-60" />
              </div>
              <div className="col-lg-6">
                <h5 className="mil-mb-30 mil-dark-color">
                  <span className="mil-accent-2">360+</span>&nbsp; App
                  Development
                </h5>
                <div className="mil-divider mil-divider-dark mil-divider-left mil-mb-60" />
              </div>
              <div className="col-lg-6">
                <h5 className="mil-mb-30 mil-dark-color">
                  <span className="mil-accent-2">520+</span>&nbsp; Web
                  Development
                </h5>
                <div className="mil-divider mil-divider-dark mil-divider-left mil-mb-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Counter
