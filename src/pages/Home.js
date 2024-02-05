import React from "react";
import "../App.css";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <header className="homepage-hero-section">
        <div className="homepage-bg-image  homepage-hero">
          <div className="homepage-hero-text">
            <h1>Find the best deals </h1>
            <h1>on last-minute vacation rentals</h1>
          </div>
          <div className="homepage-hero-form">
            <form className="flex">
              <div className="box">
                <span>City/Street</span>
                <input type="text" placeholder="Location" />
              </div>
              <div className="box">
                <span>Property Type</span>
                <input type="text" placeholder="Plot Villa ..." />
              </div>
              <div className="box">
                <span>Price Range</span>
                <input type="text" placeholder="Price Range" />
              </div>

              <button className="btn1-hero">
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </header>
    </>
  );
};

export default Home;
