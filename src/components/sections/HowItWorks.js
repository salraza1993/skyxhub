import Content from "../../data/sections/how-it-works.json";

const HowItWorksSection = () => {
  return (
    <section className="mil-how-it-works mil-deep-bg mil-p-120-90">
      <div className="mil-deco mil-deco-3" style={{ top: 0, right: "20%" }} />
      <div
        className="mil-deco mil-deco-3"
        style={{ bottom: 0, left: "30%", transform: "rotate(180deg)" }}
      />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30 mil-dark">
          {Content.subtitle}
        </span>
        <h2 className="mil-mb-90">
          <span>{Content.title.first}</span> <span className="mil-accent-2 mil-font-700">{Content.title.second}</span>  <span>{Content.title.third}</span>
        </h2>
        <div className="row">
          {Content.items.map((item, key) => (
          <div className="col-md-6 col-xl-3" key={`how-it-works-i-${key}`}>
            <div className="mil-mb-60">
              <div className="mil-icon-box-head mil-mb-30">
                <div className="mil-icon-frame mil-icon-frame-sm">
                  <img src={item.icon} alt="icon" />
                </div>
                <h5>{item.name}</h5>
              </div>
              <p>{item.text}</p>
            </div>
          </div>
          ))}
        </div>
        <div className="row align-items-center">
          <div className="col-md-6 col-xl-6">
            <a href={Content.button1.link} className="mil-link mil-mb-30">
              <span>{Content.button1.label}</span>
              <i className="fas fa-arrow-right" />
            </a>
          </div>
          <div className="col-md-6 col-xl-6">
            <div className="mil-adaptive-right">
              <a href={""} className="mil-button mil-border mil-mb-30">
                <span>{Content.button2.label}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;