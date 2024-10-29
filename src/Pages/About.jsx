import React, { useEffect } from "react"

import aboutusheader from '../assests/images/aboutus-header.svg'

import ContactFormSection from "../components/core/AboutPage/ContactFormSection"

import foundingstory1 from '../assests/images/foundingstory.svg'
import ourmission from '../assests/images/ourmission.svg'
import ourvision from '../assests/images/ourvision.svg'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div className="aboutus-wrapper">
      <section className="aboutus-section1">
        <div className="aboutus-section1-left">
          <header className="header">
          Innovating the Rental Industry
          </header>
          <p className="subheader">
            Rentez pioneers innovation in the rental industry, 
            offering a unified platform for all property types, 
            minimizing search time for customers. Our commitment 
            to streamlining the rental process distinguishes us as 
            industry leaders.
          </p>
        </div>

        <div className="aboutus-section1-right floating1">
          <div><img src={aboutusheader} alt="aboutusheader"/></div>
        </div>
        
      </section>

      <section className="border-richblack-700">
        <div className="content-wrapper">
          <div className="passion-statement">
            <span>We are dedicated to transforming the renting experience.
            Our groundbreaking platform merges technology, expertise,
            and community to deliver an unmatched rental journey.</span>
          </div>
        </div>
      </section>

      <div className="partition1" />

      <section>
        <div className="content-wrapper">
          <div className="flex-container">
            <div className="founding-story">
              <h1 className="founder-title">Our Founding Story</h1>
              <p className="text">
                Our property rental platform came into being from a 
                collective desire and dedication to revolutionize the real 
                estate market.It all started with a team of property 
                managers, developers, and real estate enthusiasts who 
                identified the growing demand for accessible, 
                customizable, and premium rental options in an 
                ever-expanding urban landscape.
              </p>
              <p id="text2" className="text">
                With years of experience in property management, 
                we encountered firsthand the constraints and complexities of 
                traditional renting processes.We firmly believed that 
                the search for a perfect rental should not be limited by 
                geographical constraints or constrained by outdated practices.
              </p>
            </div>
            <div className="founder-image">
              <img src={foundingstory1} alt="" />
            </div>
          </div>

          <div className="flex-container" style={{flexDirection:'row-reverse'}}>
            <div className="vision">
              <h1 className="vision-title">Our Vision</h1>
              <p className="text">
              With this mission at heart, we embarked on a journey to 
              create a premier rental platform that would redefine the 
              rental experience. Our team of seasoned professionals 
              worked diligently to craft a seamless and user-friendly 
              platform that merges advanced technology with comprehensive 
              property listings, facilitating a streamlined and 
              hassle-free renting process.
              </p>
              <p id="text2" className="text">
              Drawing from our extensive experience in property 
              management, we encountered the shortcomings and 
              complexities of traditional renting methods. 
              We strongly advocated for a rental ecosystem that 
              transcends physical limitations and geographic boundaries, 
              ensuring accessibility and convenience for all.
              </p>
            </div>
            <div className="founder-image1">
              <img src={ ourvision} alt="" />
            </div>
          </div>

          <div className="flex-container" >
            <div className="mission">
              <h1 className="mission-title">Our Mission</h1>
              <p className="text">
              Our mission extends beyond merely providing rental listings. 
              We aimed to cultivate a thriving community of renters, 
              where individuals can connect, share experiences, and 
              learn from each other. We understand that the rental journey 
              is enriched through collaboration and dialogue, and we 
              actively promote this culture through discussion forums, 
              live events, and networking opportunities.
              </p>
              <p id="text2" className="text">
              Leveraging our expertise in property management, 
              we firsthandly observed the limitations and hurdles of 
              traditional rental processes. We firmly believed in 
              breaking free from the confines of conventional practices,
              advocating for a rental landscape that transcends physical 
              barriers and geographic constraints.
              </p>
            </div>
            <div className="founder-image">
              <img src={ourmission} alt="" />
            </div>

          </div>
        </div>
      </section>

      <div className="partition" />

      {/* contact form */}
      <section className="footer-section">
        <div className="content-wrapper">
          <ContactFormSection />
        </div>
      </section>
      </div>
    
    
  );
};

export default About;