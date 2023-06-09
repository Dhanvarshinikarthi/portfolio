import React from "react";
import "./aboutme.css";
import userimage from "../../assets/images/userimage.jpg";
const Aboutme = () => {
  return (
    <div className="aboutme_main" id="aboutmepage">
      <img src={userimage} alt="userimage" />
      <div className="aboutsme_details">
        <h1>ABOUT ME</h1>
        <div className="aboutme_personalinfo">
          <div className="bio">
            <p>
              <i className="arrow right"></i>
              <b> Name:</b> Dhanvarshini K
            </p>
            <p>
              <i className="arrow right"></i>
              <b> Age:</b> 22
            </p>
            <p>
              <i className="arrow right"></i>
              <b> DOB:</b> 17/08/2000
            </p>
            <p>
              <i className="arrow right"></i>
              <b> Degree:</b> Master
            </p>
            <p>
              <i className="arrow right"></i>
              <b> Hobbies:</b> Drawing,Hearing music,sketching
            </p>
          </div>
          <div className="aboutme_contact">
            <p>
              <i className="arrow right"></i>
              <b> Phone:</b> 8072275717
            </p>
            <p id="mail">
              <i className="arrow right"></i>
              <b> E-mail:</b> dhankarthi1708@gmail.com
            </p>
            <p>
              <i className="arrow right"></i>
              <b> City:</b> Chennai
            </p>
            <p>
              <i className="arrow right"></i>
              <b> State:</b> Tamil Nadu
            </p>
            <p>
              <i className="arrow right"></i>
              <b> Nationality:</b> Indian
            </p>
          </div>
        </div>
        <div className="language_main">
          <div className="language_list">
            <h1>LANGUAGES</h1>
            <div className="tamil">
              <h2>Tamil</h2>
              <div className="container">
                <div className="skills tamillang">99%</div>
              </div>
            </div>
            <div className="english">
              <h2>English</h2>
              <div className="container">
                <div className="skills englishlang">80%</div>
              </div>
            </div>
            <div className="tamil">
              <h2>Hindi</h2>
              <div className="container">
                <div className="skills hindilang">20%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Aboutme;
