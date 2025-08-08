import React from 'react'

function OurMission() {
  return (
    <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/t2.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-dark-soft mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <h4 className="mil-mb-20 mil-font-400">
                At <span className="mil-uppercase"><strong>SkyxHub</strong></span> Technologies, our mission is to revolutionize travel technology by delivering comprehensive IT services and cloud-based platforms that simplify operations, reduce costs, and accelerate growth.
              </h4>
              <h4 className="mil-mb-50 mil-font-400">
                We empower travel agencies, OTAs, and TMCs through white-label B2B solutions, NDC-enabled platforms, and real-time content APIs-enabling seamless digitalization and unmatched agility in a rapidly evolving market.
              </h4>
              {/* <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul> */}
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurMission