import React from 'react'
import Card from "../components/common/Card";
import { useEffect, useState } from "react";

import { getAllProperty } from "../services/operations/propertyAPI";
import { useSelector } from 'react-redux';
import FilterModal from "../components/common/FilterModal"

const Properties = () => {

    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filterModal, setFilterModal] = useState(null);
    const { filterData } = useSelector((state) => state.filter);
    
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
      const getProperty = async () => {
        setLoading(true);
        const result = await getAllProperty(filterData);
        if (result) {
          setProperties(result);
          setLoading(false);
        }
      };
    
      getProperty();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterData]);


    return (
      <div className="myproperties-container">
        <div className="my-properties-wrapper">
        <>
                {/* <h1>All Properties</h1> */}
                  <div className="my-properties">
                    {
                      loading ? (
                        <>
                          {Array.from({ length: 6 }).map((_, index) => (
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
                <div className="properties-filter-section">
                <button
                  className="filter-btn"
                  onClick={() =>
                    setFilterModal({
                      cancelBtnHandler: () => setFilterModal(null),
                    })
                  }
                >
                  <svg viewBox="0 0 512 512" height="1em">
                    <path
                      d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"
                    ></path>
                  </svg>
                  Filters
                </button>
              </div>
                        {properties?.map((property, index) => {
                          return (
                            <Card
                            className="property-card"
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
                        </>
                      )
                    }
                    
                  </div>
                  {filterModal && <FilterModal modalData={filterModal} />}
              </>
        </div>
      </div>
      );
    
}

export default Properties