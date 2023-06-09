import React from "react";
import "./newsfeedpage.css";
import portfolio1 from "../../../assets/images/newsfeed1.jpg";
import portfolio from "../../../assets/images/portfoliotemplate.jpg";
const Portfolioprojectpage = () => {
  return (
    <div className="newsfeedpage_main">
      <h1>PORTFOLIO</h1>
      <div className="about_newsfeed">
        <h3>ABOUT</h3>
        <p>
          <b>
            A portfolio is a compilation of academic and professional materials
            that exemplifies your beliefs, skills, qualifications, education,
            training, and experiences. It provides insight into your personality
            and work ethic.
            <br />
            Your portfolio should contain written and visual overviews of
            projects and significant pieces of work that you've managed or been
            involved with. It should also include an insight into skills you
            have, methods you've used, the impact of your work, along with any
            relevant outcomes and / or lessons you've learned.
          </b>
        </p>
        <div className="newsimg">
          <img src={portfolio1} alt="news" />
          <img src={portfolio} alt="news" />
        </div>
      </div>
      <button>Open Page</button>
    </div>
  );
};
export default Portfolioprojectpage;
