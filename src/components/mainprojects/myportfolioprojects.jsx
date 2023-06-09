import React from "react";
import "./myportfolioprojects.css";
import medialander from "../../assets/images/medialanderimg.jpg";
import newsfeedprofile from "../../assets/images/newsfeedprofileimage.jpg";
import socialmediacards from "../../assets/images/socialmediacardsimage.jpg";
import { Link } from "react-router-dom";
const MainProjects = () => {
  return (
    <div className="projects_list" id="projectsmainpage">
      <h1>MY PROJECTS</h1>
      <div className="projects_type">
        <div className="projects_container">
          <img src={medialander} alt="medialander" id="news" />
          <div className="middle">
            <div className="text">
              <h5>
                Media<span> L</span> ander
              </h5>
            </div>
            <Link to="/medialander" id="view">
              <b>View Page</b>
            </Link>
          </div>
        </div>

        <div className="projects_container">
          <img src={newsfeedprofile} alt="newsfeed" id="news" />
          <div className="middle">
            <div className="text">
              <h5>
                <span>P</span>ortfolio
              </h5>
            </div>
            <Link to="/portfolioprofile" id="view">
              <b>View Page</b>
            </Link>
          </div>
        </div>

        <div className="projects_container">
          <img src={socialmediacards} alt="socialmediacards" id="social" />
          <div className="middle">
            <div className="text">
              <h5>
                Social <span>N</span>etwork
              </h5>
            </div>
            <Link to="/socialmedia" id="view">
              <b>View Page</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainProjects;
