import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getPasswordResetToken } from "../services/operations/authAPI";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getPasswordResetToken(email, setEmailSent));
  };

  return (
    <div className="forgotpass-container">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <div className="forgotpass-wrapper">
          <h1 className="fpass-heading">
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p className="fpass-subheading">
            {!emailSent
              ? "Have no fear. We'll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit}>
            {!emailSent && (
              <label className="fpass-label">
                <p className="fpass-text">
                  Email Address <sup className="star">*</sup>
                </p>
                <input
                  required
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="fpass-input"
                />
              </label>
            )}
            <button type="submit" className="fpass-submit-button">
              {!emailSent ? "Sumbit" : "Resend Email"}
            </button>
          </form>
          <div className="fpass-end-section">
            <Link to="/login">
              <p className="fpass-backtologin-button">
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
