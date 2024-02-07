import React from "react";
import "../App.css";
import { FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import Card from "../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { getAllProperty } from "../services/operations/propertyAPI";
import Featured from "../components/core/featured/Featured";
import broker from "../assets/broker.png";
import listing from "../assets/listing.png";
import house from "../assets/house.png";
import agreement from "../assets/agreement.png";

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
        <div className="slider-card-text-btn container">
          <div className="slider-card-text">Popular Listings</div>
          <div className="slider-card-btn">
            <div className="explore-text">Explore All</div>
            <div className="explore-btn">
              <FaArrowRightLong />
            </div>
          </div>
        </div>
        <div className="slider-container ">
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

      <section className="whyrentez-section">
        <div className="whyrentez-text">Why Rentez</div>
        <div className="whyrentez-card container">
          <a className="whyrentez-card1">
            <img src={broker} alt="no broker image" />
            <div className="whyrentez-card1-text-heading">Avoid Brokers</div>
            <div className="whyrentez-card1-text-paragraph">
              We directly connect you to verified owners to save brokerage
            </div>
          </a>

          <a className="whyrentez-card1">
            <img src={listing} alt="no broker image" />
            <div className="whyrentez-card1-text-heading">Easy Listings</div>
            <div className="whyrentez-card1-text-paragraph">
              Easy listing process. Also using WhatsApp
            </div>
          </a>

          <a className="whyrentez-card1">
            <img src={house} alt="no broker image" />
            <div className="whyrentez-card1-text-heading">
              Shortlist without Visit
            </div>
            <div className="whyrentez-card1-text-paragraph">
              Extensive information makes it easy
            </div>
          </a>

          <a className="whyrentez-card1">
            <img src={agreement} alt="no broker image" />
            <div className="whyrentez-card1-text-heading">Rental Agreement</div>
            <div className="whyrentez-card1-text-paragraph">
              Assistance in creating Rental agreement & Paper work
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
