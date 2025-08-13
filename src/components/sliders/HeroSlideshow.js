'use client';
import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import content from "../../data/sliders/hero-slideshow.json";

const HeroSlideshow = () => {
  // For static JSON data, direct import with Next.js hot reloading works best
  const sliderContent = content;

  return (
    <div className="mil-banner mil-top-space-0">
      <Swiper {...sliderProps.milBannersSlider} className="swiper-container mil-banner-slideshow">
        {
          sliderContent.slides.map((slide, index) => (
            <SwiperSlide className="swiper-slide" key={index}>
              <img
                src={slide.image}
                className="mil-background-image"
                style={{ objectPosition: "center" }}
                data-swiper-parallax={-100}
                data-swiper-parallax-scale="1.1"
                alt="image"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className="mil-overlay" />
      
      <div className="mil-banner-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-8">
              {
                sliderContent.subtitle && 
                <span className="mil-suptitle mil-mb-60 mil-font-400" dangerouslySetInnerHTML={{ __html: sliderContent.subtitle.contentHtml }}></span>
              }
              <h1 className="mil-mb-60 mil-font-200">
                <span dangerouslySetInnerHTML={{ __html: sliderContent.title.first }} className="mil-uppercase mil-light" />{" "}
                <span className="mil-uppercase mil-font-700 mil-accent">{sliderContent.title.second}</span>
              </h1>
              <div className="mil-flex-hori-center">
                <p className="mil-button-descr mil-light-soft">
                  {sliderContent.description}
                </p>
                <div>
                  <Link href={sliderContent.button.link} className="mil-button mil-border mil-light">
                    <span>{sliderContent.button.label}</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-illustration-1">
                {sliderContent.items.map((item, key) => (
                <div key={key} className={`mil-item mil-item-${key+1}`}>
                  <div className="mil-plus">
                    <div className="mil-hover-window">
                      <div className="mil-window-content">
                        <h5 className="mil-dark mil-mb-15">{item.title}</h5>
                        <div className="mil-divider mil-divider-left mil-mb-15" />
                        <p className="mil-text-sm">
                          {item.text}
                        </p>
                      </div>
                    </div>
                    <div className="mil-item-hover">
                      <div className="mil-plus-icon">+</div>
                      <h6 className="mil-light">{item.label}</h6>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSlideshow;
