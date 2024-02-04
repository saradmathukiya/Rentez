import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetail } from "../services/operations/propertyAPI";
import { useNavigate, useParams } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PropertyDetail = () => {
  const [properties, setProperties] = useState([null]);
  const [loading, setLoading] = useState(true);

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

  const sliderSettings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
  };

  return (
    <div className="property-details-container">
      <h1>Property Detail Page</h1>

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
        <div className="property-type">{properties.propertyType}</div>
        <div className="property-address">
          {properties.address}, {properties.city}, {properties.state},{" "}
          {properties.pincode}
        </div>
        <div className="property-seller">
          Seller:{" "}
          {`${properties.seller?.firstName} ${properties.seller?.lastName}`}
        </div>
        <div className="property-price">
          Price: {properties.price} ({properties.pricePer})
        </div>
        <div className="property-description">{properties.description}</div>
        <div className="property-features">
          <div className="feature-item">BHK: {properties.bhk}</div>
          <div className="feature-item">Bathrooms: {properties.bathrooms}</div>
          <div className="feature-item">Size: {properties.size}</div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
