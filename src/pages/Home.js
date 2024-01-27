import React from "react";
import "../App.css";

const Home = () => {
  return <div>hello</div>;
};

export default Home;

// import homepage from "../assets/homepage.jpg";
// import img1 from "../assets/img1.webp";
// import img2 from "../assets/img2.webp";

// const Home = () => {
//   return (
//     <>
//       <header class="header-section flex">
//         <div className="left-header  container">
//           <div className="text-left container">
//             <h1>
//               Find a perfect property <br /> Where you'll love to live
//             </h1>
//             <p>
//               We helps businesses customize, automate and scale up <br /> their
//               ad production and delivery.
//             </p>
//           </div>
//           <div className="form-left container">
//             <form class="search-form ">
//               <input
//                 className="search-form-input"
//                 type="text"
//                 id="cityStreet"
//                 name="cityStreet"
//                 placeholder="Enter city or street"
//               />

//               <select
//                 id="propertyType"
//                 name="propertyType"
//                 className="search-form-select"
//               >
//                 <option value="apartment">Apartment</option>
//                 <option value="house">House</option>
//                 <option value="condo">Condo</option>
//                 <option value="townhouse">Townhouse</option>
//               </select>

//               <select id="priceRange" name="priceRange">
//                 <option value="0-500">0 - 500000</option>
//                 <option value="501-1000">500000 - 1000000</option>
//                 <option value="1001-1500">1000000 - 1500000</option>
//                 <option value="1501-2000">1500000 - 2000000</option>
//               </select>

//               <button class="primary-button" type="submit">
//                 Search
//               </button>
//             </form>
//           </div>
//         </div>
//         <div className="right-header">
//           <img src={homepage} alt="Rent picture" />
//         </div>
//       </header>

//       <section class="static-card-section container">
//         <div className="static-card">
//           <div class="box" id="box-1">
//             <h2>Simple & easy way to find your dream Appointment</h2>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry.
//             </p>
//             <button class="primary-button card-button">Get Started</button>
//           </div>
//           <div class="box " id="box-2">
//             <h3>
//               Search <br />
//               your location
//             </h3>
//           </div>
//           <div class="box " id="box-3">
//             <h3>
//               Get your
//               <br /> dream <br />
//               house
//             </h3>
//           </div>
//           <div class="box " id="box-4">
//             <h3>
//               Visit
//               <br /> Appointment
//             </h3>
//           </div>
//           <div class="box " id="box-5">
//             <h3>
//               Enjoy <br />
//               your <br />
//               Appointment
//             </h3>
//           </div>
//         </div>
//       </section>

//       <section class="rent-home-card-section">
//         <div className="rent-card-container flex  container">
//           <div className="rent-card-image">
//             <img src={img1} alt="rent picture" />
//           </div>
//           <div className="rent-card-text">
//             <h5>RENT A HOME</h5>
//             <h2>Rental Homes for Everyone</h2>
//             <p>Explore from Apartments, builder floors, villas and more</p>
//             <button className="primary-button">Explore Renting</button>
//           </div>
//         </div>
//       </section>

//       <section class="rent-land-card-section ">
//         <div className="rent-land-container flex  container">
//           <div className="rent-card-image">
//             <img src={img2} alt="rent picture" />
//           </div>
//           <div className="rent-r-card-text">
//             <h5>BUY PLOTS/LAND</h5>
//             <h2>Residential & Commercial Plots/Land</h2>
//             <p>
//               Explore Residential, Agricultural, Industrial and Commercial
//               Plots/Land
//             </p>
//             <button className="primary-button">Explore Plots/Lands</button>
//           </div>
//         </div>
//       </section>

//       <section class="email-subscribe-section">
//         <div className="email-subscribe-container flex ">
//           <div className="email-subscribe-bg flex">
//             <div className="email-subscribe-text">
//               <h2>For Recent Update, News.</h2>
//               <p>
//                 We helps businesses customize, automate and scale <br />
//                 up their ad production and delivery.
//               </p>
//             </div>
//             <div className="email-subscribe-form ">
//               <form className="flex" action="">
//                 <input
//                   className="email-input"
//                   type="email"
//                   id="email"
//                   name="email"
//                   placeholder="Enter your email"
//                 />
//                 <input
//                   className="primary-button subscribe-button"
//                   type="submit"
//                   value="Subscribe"
//                 ></input>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <footer></footer>

//       <div class="space"></div>
//     </>
//   );
// };

// export default Home;

{
  /* <div>
       section 1 
      <div class="container">
        <div class="left-container">
          <div class="left-text">
            <h1>
              Find a perfect property <br /> Where you'll love to live
            </h1>
            <p>
              We helps businesses customize, automate and scale up <br /> their
              ad production and delivery.
            </p>
          </div>
          <div class="left-form">
            <form class="form-homepage" action="#">
              <input type="text" placeholder="City/Street" />
              <select class="search-form" name="properties" id="lang">
                <input type="text" placeholder="City/Street" />
                <option value="select">Property Type</option>
                <option value="Flat">Flat</option>
                <option value="Villa">Villa</option>
              </select>
              <input type="submit" value="Submit" placeholder="Search" />
            </form>
          </div>
        </div>
        <div class="right-container">
          <img src={homepage} alt="img" />
        </div>
      </div>

       section 2 
      <div class="section2">
        <div class="left-section2">
          <div class="left-text">
            <h1>
              Simple & easy way to find <br /> your dream Appointmen
            </h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry.
            </p>
          </div>
          <div class="left-button">
            <button class="button">Get Started</button>
          </div>
        </div>
        <div class="right-section2">
          <div class="card-row1">
            <div class="card">
              <FaSearchLocation />
              Search <br />
              your <br /> location
            </div>
            <div class="card">
              <RiHomeOfficeLine />
              Get your <br />
              dream
              <br /> house
            </div>
          </div>
          <div class="card-row2">
            <div class="card">
              <FaSearchLocation />
              Search <br />
              your <br /> location
            </div>
            <div class="card">
              <RiHomeOfficeLine />
              Get your <br />
              dream
              <br /> house
            </div>
          </div>
        </div>
      </div>
    </div> */
}
