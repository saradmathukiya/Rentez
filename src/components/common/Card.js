import React, { useState } from "react";
import { FaBath } from "react-icons/fa";
import { IoBedSharp } from "react-icons/io5";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty } from "../../services/operations/propertyAPI";
import ConfirmationModal from "./ConfirmationModel";

const Card = ({
  img,
  city,
  state,
  bhk,
  size,
  bath,
  price,
  pricePer,
  type,
  propertyId,
  isSeller = false,
}) => {
  const { token } = useSelector((state) => state.auth);
  const [confirmationModal, setConfirmationModal] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-info">
        <div className="card-price">
          ₹{price}
          <span>/{pricePer}</span>
        </div>
        <div className="card-location">
          {city}, {state}
        </div>
        <div className="card-property-details">
          <span>
            <IoBedSharp />
            {bhk}
          </span>
          <span>
            <FaBath />
            {bath}
          </span>
          <span>
            <FaExternalLinkSquareAlt />
            {size}sqft
          </span>
          <span>| {type}</span>
        </div>
        {!isSeller ? (
          <button
            className="card-button"
            onClick={() => navigate(`/property/${propertyId}`)}
          >
            View Details
          </button>
        ) : (
          <div className="card-buttons">
            <button
              className="card-button"
              onClick={() => navigate(`/property/${propertyId}`)}
            >
              View Details
            </button>
            <button
              className="card-delete-btn"
              onClick={() =>
                setConfirmationModal({
                  text1: "Are you sure?",
                  text2: "After this you cannot access this Listing.",
                  btn1Text: "Delete",
                  btn2Text: "Cancel",
                  btn1Handler: () =>
                    dispatch(deleteProperty(token, propertyId)),
                  btn2Handler: () => setConfirmationModal(null),
                })
              }
            >
              <RiDeleteBinLine />
            </button>
          </div>
        )}
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </div>
  );
};

export default Card;
