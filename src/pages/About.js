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
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p class="text">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
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
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
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
