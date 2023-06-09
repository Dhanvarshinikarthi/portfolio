import React, { useState } from "react";
import "./header.css";
import burger from "../../assets/icons/hamburger.svg";
import cancel from "../../assets/icons/cancel.svg";
import { Link } from "react-router-dom";
const Header = () => {
  const [sideBaron, setSidebarOn] = useState(false);
  const Hamburger = (
    <>
      {!sideBaron ? (
        <img
          src={burger}
          alt="hamicons"
          className="hamimage"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          alt="cancelicon"
          className="hamburger"
          width="40px"
          onClick={(e) => {
            e.preventDefault();
            setSidebarOn(false);
          }}
        />
      )}
    </>
  );
  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <Link id="home" to="/">
          Overview
        </Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </div>
    </div>
  );
  return (
    <div className="overview">
      <h1>
        <span>My</span>PortFolio
      </h1>
      <nav>
        <Link id="home" to="/">
          Overview
        </Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/certification">Certification</Link>
      </nav>
      {Hamburger}
      {sideBaron && sidebar}
      <button>
        <h4>Hire Me</h4>
      </button>
    </div>
  );
};
export default Header;
