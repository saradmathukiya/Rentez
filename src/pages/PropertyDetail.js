import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPropertyDetail } from "../services/operations/propertyAPI";
import { useParams } from "react-router-dom";

const PropertyDetail = () => {
  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
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
  }, []);

  return (
    <div>
      <div className="property-detail-image-section">
        <div className="pdis-thumbnail">
          <img src={properties.thumbnail} alt="thumbnail" />
        </div>
      </div>
      <h2>{properties.address}</h2>
    </div>
  );
};

export default PropertyDetail;
