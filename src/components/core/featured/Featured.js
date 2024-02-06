import React from "react";
import FeaturedCard from "./FeaturedCard";

const Featured = () => {
  return (
    <>
      <section className="featured background container">
        <div>
          <div className="featured-heading">
            <h1>Featured Property Types</h1>
            <p>Find All Type of Property</p>
          </div>
          <FeaturedCard />
        </div>
      </section>
    </>
  );
};

export default Featured;
