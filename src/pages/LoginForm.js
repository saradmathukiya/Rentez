import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { login } from "../services/operations/authAPI";

import React from "react";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };
  return (
    <div className="signin-container">
      <div class="form-container">
        <p class="signin-title">Welcome back</p>
        <form class="signin-form" onSubmit={handleOnSubmit}>
          <input
            type="email"
            class="input"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleOnChange}
          />
          <input
            type="password"
            class="input"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleOnChange}
          />
          <Link to="/forgot-password">
            <p class="page-link">
              <span class="page-link-label">Forgot Password?</span>
            </p>
          </Link>
          <button class="signinform-btn">Log in</button>
        </form>
        <Link to="/signup">
          <p class="sign-up-label">
            Don't have an account?<span class="sign-up-link">Sign up</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;

{
  /* <div className="login-container flex">
      <form onSubmit={handleOnSubmit} className="login-form-container flex ">
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
            Password <sup className="star">*</sup>
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
          <Link to="/forgot-password">
            <p className="forgotpass-text">Forgot Password</p>
          </Link>
        </label>
        <button type="submit" className="login-signin-button primary-button">
          Sign In
        </button>
      </form>
    </div> */
}
