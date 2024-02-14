import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetail } from "../services/operations/propertyAPI";
import { useNavigate, useParams } from "react-router-dom";
import { notifySeller } from "../services/operations/propertyAPI";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyDetail = () => {
  const [properties, setProperties] = useState([null]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState();
  const { propertyId } = useParams();
  const { user } = useSelector((state) => state.profile);

  const [response, setResponse] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  document.body.scrollTop = document.documentElement.scrollTop = 0;

  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getPropertyDetail(propertyId);
      console.log(result);
      if (result) {
        setProperties(result);
      }
    };
    getProperty();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyId]);

  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    contactNumber: "",
    msg: "",
  });

  const { email, fullName, contactNumber, msg } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    notifySeller(
      properties?.seller?.email,
      email,
      fullName,
      contactNumber,
      msg
    );
    // navigate("/");
    setFormData({
      email: "",
      fullName: "",
      contactNumber: "",
      msg: "",
    });
  };

  const sliderSettings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <div className="property-details-container container">
      <div className="property-img-slider">
        {properties.photos && properties.photos.length > 0 && (
          <Slider {...sliderSettings}>
            {properties.photos.map((photo, index) => (
              <div key={index} className="slider-item">
                <img src={photo} alt="photu" />
              </div>
            ))}
          </Slider>
        )}
      </div>

      <div className="property-detail-section flex">
        <div className="property-details-section-left">
          <div className="property-details">
            <div className="property-details-heading">
              <h1>Property Information : </h1>
            </div>
            <h2>
              {properties?.size} Sqft {properties?.propertyType}
            </h2>
            <div className="property-details-price">
              <h1>
                {properties?.price} <span>/ {properties?.pricePer}</span>
              </h1>{" "}
              <p>Rent</p>
            </div>
            <h3>Total Rooms : {properties?.bhk}</h3>
            <h3>Total Bathrooms : {properties?.bathrooms}</h3>
            <h3>
              Listed at : {new Date(properties?.createdAt).toDateString()}
            </h3>
            <p>
              Address : {properties?.address} {properties?.city}{" "}
              {properties?.state} {properties?.pincode}
            </p>
            <p> Description : {properties?.description}</p>
          </div>

          <div className="seller-details">
            <h1>Seller Information</h1>
            <div className="seller-info">
              <div className="seller-detail-left">
                <img src={properties?.seller?.image} alt="" />
              </div>
              <div className="seller-detail-right">
                <h2>
                  {properties?.seller?.firstName} {properties?.seller?.lastName}
                </h2>
                <p>{properties?.seller?.email}</p>
                <p>{properties?.seller?.additionalDetails?.about}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="property-detail-right">
          <form onSubmit={handleOnSubmit}>
            <h1>Request Inquiry</h1>
            <input
              required
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleOnChange}
              placeholder="Full Name"
            />
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Email"
            />
            <input
              required
              type="number"
              name="contactNumber"
              value={contactNumber}
              onChange={handleOnChange}
              placeholder="Phone Number"
            />
            <input
              required
              type="text"
              name="msg"
              value={msg}
              onChange={handleOnChange}
              placeholder="Message"
            />
            <button type="submit" className="special-btn">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
