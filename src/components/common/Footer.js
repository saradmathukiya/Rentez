import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="company-logo">
            <Link to="/">
              <img
                style={{ height: "100%", width: "150px" }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>

          <div className="footer-icons-wrapper">
            <div className="footer-icons">
              <FaXTwitter style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="footer-icons">
              <FaLinkedinIn style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="footer-icons">
              <FaGithub style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="footer-icons">
              <FaFacebook style={{ height: "20px", width: "20px" }} />
            </div>
            <div className="footer-icons">
              <FaInstagram style={{ height: "20px", width: "20px" }} />
            </div>
          </div>
        </div>

        {/* <hr className="footer-hr"/> */}
        <div className="partition2" />

        <div className="footer-sub-content">
          <div className="footer-sub-content-left">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="footer-sub-content-right">
            <div className="footer-section">
              <h2>Contact Us</h2>
              <p>Email: example@eg.com</p>
              <p>Phone: +91 123-456-7890</p>
            </div>

            <div className="footer-section">
              <h2>Quick Links</h2>
              <p>
                <a href="/">Home</a>
              </p>
              <p>
                <a href="/properties">Properties</a>
              </p>
              <p>
                <a href="/aboutus">About Us</a>
              </p>
              <p>
                <a href="/plans">Plans</a>
              </p>
              <p>
                <a href="/contactus">Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p> &copy;2024 Rentez. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
