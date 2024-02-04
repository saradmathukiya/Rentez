import React from "react";
import "../App.css";
import h1 from "../assets/h1.webp";

const Home = () => {
  return (
    <>
      <header className="homepage-hero-section">
        <div className="homepage-bg-image  homepage-hero">
          <div className="homepage-hero-text">
            <h1>Find the best deals </h1>
            <h1>on last-minute vacation rentals</h1>
          </div>
          <div className="homepage-hero-form"></div>
        </div>
      </header>
    </>
  );
};

export default Home;
