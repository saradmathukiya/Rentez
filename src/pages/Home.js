import React from "react";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import Card from "../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";

import { getAllProperty } from "../services/operations/propertyAPI";
import Featured from "../components/core/featured/Featured";

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getAllProperty();
      console.log(result);
      if (result) {
        setProperties(result);
      }
    };
    getProperty();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

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

      <section className="offer-section container">
        <div className="offer-section-box">
          <h2>Want an extra $25 off?</h2>
          <p>
            For a limited time, sign up and get a $25 promo code to use on any
            booking
          </p>
        </div>
      </section>

      <section className="featured-properties">
        <Featured />
      </section>

      <section className="slider-card ">
        <div className="slider-container container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            {properties?.map((property, index) => {
              return (
                <Card
                  key={index}
                  isSeller={false}
                  propertyId={property._id}
                  img={property.thumbnail}
                  bhk={property.bhk}
                  bath={property.bathrooms}
                  size={property.size}
                  price={property.price}
                  pricePer={property.pricePer}
                  city={property.city}
                  state={property.state}
                  type={property.propertyType}
                />
              );
            })}
          </Slider>
          <div style={{ textAlign: "center" }} className="slider-btn-homepage">
            <button className="button" onClick={previous}>
              Previous
            </button>
            <button className="button" onClick={next}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
