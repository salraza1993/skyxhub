import ContactForm from "../../components/ContactForm";
import PageBanner from "../../components/PageBanner";
import Layouts from "../../layouts/Layouts";

export const metadata = {
  title: 'Contact Us - SKYXHUB',
  description: 'Get in touch with SKYXHUB for your technology solution needs. Contact our expert team today.',
};

const Contact = () => {
  return (
    <Layouts>
      <PageBanner pageName={"Contact us"} pageTitle={"Get in Touch"} />
      
      {/* contact section */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mil-mb-90">
                <h3 className="mil-mb-30">Information</h3>
                <p className="mil-mb-15">Address</p>
                <p className="mil-text-lg mil-dark mil-mb-30">
                  1010 Avenue, sw 54321, Chandigarh
                </p>
                <p className="mil-mb-15">Email</p>
                <p className="mil-text-lg mil-dark mil-mb-30">
                  info@skyxhub.com
                </p>
                <p className="mil-mb-15">Phone</p>
                <p className="mil-text-lg mil-dark">+91 987 654 3210</p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="mil-contact-sidebar">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact section end */}
    </Layouts>
  );
};

export default Contact;
