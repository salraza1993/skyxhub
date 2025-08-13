import Link from 'next/link'
import React from 'react'

function IntoSection() {
  return (
    <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-8">
              <h4 className='mil-font-400'>
                <strong>SKYXHUB</strong> is a pioneering travel technology company based in the UAE, dedicated to transforming the global travel industry through innovative solutions.
                <br /><br />
                With a strong emphasis on cutting-edge technology, <strong>SKYXHUB</strong> has emerged as a leader in providing comprehensive travel technology solutions.
                <br /><br />
                Our commitment to excellence and innovation drives us to continually enhance our offerings, setting new benchmarks in the travel technology landscape from real time inventory to having a competitive edge.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-4">
              <div className="mil-adaptive-right">
                <Link href={'/contact'} className="mil-button mil-border mil-mr-15 mil-mb-30">
                  <span>Talk To an Expert</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default IntoSection
