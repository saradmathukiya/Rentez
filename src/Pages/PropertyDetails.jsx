import React from "react";
import { useEffect, useState } from "react";
import { getPropertyDetail, notifySeller } from "../services/operations/propertyAPI";
import { useParams } from "react-router-dom";
import { IoIosPricetags } from "react-icons/io";
import { SlLocationPin  } from "react-icons/sl";
import { TbResize } from "react-icons/tb";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import ReadMore from "./ReadMore";

const PropertyDetails = () => {

  const [properties, setProperties] = useState([null]);
  const [loading, setLoading] = useState(true);

  const { propertyId } = useParams();

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
    notifySeller(properties?.seller?.email, email, fullName, contactNumber, msg);
    // navigate("/");
    setFormData({
      email: "",
      fullName: "",
      contactNumber: "",
      msg: "",
    });
  };

  const [detail, setDetail] = useState();
  const [images, setImages] = useState([]);
  const [activeImg, setActiveImage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPropertyDetail(propertyId);
      if (response && response.photos) {
        const newImages = [...response.photos];
        setImages(newImages);
        setActiveImage(newImages[0]);
        setDetail(response);
      }
    };

    fetchData();
  }, [propertyId]);

  // document.body.scrollTop=document.documentElement.scrollTop=0;

  return(

    
    <div className="property-details-container">

      {/* main slider */}
      <div className="carousel-div">
        <div className="main-carousel">
          <img src={activeImg} alt="" />
        </div>

      {/* sub slider */}
      <div className="sub-carousel">
          {properties.photos?.map((photo, index) => {
            return(
            <img
                    style={
                      activeImg === photo
                        ? { border: "2px solid #3770FF" }
                        : { border: "none" }
                    }
                    key={index}
                    src={photo}
                    alt="pics"
                    onClick={() => setActiveImage(photo)}
                  />
              ) 
          })}
      </div>

    </div>


    <div className="property-content">

     <div className="property-highlights-wrapper">

      <div className="property-highlights">
        <div className="property-title">

          <div className="property-type">
            {properties.propertyType}
          </div>

          {/* <div className="property-seller">
            Listed by - {`${properties.seller?.firstName} ${properties.seller?.lastName} ${properties.seller?.email}`}
          </div> */}

        </div>
        
        <div className="property-address">
          <div className="property-address-inside">
          <SlLocationPin  style={{fontSize:'20px', color:'#3770FF',marginRight:'5px'}}/>
          {properties.address}, {properties.city}, {properties.state} - {properties.pincode}
          </div>
          
        </div>
        
        <div className="property-price">
          <div className="flex" style={{alignItems:'center',gap:'10px',fontWeight:'500'}}>
            <IoIosPricetags style={{ color:'#3770FF'}}/>Price:
          </div> 
          <div style={{color:'#3770FF', fontWeight: '500'}}>
            ₹{properties.price}/{properties.pricePer}
          </div>
        </div>

        <div className="property-description">
          <h3>Property Information</h3>
          <ReadMore text={properties.description}
          maxLength={400}
          />
          
        </div>

        <div className="property-features">
          <h2>
            Home Details
          </h2>
          <div className="feature-item-container">
            
            <div className="feature-item">
              <IoBedOutline />
              <div className="feature-item-sub">
                <span>
                  {properties.bhk}
                </span>
                BHK
              </div>
            </div>

            <div className="feature-item">
              <LuBath/>
              <div className="feature-item-sub">
                <span>
                  {properties.bathrooms}
                </span> 
                Baths
              </div>
            </div>

            <div className="feature-item">
              <TbResize/>
              <div className="feature-item-sub">
                <span>
                  {properties.size}
                </span> 
                Sq.ft
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="property-seller">

        <img src={`${properties.seller?.image}`} alt="profile-pic" />
      
        <div className="property-seller-div">

          <div className="property-seller-sub-div">
            <p style={{textTransform:'capitalize'}}>
            {`${properties.seller?.firstName}
            ${properties.seller?.lastName}`}
            </p>

            <p>{`${properties.seller?.email}`}</p>
          </div>

          <p className="property-seller-description">{properties.seller?.additionalDetails?.about ?? "About Seller"}</p>

        </div>

      </div>

      </div>

      <div className="seller-form-container">
            <form className="seller-form" onSubmit={handleOnSubmit}>
              <h1>Request an Inquiry</h1>
              <div className="seller-form-input-div">
              <input
                required
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleOnChange}
                placeholder="Full Name*"
                className="input-seller-form"
                id="input-seller-form1"
              />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Email*"
                className="input-seller-form"
              />
              <input
                required
                type="number"
                name="contactNumber"
                value={contactNumber}
                onChange={handleOnChange}
                placeholder="Phone Number*"
                className="input-seller-form"
              />
              <input
                required
                type="text"
                name="msg"
                value={msg}
                onChange={handleOnChange}
                placeholder="Message*"
                className="input-seller-form"
              />
              <div className="send-req">
                <button type="submit" className="special-btn">
                  Send Request
                </button>
              </div>
              </div>
            </form>
      </div>

    </div>

    {/* <Footer/> */}
            
  </div>
  );
  
};

export default PropertyDetails;