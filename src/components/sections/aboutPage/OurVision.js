import React from 'react'

function OurVision() {
  return (
    <section className="mil-gradient-bg-45 mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-dark-soft mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Vision</h2>
              <h4 className="mil-mb-20 mil-font-400">
                Inspiring a more intelligent and interconnected world by revolutionizing travel agencies with meaningful innovation and digital empowerment. At SkyxHub Technologies, we think that technology is the path to gaining freedom, opportunity, and growth it's not only useful.
              </h4>
              {/* <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul> */}
            </div>
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="/img/photo/vision-bg.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default OurVision
