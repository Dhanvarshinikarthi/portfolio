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
import Newsfeedprojects from "./pages/portfolio";
import Socialmediaprojects from "./pages/socialnetwork";
import Portfolioprojects from "./pages/portfolio";
import Socialnetwork from "./pages/socialnetwork";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/certification" element={<Certify />} />
        <Route path="/portfolio" element={<Portfoliopages />} />
        <Route path="/medialander" element={<MediaLanderProjects />} />
        <Route path="/portfolioprofile" element={<Portfolioprojects />} />
        <Route path="/socialmedia" element={<Socialnetwork />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
