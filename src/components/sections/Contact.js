import Content from "../../data/sections/contact.json";
import ShortContactForm from "./ShortContactForm";

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
            <ShortContactForm />
          </div>
          <div className="col-lg-5 mil-mb-30"></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
