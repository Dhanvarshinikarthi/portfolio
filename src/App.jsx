import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Overview from "./pages/overview";
import Certify from "./pages/certifications";
import Portfoliopages from "./pages/portfoliopage";
import MediaLanderProjects from "./pages/medialander";
import Newsfeedprojects from "./pages/newsfeedprofile";
import Socialmediaprojects from "./pages/socialmediacards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/certification" element={<Certify />} />
        <Route path="/portfolio" element={<Portfoliopages />} />
        <Route path="/medialander" element={<MediaLanderProjects />} />
        <Route path="/newsfeedprofile" element={<Newsfeedprojects />} />
        <Route path="/socialmedia" element={<Socialmediaprojects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
