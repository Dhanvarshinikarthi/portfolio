import React from "react";
import "./portfoliohero.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PortfolioHero = () => {
  const settings = {
    dots: true,
    Infinity: true,
    autoplay: true,
    autoplayspeed: 2000,
    slideToshow: 1,
    slideToscroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="career_objective">
          <h1>
            <ins>CAREER OBJECTIVE</ins>
          </h1>
          <h2>
            <i>
              Looking for a challenging role in a reputable organization to
              utilize my technical,database and management skills for the growth
              of the organization as well as enhance my knowledge about new and
              emerging trends in the IT sector.
            </i>
          </h2>
        </div>
      </div>

      <div>
        <div className="portfoliohero_main">
          <h1>
            <ins>PROJECTS</ins>
          </h1>
          <h2>
            <i>
              A Front-End Developer is responsible for developing new userfacing
              features, determining the structure and design of web pages,
              building reusable codes, optimizing page loading times, and using
              a variety of markup languages to create the web pages.
            </i>
          </h2>
        </div>
      </div>

      <div>
        <div className="build_projects">
          <h1>
            <ins>BUILD PROJECTS</ins>
          </h1>
          <h2>
            <i>
              <ul>
                <li>Build Portfolio</li>
                <li>Build Social network</li>
              </ul>
            </i>
          </h2>
        </div>
      </div>
    </Slider>
  );
};
export default PortfolioHero;
