import Content from "../../data/sections/contact.json";

const ContactSection = () => {
  return (
    <section className="mil-contact mil-gradient-bg mil-p-120-0">
      <div
        className="mil-deco mil-deco-accent"
        style={{ top: 0, right: "10%" }}
      />
      <div className="container">
        <h2 className="mil-light mil-mb-50">
          {Content.title.first}{" "}
          <span className="mil-accent">{Content.title.second}</span>
        </h2>

        <div className="row">
          <div className="col-lg-7">
            <form className="mil-contact-form" autoComplete="true">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mil-input-frame mil-mb-20">
                        <label htmlFor="user-name" className="mil-mb-10">
                          <span className="mil-light">Name</span>
                          <span className="mil-accent">(Required)</span>
                        </label>
                        <input
                          type="text"
                          id="user-name"
                          className="mil-input"
                          placeholder="Enter Your Name Here"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mil-input-frame mil-mb-20">
                        <label htmlFor="email" className="mil-mb-10">
                          <span className="mil-light">Email Adress</span>
                          <span className="mil-accent">(Required)</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="mil-input"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mil-input-frame mil-mb-20">
                        <label htmlFor="phone" className="mil-mb-10">
                          <span className="mil-light">Phone</span>
                          <span className="mil-light-soft">(Optional)</span>
                        </label>
                        <input
                          type="number"
                          id="phone"
                          className="mil-input"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mil-input-frame mil-mb-20">
                        <label htmlFor="subject" className="mil-mb-10">
                          <span className="mil-light">Subject</span>
                          <span className="mil-light-soft">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="subject"
                          className="mil-input"
                          placeholder="Your Subject"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mil-input-frame mil-mb-15">
                    <label htmlFor="message" className="mil-mb-10">
                      <span className="mil-light">Message</span>
                      <span className="mil-accent">(Required)</span>
                    </label>
                    <textarea
                      id="message"
                      className="mil-textarea"
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <p className="mil-text-sm mil-light-soft mil-mb-15">
                    We will process your personal information in accordance with
                    our Privacy Policy.
                  </p>
                  <div className="mil-checbox-frame mil-mb-30">
                    <input
                      className="mil-checkbox"
                      id="checkbox-1"
                      type="checkbox"
                      defaultValue="value"
                    />
                    <label
                      htmlFor="checkbox-1"
                      className="mil-text-sm mil-light"
                    >
                      I would like to be contacted with news and updates about
                      your{" "}
                      <a href="#." className="mil-accent">
                        events and services
                      </a>
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button className="mil-button mil-button-light mil-border mil-fw">
                    <span>Send Message Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 mil-mb-30"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
