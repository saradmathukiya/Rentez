import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import dateFormat from "dateformat";
import { FiEdit } from "react-icons/fi";

const MyProfile = () => {

  const { user } = useSelector((state) => state.profile)
  const navigate = useNavigate()

  // Function to format the date using dateFormat
  const formatDate = (date) => {
    return dateFormat(date, "longDate");
  };

  return (
    
    <div className="profile-card">
      <h1> Hello, {user.firstName}</h1>

      <div className="profile-info-container">
        <div className="profile-details">
        <img src={user?.image}
          alt={`profile=${user?.firstName}`} 
          />
          <div className="space-y-1">
            <p className="fname-lastname">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="mail-my-profile">{user?.email}</p>
          </div>
        </div>

        <div id='edit-btn-div1' className="edit-btn-div">
          <button
            className="edit-btn"
            onClick={() => {
            navigate("/dashboard/settings");
          }}
          >
            <FiEdit />
            Edit
          </button>
              
        </div>

      </div>

      <div className="partition1"/>

      <div className="profile-section">
        <div className="details-container">
            <div className="details-header">
              <p className="text-richblack-5">Personal Details</p>

              <div className="edit-btn-div">
                <button
                className="edit-btn"
                onClick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <FiEdit />
                Edit
              </button>
              
              </div>
            </div>
            <div className="personal-details">
              <div className="detail">
                <p className="label">First Name</p>
                <p className="value">{user?.firstName}</p>
              </div>
              <div className="detail">
                <p className="label">Last Name</p>
                <p className="value">{user?.lastName}</p>
              </div>
              <div className="detail">
                <p className="label">Email</p>
                <p className="value">{user?.email}</p>
              </div>
              <div className="detail">
                <p className="label">Gender</p>
                <p className="value">
                  {user?.additionalDetails?.gender ?? "Add Gender"}
                </p>
              </div>
              <div className="detail">
                <p className="label">Phone Number</p>
                <p className="value">
                  {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                </p>
              </div>
              <div className="detail">
                <p className="label">Date Of Birth</p>
                <p className="value">
                  {formatDate(user?.additionalDetails?.dateOfBirth) ?? "Add Date Of Birth"}
                </p>
              </div>
            </div>
          </div>
        

        <div className="partition1"/>

        <div className="details-container" style={{marginBottom:'40px'}}>
          <div className="details-header">
            <p className="text-richblack-5">About</p>
              <div className="edit-btn-div">
                <button
                className="edit-btn"
                onClick={() => {
                  navigate("/dashboard/settings");
                }}
              >
                <FiEdit />
                Edit
              </button>              
              </div>
          </div>
          <p
            className={`${
              user?.additionalDetails?.about
                ? "about-txt"
                : "about-txt1"
            }`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
          
        </div>
      </div>
    </div>
  );
}
export default MyProfile