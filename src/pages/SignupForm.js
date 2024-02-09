import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { ACCOUNT_TYPE } from "../utils/constants";
import Tab from "../components/common/Tab";
import { sendOtp } from "../services/operations/authAPI";
import { setSignupData } from "../slices/authSlice";

const SignupForm = () => {
  const ACCOUNT_TYPE = {
    CUSTOMER: "Customer",
    SELLER: "Seller",
    ADMIN: "Admin",
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CUSTOMER);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { firstName, lastName, email, password, confirmPassword } = formData;

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords Do Not Match");
      return;
    }
    const signupData = {
      ...formData,
      accountType,
    };

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData));
    // Send OTP to user for verification
    dispatch(sendOtp(email, navigate));

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setAccountType(ACCOUNT_TYPE.CUSTOMER);
  };

  // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Customer",
      type: ACCOUNT_TYPE.CUSTOMER,
    },
    {
      id: 2,
      tabName: "Seller",
      type: ACCOUNT_TYPE.SELLER,
    },
  ];

  return (
    <div className="login-container signup-container flex ">
      <div>
        <Tab tabData={tabData} field={accountType} setField={setAccountType} />
      </div>

      <form onSubmit={handleOnSubmit} class="signup-form">
        <p class="signup-title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="signup-flex">
          <label>
            <input
              name="firstName"
              onChange={handleOnChange}
              required=""
              placeholder=""
              type="text"
              value={firstName}
              class="signup-input"
            />
            <span>Firstname</span>
          </label>

          <label>
            <input
              name="lastName"
              onChange={handleOnChange}
              required=""
              placeholder=""
              type="text"
              class="signup-input"
            />
            <span>Lastname</span>
          </label>
        </div>

        <label>
          <input
            name="email"
            onChange={handleOnChange}
            required=""
            placeholder=""
            type="email"
            class="signup-input"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            name="password"
            onChange={handleOnChange}
            required=""
            placeholder=""
            type="password"
            class="signup-input"
          />
          <span>Password</span>
        </label>
        <label>
          <input
            name="confirmPassword"
            onChange={handleOnChange}
            required=""
            placeholder=""
            type="password"
            class="signup-input"
          />
          <span>Confirm password</span>
        </label>
        <button type="submit" class="signup-submit">
          Submit
        </button>
        <p class="signup-signin">
          Already have an acount ? <a href="/login">Signin</a>{" "}
        </p>
      </form>
    </div>
  );
};

export default SignupForm;

{
  /* <div className="login-container flex ">
     
<form onSubmit={handleOnSubmit} className="login-form-container flex">
  <Tab tabData={tabData} field={accountType} setField={setAccountType} />

  <label className="email-label">
    <p className="email-label-text">
      First Name <sup className="star">*</sup>
    </p>
    <input
      required
      type="text"
      name="firstName"
      value={firstName}
      onChange={handleOnChange}
      placeholder="Enter first name"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="email-input"
    />
  </label>
  <label className="email-label">
    <p className="email-label-text">
      Last Name <sup className="star">*</sup>
    </p>
    <input
      required
      type="text"
      name="lastName"
      value={lastName}
      onChange={handleOnChange}
      placeholder="Enter last name"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="email-input"
    />
  </label>

  <label className="email-label">
    <p className="email-label-text">
      Email Address <sup className="star">*</sup>
    </p>
    <input
      required
      type="text"
      name="email"
      value={email}
      onChange={handleOnChange}
      placeholder="Enter email address"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="email-input"
    />
  </label>
  <label className="pass-label">
    <p className="pass-label-text">
      Create Password <sup className="star">*</sup>
    </p>
    <input
      required
      type={showPassword ? "text" : "password"}
      name="password"
      value={password}
      onChange={handleOnChange}
      placeholder="Enter Password"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="pass-input"
    />
    <span
      onClick={() => setShowPassword((prev) => !prev)}
      className="showpass-icon"
    >
      {showPassword ? (
        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
      ) : (
        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
      )}
    </span>
  </label>
  <label className="pass-label">
    <p className="pass-label-text">
      Confirm Password <sup className="star">*</sup>
    </p>
    <input
      required
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      value={confirmPassword}
      onChange={handleOnChange}
      placeholder="Confirm Password"
      style={{
        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
      }}
      className="pass-input"
    />
    <span
      onClick={() => setShowConfirmPassword((prev) => !prev)}
      className="showpass-icon"
    >
      {showConfirmPassword ? (
        <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
      ) : (
        <AiOutlineEye fontSize={24} fill="#AFB2BF" />
      )}
    </span>
  </label>

  <button
    type="submit"
    className="login-signin-button signup-button primary-button"
  >
    Create Account
  </button>
</form>
</div> */
}
