import React from "react";
import Card from "../../../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { getSellersListings } from "../../../services/operations/propertyAPI";
import { Link } from "react-router-dom";

const MyListing = () => {

  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const getProperty = async () => {
      setLoading(true); // Start loading
      try {
        const result = await getSellersListings(token);
        if (result) {
          setProperties(result);
        }
      } catch (error) {
        console.error("Failed to fetch properties", error);
      } finally {
        setLoading(false); // Stop loading regardless of the result
      }
    };
  
    getProperty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mylisting-container">
      <h1 className="my-listings-wrapper-h1">My Listings</h1>
      <div className="my-listings-wrapper">
        {loading ? (
           <>
           {Array.from({ length: 3 }).map((_, index) => (
             <div className="skeleton-loader" key={index}>
               <div className="skeleton-loader-wrapper">
                 <div className="skeleton-loader-circle"></div>
                 <div className="line-1"></div>
                 <div className="line-2"></div>
                 <div className="line-3"></div>
                 <div className="line-3a"></div>
                 <div className="line-4"></div>
                 <div className="line-4a"></div>
               </div>
             </div>
           ))}
         </>
        ) : properties.length > 0 ? (
          <>
            <div className="my-listings">
              {properties.map((property, index) => (
                <Card
                  key={index}
                  isSeller={true}
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
              ))}
            </div>
          </>
        ) : (
          <div className="no-listing-found">
            <h2>No listings found</h2>
            <Link to='/dashboard/create-listing'>
              <button>Add Listing</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
  
};

export default MyListing;