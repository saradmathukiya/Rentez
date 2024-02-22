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
