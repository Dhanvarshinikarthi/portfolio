import React from "react";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Hero = () => {
  const settings = {
    dots: true,
    Infinity: true,
    autoplay: true,
    autoplayspeed: 10000,
    speed: 4000,
    // slideToshow: 2,
    // slideToscroll: 0,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="hero_main">
          <div className="myself">
            <p>
              <i>
                <em>Dhanvarshini K</em>
              </i>
            </p>
            <p id="description">
              <i>I'm a Fresher</i>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="aboutme_hero">
          <h1>
            <ins>ABOUT</ins>
          </h1>
          <h2>
            <i>
              I am pursuing FRONT-END DEVELOPER course to bulid a career in web
              developer through which i can achieve my goals with my gained
              knowledge and efforts.I am seeking for the role of Front-end
              developer.I absorb new technical skills quickly and efficiently.
            </i>
          </h2>
        </div>
      </div>
    </Slider>
  );
};
export default Hero;
