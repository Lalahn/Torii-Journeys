import React from "react";
import "../Banner/Banner.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <h1 className="banner-title">Torii Journeys</h1>
        <p className="banner-description">
          Un portal bilingüe para viajeros y entusiastas de
          la cultura que buscan una experiencia auténtica e
          inmersiva en Japón
        </p>
        <Button text="Explorar" />
      </div>
    </div>
  );
};

export default Banner;
