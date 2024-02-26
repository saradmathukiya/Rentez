import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setFilterData } from "../../slices/filterSlice";
import { IoClose } from "react-icons/io5";

export default function FilterModal({ modalData }) {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    propertyType: [],
    bhk: "",
    bathrooms: "",
    city: "",
    state: "",
    priceMin: "",
    priceMax: "",
  });

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => {
      return { ...prevFilters, [field]: value };
    });
  };

  const clearFilterHandler = () => {
    dispatch(setFilterData(null));
    modalData.cancelBtnHandler();
  };

  const handlePropertyTypeChange = (value) => {
    setFilters((prevFilters) => {
      const updatedPropertyTypes = prevFilters.propertyType.includes(value)
        ? prevFilters.propertyType.filter((type) => type !== value)
        : [...prevFilters.propertyType, value];
      return { ...prevFilters, propertyType: updatedPropertyTypes };
    });
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (parseInt(filters.priceMin) > parseInt(filters.priceMax)) {
      toast.error("Min price should not greater than Max price");
    } else {
      console.log(filters)
      dispatch(setFilterData(filters));
      modalData.cancelBtnHandler();
    }
  };

  return (
    <div className="filter-wrapper">
      <div className="filter">
        <div className="filter-heading">
          <h2>
            Filters{" "}
            <IoClose
              onClick={() => modalData.cancelBtnHandler()}
              className="filter-close-btn"
            />
          </h2>
          <hr />
        </div>

        <form className="filter-form" onSubmit={handleOnSubmit}>
          <div className="filter-form-top">
            Property Type
            <div id="checklist">
              <input
                defaultValue={1}
                name="r"
                checked={filters.propertyType?.includes("Flat")}
                onChange={() => handlePropertyTypeChange("Flat")}
                type="checkbox"
                id={0o1}
              />
              <label htmlFor={0o1}>Flat</label>
              <input
                defaultValue={2}
                name="r"
                type="checkbox"
                id={0o2}
                checked={filters.propertyType?.includes("Bunglow")}
                onChange={() => handlePropertyTypeChange("Bunglow")}
              />
              <label htmlFor={0o2}>Bunglow</label>
              <input
                defaultValue={3}
                name="r"
                type="checkbox"
                id={0o3}
                checked={filters.propertyType?.includes("Farmhouse")}
                onChange={() => handlePropertyTypeChange("Farmhouse")}
              />
              <label htmlFor={0o3}>Farmhouse</label>
              <input
                defaultValue={3}
                name="r"
                type="checkbox"
                id={0o4}
                checked={filters.propertyType?.includes("Villa")}
                onChange={() => handlePropertyTypeChange("Villa")}
              />
              <label htmlFor={0o4}>Villa</label>
              <input
                defaultValue={3}
                name="r"
                type="checkbox"
                id={0o5}
                checked={filters.propertyType?.includes("Land")}
                onChange={() => handlePropertyTypeChange("Land")}
              />
              <label htmlFor={0o5}>Land</label>
            </div>
          </div>
          <hr />
          <div className="filter-form-bottom">
            <label>
              Price
              <div className="filter-price">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceMin}
                  onChange={(e) =>
                    handleFilterChange("priceMin", e.target.value)
                  }
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceMax}
                  onChange={(e) =>
                    handleFilterChange("priceMax", e.target.value)
                  }
                />
              </div>
            </label>
            <hr />
            <label>
              Bedrooms
              <input
                type="number"
                placeholder="no. of rooms"
                value={filters.bhk}
                onChange={(e) => handleFilterChange("bhk", e.target.value)}
              />
            </label>
            <hr />
            <label>
              Bathrooms
              <input
                type="number"
                placeholder="no. of bathrooms"
                value={filters.bathrooms}
                onChange={(e) =>
                  handleFilterChange("bathrooms", e.target.value)
                }
              />
            </label>
            <hr />
            <label>
              City
              <input
                type="text"
                placeholder="city"
                value={filters.city}
                onChange={(e) => handleFilterChange("city", e.target.value)}
              />
            </label>
            <hr />
            <label>
              State
              <input
                type="text"
                placeholder="state"
                value={filters.state}
                onChange={(e) => handleFilterChange("state", e.target.value)}
              />
            </label>
            <hr />
            <div className="filter-button">
              <button
                className="clear-filter-btn"
                type="button"
                onClick={clearFilterHandler}
              >
                Clear filters
              </button>
              <button className="search-filter-btn" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
