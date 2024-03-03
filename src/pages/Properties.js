import React from "react";
import Card from "../components/common/Card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FilterModal from '../components/common/FilterModal'
import { getAllProperty } from "../services/operations/propertyAPI";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const { token } = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const [filterModal, setFilterModal] = useState(null);

  const { filterData } = useSelector((state) => state.filter);

  useEffect(() => {
    const getProperty = async () => {
      setLoading(true);
      const result = await getAllProperty(filterData);
      console.log(result);
      if (result) {
        setProperties(result);
        setLoading(false);
      }
    };
    getProperty();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterData]);

  return (
    <div className="mylisting-container">
      <div className="my-listings-wrapper">
        {loading ? (
          <>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="skeleton-loader" key={index}>
              <div className="skeleton-loader-wrapper">
                <div className="skeleton-loader-circle"></div>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
                <div className="line-3a"></div>
                <div className="line-4"></div>
              </div>
            </div>
          ))}
        </>
        ) : (
          <>
            <div className="my-listings">
            <div className="properties-filter-section">
                <button
                  className="filter-btn"
                  onClick={() =>
                    setFilterModal({
                      cancelBtnHandler: () => setFilterModal(null),
                    })
                  }
                >
                  Filters
                </button>
              </div>
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
            </div>
          </>
        )}
      </div>
      {filterModal && <FilterModal modalData={filterModal} />}
    </div>
  );
};

export default Properties;
