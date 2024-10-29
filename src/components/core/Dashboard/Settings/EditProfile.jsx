import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { updateProfile } from "../../../../services/operations/SettingsAPI";
// import IconBtn from ".././components/common/IconBtn";

const genders = ["Male", "Female", "Non-Binary", "Prefer not to say", "Other"];

const EditProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitProfileForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      dispatch(updateProfile(token, data));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(submitProfileForm)}
        className="edit-profile-detail"
      >
        <div className="edit-profile-details">
          <div className="edit-profile-details-row">
            <div className="edit-profile-details-row-data">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter first name"
                {...register("firstName", { required: false })}
                defaultValue={user?.firstName}
              />
              {errors?.firstName && <span>Please enter your first name.</span>}
            </div>

            <div className="edit-profile-details-row-data">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter first name"
                {...register("lastName", { required: false })}
                defaultValue={user?.lastName}
              />
              {errors?.lastName && <span>Please enter your last name.</span>}
            </div>
          </div>

          <div className="edit-profile-details-row">
            <div className="edit-profile-details-row-data">
              <label htmlFor="dateOfBirth">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                {...register("dateOfBirth", {
                  required: {
                    value: false,
                    message: "Please enter your Date of Birth.",
                  },
                  max: {
                    value: new Date().toISOString().split("T")[0],
                    message: "Date of Birth cannot be in the future.",
                  },
                })}
                defaultValue={user?.additionalDetails?.dateOfBirth}
              />
              {errors?.dateOfBirth && (
                <span>{errors?.dateOfBirth.message}</span>
              )}
            </div>

            <div className="edit-profile-details-row-data">
              <label htmlFor="gender">Gender</label>
              <select
                type="text"
                name="gender"
                id="gender"
                {...register("gender", { required: false })}
                defaultValue={user?.additionalDetails?.gender}
              >
                {genders.map((ele, i) => {
                  return (
                    <option key={i} value={ele}>
                      {ele}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="edit-profile-details-row">
          <div className="edit-profile-details-row-data">
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                placeholder="Enter Contact Number"
                {...register("contactNumber", {
                  required: {
                    value: false,
                    message: "Please enter your Contact Number.",
                  },
                  maxLength: { value: 12, message: "Invalid Contact Number" },
                  minLength: { value: 10, message: "Invalid Contact Number" },
                })}
                defaultValue={user?.additionalDetails?.contactNumber}
              />
              {errors?.contactNumber && (
                <span>{errors?.contactNumber.message}</span>
              )}
            </div>

            <div className="edit-profile-details-row-data">
              <label htmlFor="about">About</label>
              <input
                type="text"
                name="about"
                id="about"
                placeholder="Enter Bio Details"
                {...register("about", { required: false })}
                defaultValue={user?.additionalDetails?.about}
              />
            </div>
          </div>
        </div>

        <div className="edit-profile-detail-buttons">
          <button
            type="button"
            className="back-button"
            onClick={() => navigate("/dashboard/settings")}
          >
            {/* <FaArrowLeftLong /> */}
            Back
          </button>
          <button type="submit" className="special-btn">
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfile;