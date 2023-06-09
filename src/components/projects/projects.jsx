import React, { useState } from "react";
import "./projects.css";
import addprojects from "../../assets/icons/addprojects.png";
import cards from "../../assets/icons/cards.png";
import medialanderimg from "../../assets/icons/lander.png";
import newsfeed from "../../assets/icons/newsfeed.png";
import AddProjects from "../addprojects/addprojects";
const Projects = () => {
  const [addProjectOpen, setAddprojectOpen] = useState(false);
  return (
    <div className="projects" id="projectspagecards">
      <div className="projects_name">
        <h1>PROJECTS</h1>
        <button>Media Lander</button>
        <button>Newsfeed Profile</button>
        <button>Social Media Cards</button>
        <button onClick={() => setAddprojectOpen(true)}>
          <img src={addprojects} alt="addprojects" id="add" />
          Add Projects
        </button>
      </div>
      <div className="projects_description">
        <div className="medialander">
          <img src={medialanderimg} alt="lander" id="media" />
          <h1>
            <span>M</span>edia <span>L</span>ander
          </h1>
          <p>
            {" "}
            A Landing page is a standalone web page that a person lands on after
            clicking through fron an email,ad,or other digital location.Every
            content strategy should include the use of landing pages to convert
            more traffic and increase conversions.
          </p>
        </div>
        <div className="newsfeed">
          <img src={newsfeed} alt="newsfeed" />
          <h1>
            <span>P</span>ortfolio
          </h1>
          <p>
            {" "}
            A portfolio is a compilation of academic and professional materials
            that exemplifies your beliefs, skills, qualifications, education,
            training, and experiences. It provides insight into your personality
            and work ethic.
          </p>
        </div>
        <div className="socialcards">
          <img src={cards} alt="cards" />
          <h1>
            <span>S</span>ocial <span>N</span>etwork
          </h1>
          <p>
            {" "}
            It takes several different forms that result from mixing
            text,images,videos,links and audio files. A social media post is a
            short-form type of content or message that gets published such as
            Facebook,Instagram,Twitter,linkedIn and other similar channels.
          </p>
        </div>
      </div>
      <AddProjects trigger={addProjectOpen} setTrigger={setAddprojectOpen} />
    </div>
  );
};
export default Projects;
