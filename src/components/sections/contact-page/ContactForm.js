import React from 'react'

function ContactForm() {
  return (
    <form>
    <h4 className="mil-mb-30">
      <span className="mil-accent">01.</span> Tell Us About Yourself
    </h4>
    <div className="row">
      <div className="col-lg-6">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='first-name' className="mil-h6 mil-dark">
            <span>First Name</span>
          </label>
          <input autoComplete='given-name' id='first-name' name='first-name' type="text" placeholder="Enter your first name" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='last-name' className="mil-h6">
            <span>Last Name</span>
          </label>
          <input autoComplete='family-name' id='last-name' name='last-name' type="text" placeholder="Enter your last name" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='email' className="mil-h6">
            <span>Email Address</span>
          </label>
          <input autoComplete='email' id='email' name='email' type="email" placeholder="e.g. your@mydomain.com" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='phone' className="mil-h6">
            <span>Phone</span>
          </label>
          <input autoComplete='tel' id='phone' name='phone' type="number" placeholder="Enter your phone number" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='company' className="mil-h6 mil-dark">
            <span>Company</span>
          </label>
          <input autoComplete='organization' id='company' name='company' type="text" placeholder="Your company name" />
        </div>
      </div>
      <div className="col-lg-6 mil-mb-30">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='role' className="mil-h6 mil-dark">
            <span>Role</span>
          </label>
          <input autoComplete='title' id='role' name='role' type="text" placeholder="Your role" />
        </div>
      </div>
    </div>
    <h4 className="mil-mb-30">
      <span className="mil-accent">02.</span> What Can We Help You With?
    </h4>
    <div className="row">
      <div className="col-lg-6 mil-mb-30">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='subject' className="mil-h6 mil-dark">
            <span>Subject</span>
          </label>
          <input autoComplete='off' id='subject' name='subject' type="text" placeholder="Enter your subject" />
        </div>
      </div>
    </div>
    <h4 className="mil-mb-30">
      <span className="mil-accent">03.</span> Tell Us About Your Project
    </h4>
    <div className="row">
      <div className="col-lg-12">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='project-description' className="mil-h6">
            <span>Project Description</span>
          </label>
          <textarea
            id='project-description'
            name='project-description'
            placeholder="Your Message"
            className="mil-shortened"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="col-lg-12">
        <div className="mil-attach-frame mil-dark mil-mb-30">
          <i className="fas fa-paperclip" />
          <label htmlFor='mil-file-input' className="mil-custom-file-input">
            <span>Attach your file</span>
            <input autoComplete='off' type="file" id="mil-file-input" />
          </label>
          <p className="mil-text-sm mil-light-soft">up to 20MB</p>
        </div>
      </div>
      <div className="col-lg-6 mil-mb-30">
        <div className="mil-input-frame mil-mb-30">
          <label htmlFor='project-budget' className="mil-h6 mil-dark">
            <span>Project Budget</span>
          </label>
          <input autoComplete='off' id='project-budget' name='project-budget' type="number" placeholder={123} />
        </div>
      </div>
      <div className="col-lg-12">
        <button className="mil-button mil-border mil-fw">
          <span>Submit Now</span>
        </button>
      </div>
    </div>
  </form>
  )
}

export default ContactForm