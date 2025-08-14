import SubscribeForm from "@/src/components/SubscribeForm";
import Link from "next/link";

const Footer2 = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mil-dark-bg">
      <img src="/img/deco/map.png" alt="background" className="mil-footer-bg" />
      <div className="container">
        <div className="mil-footer-content">
          <div className="row align-items-center mil-p-120-60">
            <div className="col-xl-6 mil-mb-60">
              <h3 className="mil-light mil-mb-15">
                Join The <span className="mil-accent">SKYXHUB</span> Experience
              </h3>
              <p className="mil-light-soft">
                Experience innovation, expertise, and excellence with SKYXHUB.
              </p>
            </div>
            <div className="col-xl-6 mil-mb-60">
              <SubscribeForm />
            </div>
          </div>
          <div className="mil-divider mil-light" />
          <div className="row justify-content-between mil-p-120-60">
            <div className="col-md-3 col-lg-3 col-xl-3 mil-mb-30">
              <img
                src="/img/logo/logo-light.png"
                alt="logo"
                className="mil-logo mil-mb-60"
                style={{ width: 140 }}
              />
              <p
                className="mil-light mil-light-soft"
                style={{ marginBottom: 45 }}
              >
                City Pharmacy Building, M02 Floor, Street 22A, Opp Port Saeed 1,
                Bus Stop, Al Khabaisi, Dubai, United Arab Emirates
              </p>
              <ul className="mil-simple-list mil-mb-15">
                <li className="mil-light">
                  <span className="mil-accent-2">+971</span>&nbsp;
                  <span className="mil-light-soft">4338 8171</span>
                </li>
                <li>
                  <span className="mil-accent-2">info</span>
                  <span className="mil-light mil-light-soft">@skyxhub.com</span>
                </li>
              </ul>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-7">
              <div className="row justify-content-end">
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Social</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a
                        href="https://www.facebook.com/skyXhub"
                        target="_blank"
                      >
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/skyXhub"
                        target="_blank"
                      >
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/company/skyXhub"
                        target="_blank"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/skyXhub" target="_blank">
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@SkyXHub"
                        target="_blank"
                      >
                        YouTube
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60" target="_blank">
                  <h4 className="mil-list-title mil-light mil-mb-60">
                    Support
                  </h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <a href="#.">Documentation</a>
                    </li>
                    <li>
                      <a href="#.">Support</a>
                    </li>
                    <li>
                      <a href="#.">FAQs</a>
                    </li>
                    <li>
                      <a href="#.">Download</a>
                    </li>
                    <li>
                      <a href="#.">Sitemap</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4 col-lg-4 mil-mb-60">
                  <h4 className="mil-list-title mil-light mil-mb-60">Links</h4>
                  <ul className="mil-hover-link-list mil-light">
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="#.">Terms &amp; condition</Link>
                    </li>
                    <li>
                      <Link href="#.">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mil-footer-bottom">
        <div className="container">
          <p className="mil-text-sm mil-light">© SKYXHUB {currentYear}.</p>
          <p className="mil-text-sm mil-light">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer2;
