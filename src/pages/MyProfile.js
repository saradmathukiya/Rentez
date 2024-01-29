import React from "react";

import { RiEditBoxLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import IconBtn from "../components/common/IconBtn";

export default function MyProfile() {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  return (
    <div className="profile-card">
      <h1>My Profile</h1>

      <div className="profile-info-container">
        <div className="profile-details">
          <img src={user?.image} alt={`profile-${user?.firstName}`} />
          <div className="space-y-1">
            <p className="text-richblack-5">
              {user?.firstName + " " + user?.lastName}
            </p>
            <p className="text-richblack-300">{user?.email}</p>
          </div>
        </div>
        <IconBtn
          text="Edit"
          onclick={() => {
            navigate("/dashboard/settings");
          }}
        >
          <RiEditBoxLine />
        </IconBtn>
      </div>

      <div className="profile-section">
        <div className="details-container">
          <div className="details-header">
            <p className="text-richblack-5">About</p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
          </div>
          <p
            className={`${
              user?.additionalDetails?.about
                ? "text-richblack-5"
                : "text-richblack-400"
            }`}
          >
            {user?.additionalDetails?.about ?? "Write Something About Yourself"}
          </p>
        </div>

        <div className="details-container">
          <div className="details-header">
            <p className="text-richblack-5">Personal Details</p>
            <IconBtn
              text="Edit"
              onclick={() => {
                navigate("/dashboard/settings");
              }}
            >
              <RiEditBoxLine />
            </IconBtn>
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
              {/* <p className="value">
                {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                  "Add Date Of Birth"}
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
