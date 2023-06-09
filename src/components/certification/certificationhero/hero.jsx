import React from "react";
import "./hero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const Certificationhero = () => {
  const settings = {
    dots: true,
    Infinity: true,
    autoplay: true,
    autospeedplay: 2000,
    slideToshow: 1,
    slideToscroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="certification_hero">
          <h1>
            <span>Q</span>UALIFICATION
          </h1>
          <h4>&</h4>
          <h1>
            <span>S</span>kills
          </h1>
        </div>
      </div>
      <div>
        <div className="educationbgimage">
          <h1> MSC GRADUATED</h1>
        </div>
      </div>
      <div>
        <div className="skillsslider"></div>
      </div>
    </Slider>
  );
};
export default Certificationhero;
