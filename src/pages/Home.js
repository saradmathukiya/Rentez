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
import { Link } from "react-router-dom";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.webp";
import { Fade } from "react-awesome-reveal";

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
    infinite: true,
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
          // dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
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
    <div className="main-container">
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
            <div className="explore-text">
              <Link to="/properties">Explore All</Link>
            </div>
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
          <Fade triggerOnce duration="2000" direction="left">
            <a className="whyrentez-card1">
              <img src={broker} alt="no broker image" />
              <div className="whyrentez-card1-text-heading">Avoid Brokers</div>
              <div className="whyrentez-card1-text-paragraph">
                We directly connect you to verified owners to save brokerage
              </div>
            </a>
          </Fade>
          <Fade triggerOnce duration="2000" direction="left">
            <a className="whyrentez-card1">
              <img src={listing} alt="no broker image" />
              <div className="whyrentez-card1-text-heading">Easy Listings</div>
              <div className="whyrentez-card1-text-paragraph">
                Easy listing process. Also using WhatsApp
              </div>
            </a>
          </Fade>

          <Fade triggerOnce duration="2000" direction="right">
            <a className="whyrentez-card1">
              <img src={house} alt="no broker image" />
              <div className="whyrentez-card1-text-heading">
                Shortlist without Visit
              </div>
              <div className="whyrentez-card1-text-paragraph">
                Extensive information makes it Easy
              </div>
            </a>
          </Fade>

          <Fade triggerOnce duration="2000" direction="right">
            <a className="whyrentez-card1">
              <img src={agreement} alt="no broker image" />
              <div className="whyrentez-card1-text-heading">
                Rental Agreement
              </div>
              <div className="whyrentez-card1-text-paragraph">
                Assistance in creating Rental agreement & Paper work
              </div>
            </a>
          </Fade>
        </div>
      </section>

      <section class="rent-home-card-section">
        <div className="rent-card-container flex  container">
          <div className="rent-card-image">
            <img src={img1} alt="rent picture" />
          </div>
          <Fade triggerOnce duration="2000" direction="right">
            <div className="rent-card-text">
              <h5>RENT A HOME</h5>
              <h2>Rental Homes for Everyone</h2>
              <p>Explore from Apartments, builder floors, villas and more</p>
              <Link to="/properties">
                <button className="rent-home-btn">Explore Renting</button>
              </Link>
            </div>
          </Fade>
        </div>
      </section>

      <section class="rent-land-card-section ">
        <div className="rent-land-container flex  container">
          <div className="rent-card-image">
            <img src={img2} alt="rent picture" />
          </div>
          <Fade triggerOnce duration="2000" direction="left">
            <div className="rent-r-card-text">
              <h5>BUY PLOTS/LAND</h5>
              <h2>Residential & Commercial Plots/Land</h2>
              <p>
                Explore Residential, Agricultural, Industrial and Commercial
                Plots/Land
              </p>
              <Link to="/properties">
                <button className="rent-land-btn">Explore Plots/Lands</button>
              </Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default Home;
