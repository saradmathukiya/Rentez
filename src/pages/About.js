import React from "react";

import FoundingStory from "../assets/aboutus4.png";
import BannerImage1 from "../assets/aboutus1.webp";
import BannerImage2 from "../assets/aboutus2.webp";
import BannerImage3 from "../assets/aboutus3.webp";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection";
// import LearningGrid from "../components/core/AboutPage/LearningGrid";
import Quote from "../components/core/AboutPage/Quote";
import StatsComponenet from "../components/core/AboutPage/Stats";
// import HighlightText from "../components/core/AboutPage/HighlightText";

const About = () => {
  return (
    <div class="section1">
      <section class="bg-richblack-700">
        <div class="content-wrapper">
          <header class="header">
            Driving Innovation in Reting Industry
            <p class="subheader">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div class="spacer"></div>
          <div class="image-grid">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      <section class="border-b border-richblack-700">
        <div class="content-wrapper">
          <div class="spacer"></div>
          <Quote />
        </div>
      </section>

      <section>
        <div class="content-wrapper">
          <div class="flex-container">
            <div class="founding-story">
              <h1 class="founder-title">Our Founding Story</h1>
              <p class="text">
                Our renting platform was born from a collective desire to
                revolutionize resource access. Our team, diverse in
                entrepreneurship, tech, and sustainability, sought an efficient
                and sustainable solution to overconsumption.
              </p>
              <p class="text">
                Drawing from our own experiences and observations, we set out to
                build a platform that would not only benefit our users but also
                contribute to a more sustainable future. We can make a positive
                impact on the world around us.
              </p>
            </div>
            <div class="founder-image">
              <img src={FoundingStory} alt="" />
            </div>
          </div>
          <div class="flex-container ">
            <div class="vision">
              <h1 class="vision-title">Our Vision</h1>
              <p class="text">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div class="mission">
              <h1 class="mission-title">Our Mission</h1>
              <p class="text">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of renters, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and we foster this spirit of collaboration through
                forums, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsComponenet />
      <section class="footer-section">
        <div class="content-wrapper">
          <ContactFormSection />
        </div>
      </section>
    </div>
  );
};

export default About;
