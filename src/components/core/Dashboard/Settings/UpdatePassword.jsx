import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { changePassword } from "../../../../services/operations/SettingsAPI";

const UpdatePasword = () => {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitPasswordForm = async (data) => {
    // console.log("password Data - ", data)
    try {
      await changePassword(token, data);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };
  return (
    <>
      <form className="update-pass-form" onSubmit={handleSubmit(submitPasswordForm)}>
        <div className="update-pass-form-inner">
          <h2 className="">Password</h2>
          <div className="update-pass-input-container">

            <div className="form-input-group">
              <label htmlFor="oldPassword" className="label-style">
                Current Password
              </label>
              <input
                type={showOldPassword ? "text" : "password"}
                name="oldPassword"
                id="oldPassword"
                placeholder="Enter Current Password"
                className="form-style"
                {...register("oldPassword", { required: true })}
              />
              <span
                onClick={() => setShowOldPassword((prev) => !prev)}
                className="show-password-icon"
              >
                {showOldPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.oldPassword && (
                <span className="text-warning">
                  Please enter your Current Password.
                </span>
              )}
            </div>

            <div className="form-input-group">
              <label htmlFor="newPassword" className="label-style">
                New Password
              </label>
              <input
                type={showNewPassword ? "text" : "password"}
                name="newPassword"
                id="newPassword"
                placeholder="Enter New Password"
                className="form-style"
                {...register("newPassword", { required: true })}
              />
              <span
                onClick={() => setShowNewPassword((prev) => !prev)}
                className="show-password-icon"
              >
                {showNewPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
              {errors.newPassword && (
                <span className="text-warning">
                  Please enter your New Password.
                </span>
              )}
            </div>

          </div>
        </div>

        <div className="btn-group">
          <button
            onClick={() => {
              navigate("/dashboard/my-profile");
            }}
            className="back-button "
          >
            Cancel
          </button>
          <button type="submit" className="update-btn">Update</button>
        </div>
      </form>
    </>
  );
};

export default UpdatePasword;