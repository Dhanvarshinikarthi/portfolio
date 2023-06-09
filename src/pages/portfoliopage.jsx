import React from "react";
import PortfolioHero from "../components/portfoliohero/portfoliohero";
import MainProjects from "../components/mainprojects/myportfolioprojects";
import Reviews from "../components/projectsreviews/reviews";
const Portfoliopages = () => {
  return (
    <>
      <PortfolioHero />
      <MainProjects />
      <Reviews />
    </>
  );
};
export default Portfoliopages;
