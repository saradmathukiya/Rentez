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
      <h1>Property Detail Page</h1>
      <div className="property-detail-left">
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

        <div className="property-highlights">
          <div className="property-price-type-bhk-conatiner flex">
            <div className="property-bhk-type flex">
              <div className="feature-item"> {properties.bhk}BHK</div>
              <div className="property-type">{properties.propertyType}</div>
            </div>

            <div className="property-price">
              {properties.price} / {properties.pricePer}
            </div>
          </div>

          <div className="property-address">
            {properties.address}, {properties.city}, {properties.state},{" "}
            {properties.pincode}
          </div>

          <div className="property-features ">
            <div className="property-size">Size: {properties.size} sqft</div>
            <div className="property-bathroom">
              Bathrooms: {properties.bathrooms}
            </div>
          </div>
          <div className="property-description">{properties.description}</div>

          <div className="property-seller">
            Seller:{" "}
            {`${properties.seller?.firstName} ${properties.seller?.lastName}`}
            {`${properties.seller?.email} `}
            {`${properties.seller?.additionalDetails?.about ?? "seller info"} `}
            <img src={`${properties.seller?.image} `} alt="" />
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
  );
};

export default PropertyDetail;
