import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import CountryCode from "../../../data/countrycode.json";
import { apiConnector } from "../../../services/apiconnector";
import { contactusEndpoint } from "../../../services/apis";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    // console.log("Form Data - ", data)
    try {
      setLoading(true);
      const res = await apiConnector(
        "POST",
        contactusEndpoint.CONTACT_US_API,
        data
      );
      // console.log("Email Res - ", res)
      setLoading(false);
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form className="contact-form" onSubmit={handleSubmit(submitContactForm)}>
      <div className="form-row">
        <div className="form-col">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name*"
            className="form-input"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="error-message">Please enter your first name.</span>
          )}
        </div>
        <div className="form-col">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name*"
            className="form-input"
            {...register("lastname")}
          />
          {errors.firstname && (
            <span className="error-message">Please enter your last name.</span>
          )}
        </div>
      </div>

      <div className="form-row" style={{flexDirection:'column'}}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address*"
          className="form-input"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="error-message">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="form-row" style={{flexDirection:'column'}}>
        <div className="phone-input">
          <select
            name="countrycode"
            id="countrycode"
            className="form-select"
            {...register("countrycode", { required: true })}
          >
            {CountryCode.map((ele, i) => {
              return (
                <option key={i} value={ele.code}>
                  {ele.code} -{ele.country}
                </option>
              );
            })}
          </select>
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            placeholder="Enter Phone number*"
            className="form-input phone-number"
            {...register("phoneNo", {
              required: {
                value: true,
                message: "Please enter your Phone Number.",
              },
              maxLength: { value: 12, message: "Invalid Phone Number" },
              minLength: { value: 10, message: "Invalid Phone Number" },
            })}
          />
        </div>
        {errors.phoneNo && (
          <span className="error-message">{errors.phoneNo.message}</span>
        )}
      </div>

      <div className="form-row" style={{flexDirection:'column'}}>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here*"
          className="form-textarea"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="error-message">Please enter your Message.</span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`submit-button ${!loading && "button-hover"} ${loading &&
          "button-disabled"}`}
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactUsForm;