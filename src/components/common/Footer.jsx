import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from '../../assests/logo/Logo-svg-rbg.svg'

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {

  useEffect(() => {
    // Scroll to the top of the footer section when the component mounts
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="company-logo">
            <Link to='/'>
              <img style={{height:'100%', width:'150px'}}  src={logo} alt='logo' />
            </Link>
          </div>

          <div className="footer-icons-wrapper">
            <div className="footer-icons" ><FaXTwitter style={{height:'22px', width:'22px'}}/></div>
            <div className="footer-icons"><FaLinkedinIn style={{height:'22px', width:'22px'}}/></div>
            <div className="footer-icons"><FaGithub style={{height:'22px', width:'22px'}}/></div>
            <div className="footer-icons"><FaFacebook style={{height:'22px', width:'22px'}}/></div>
            <div className="footer-icons"><FaInstagram style={{height:'22px', width:'22px'}}/></div>
          </div>
        </div>

        {/* <hr className="footer-hr"/> */}
        <div className="partition2" />

        <div className="footer-sub-content">
          <div className="footer-sub-content-left">
            <p>
              Explore seamless renting with Rentez. Your premier destination for hassle-free rental experiences.
            </p>
          </div>
        
          <div className="footer-sub-content-right">

            <div className="footer-section">
              <h2>Quick Links</h2>
              <p><a href="/">Home</a></p>
              <p><a href="/properties">Properties</a></p>
              <p><a href="/about">About Us</a></p>
              <p><a href="/plans">Plans</a></p>
              <p><Link to="/about#footer-section">Contact Us</Link></p>
            </div>

            <div className="footer-section">
              <h2>Contact Us</h2>
              <p>Email: example@eg.com</p>
              <p>Phone: +91 123-456-7890</p>
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
