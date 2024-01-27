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
    dispatch(sendOtp(formData.email, navigate));

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
    <div className="login-container flex ">
      {/* Tab */}
      {/* Form */}
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
    </div>
  );
};

export default SignupForm;

//   return (
//     <div className="signup-container flex ">
//       <form onSubmit={handleOnSubmit} className="signup-form-container flex">
//         <Tab tabData={tabData} field={accountType} setField={setAccountType} />
//         <div className="signup-form-name flex">
//           <label>
//             <p className="signup-form-text">
//               First Name <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="firstName"
//               value={firstName}
//               onChange={handleOnChange}
//               placeholder="Enter first name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="signup-form-input"
//             />
//           </label>
//           <label>
//             <p className="signup-form-text">
//               Last Name <sup>*</sup>
//             </p>
//             <input
//               required
//               type="text"
//               name="lastName"
//               value={lastName}
//               onChange={handleOnChange}
//               placeholder="Enter last name"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="signup-form-input"
//             />
//           </label>
//         </div>
//         <label className="signup-form-emailbox">
//           <p className="signup-form-text">
//             Email Address <sup>*</sup>
//           </p>
//           <input
//             required
//             type="text"
//             name="email"
//             value={email}
//             onChange={handleOnChange}
//             placeholder="Enter email address"
//             style={{
//               boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//             }}
//             className="signup-form-input"
//           />
//         </label>
//         <div className="signup-form-password flex">
//           <label>
//             <p className="signup-form-text flex">
//               Create Password <sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               required
//               type={showPassword ? "text" : "password"}
//               name="password"
//               value={password}
//               onChange={handleOnChange}
//               placeholder="Enter Password"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="signup-form-input"
//             />
//             <span
//               onClick={() => setShowPassword((prev) => !prev)}
//               className="signup-pass-span"
//             >
//               {showPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//           <label>
//             <p className="signup-form-text">
//               Confirm Password <sup>*</sup>
//             </p>
//             <input
//               required
//               type={showConfirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               value={confirmPassword}
//               onChange={handleOnChange}
//               placeholder="Confirm Password"
//               style={{
//                 boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
//               }}
//               className="signup-form-input"
//             />
//             <span
//               onClick={() => setShowConfirmPassword((prev) => !prev)}
//               className="signup-confirmpass-span"
//             >
//               {showConfirmPassword ? (
//                 <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
//               ) : (
//                 <AiOutlineEye fontSize={24} fill="#AFB2BF" />
//               )}
//             </span>
//           </label>
//         </div>
//         <button type="submit" className="signup-form-button">
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;
