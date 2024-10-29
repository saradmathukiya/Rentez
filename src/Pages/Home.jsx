import React, { useEffect, useState } from 'react'
import house from '../assests/images/house.png'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-router-dom'
import home from '../assests/logo/wired-gradient-63-home-semi-loop.gif'
import eye from '../assests/logo/wired-gradient-69-eye (1).gif'
import happyface from '../assests/logo/wired-gradient-261-emoji-smile.gif'
import search from '../assests/logo/wired-gradient-19-magnifier-zoom-search.gif'
import { useNavigate } from 'react-router-dom'
import { Fade } from "react-awesome-reveal";
import chart from '../assests/images/wired-gradient-153-bar-chart (2).webp'
import coins from '../assests/logo/wired-gradient-290-coin.webp'
import globe from '../assests/images/wired-gradient-27-globe.webp'
import allcoins from '../assests/images/wired-gradient-298-coins (2).webp'
import deal from '../assests/images/deal.png'
import flat from '../assests/images/flat.png' 
import fairprice from '../assests/images/fair-price.png' 
import Card from '../components/common/Card'
import { getAllProperty } from "../services/operations/propertyAPI";


const Home = () => {

  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const result = await getAllProperty();
        setProperties(result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className='container'  
    style={{display:'flex',
    flexWrap:'wrap',
    flexDirection:'column'}}
    >
      {/* section-1 hero */}
        <section className='section-wrapper wrap'>
        <div className='home-hero1 flex wrapper'>

          <div className='home-hero1-left'>
            <Fade triggerOnce direction='left' duration='2000'>
              <h1>
                <span className='text-description'>Unlock the Door to Your Dream Space, Seamlessly Rent Your Next </span>
                <span className='typeanimation'>
                  <TypeAnimation
                  style={{whiteSpace: 'pre-line'}}
                  sequence={['\nFlat',1000,'\nVilla',1000,'\nFarmhouse',1000,'\nBunglow',1000,'\nLand',1000]}
                  repeat={Infinity}
                  />
                </span>
              </h1>
            </Fade>
              
            <Fade triggerOnce direction='right' duration='2000'>
              <div className='get-started-div'>
                  <button className="custom-btn btn-1" onClick={() => navigate('/signup')}>Get Started</button>
              </div>
            </Fade>
              
          </div>

          <div className='home-hero1-right floating'>
              <img src={house} alt='house'></img>
          </div>

        </div>
        </section>

        {/* curve img */}
        <div className="custom-shape-divider-top-1705728335">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z" className="shape-fill"></path>
          </svg>
        </div>

    {/* section-2 hero2*/}

      <section className="home-hero2">
        <div className="home-hero2-main">

          {/* left */}
          <div className="custom-left">
            <div className="custom-left-under flex">
              <p>
                Simple & easy way to find your dream Appointment.
              </p>
              <h3>
                Discover Your Perfect Appointment Effortlessly.
              </h3>

              <button className="custom-btn btn-1" onClick={() => navigate('/signup')} >Learn More</button>
            </div>
          </div>

          {/* right */}
          <div className="custom-right">
            <div className="custom-grid">
              <div className="custom-element">
                  <img className="custom-icon" src={search} alt='search'></img>
                  <p className="custom-item-text">
                    Search <br /> your Location
                  </p>
              </div>
              <div className="custom-element">
                  <img className="custom-icon" src={eye} alt='eye'></img>
                  <p className="custom-item-text">
                    Visit <br /> your Location
                  </p>
              </div>
              <div className="custom-element">
                    <img className="custom-icon" src={home} alt='home'></img>
                  <p className="custom-item-text">
                    Get your <br /> Dream House
                  </p>
              </div>
              <div className="custom-element">
                  <img className="custom-icon" src={happyface} alt='happyface'></img>
                  <p className="custom-item-text">
                    Enjoy your <br /> new Home
                  </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* wave */}
      <div class="custom-shape-divider-top-1707325734">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
          </svg>
      </div>
        

        {/* section-3 hero3*/}
        <section className="home-hero3 section-wrapper flex wrap">

        <div className="padding flex">
        <div className="home-hero3-under-1">
              <img src={allcoins} alt='search'></img>
              <div>
                <p className='home-hero3-under-1-price'>
                  ₹2.1L
                </p>
                <p className='home-hero3-under-1-p-top'>
                  Total
                </p>
                <p className='home-hero3-under-1-p-bottom'>Properties transactions</p>
              </div>
            </div>

          <div className="home-hero3-under-2">
            <img src={chart} alt='search'></img>
            <div>
              <p className='home-hero3-under-1-price'>
              520+
              </p>
              <p className='home-hero3-under-1-p-top'>
              Properties for Rent
              </p>
              <p className='home-hero3-under-1-p-bottom'>Successfully</p>
            </div>
          </div>
          
          <div className="home-hero3-under-3">
            <img src={coins} alt='search'></img>
            <div>
              <p className='home-hero3-under-1-price'>
                150
              </p>
              <p className='home-hero3-under-1-p-top'>
                Daily completed
              </p>
              <p className='home-hero3-under-1-p-bottom'>transactions</p>
            </div>
          </div>

          <div className="home-hero3-under-4">
            <img src={globe} alt='search'></img>
            <div>
              <p className='home-hero3-under-1-price'>
                300+
              </p>
              <p className='home-hero3-under-1-p-top'>
                Regular Clients
              </p>
              <p className='home-hero3-under-1-p-bottom'>Across Globe</p>
            </div>
          </div>
        </div>
        </section>

      {/* tilt */}
        {/* <div className="custom-shape-divider-bottom-1705730206">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div> */}


      <div class="custom-shape-divider-top-1707326481">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
          </svg>
      </div>


      {/* section-4 hero4*/}
      <section className="home-hero4 section-wrapper flex wrap">

        <div className="home-hero4-top">
          <h2>Featured Properties </h2>
          <p><Link to={'/properties'} >Explore All<span>→</span></Link></p>
        </div>

        <div className='home-hero4-cards'>
          <div className="my-properties">
                  {
                    loading ? (
                      <>
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div className='skeleton-loader' key={index}>
                            <div className='skeleton-loader-wrapper'>
                              <div className='skeleton-loader-circle'></div>
                              <div className='line-1'></div>
                              <div className='line-2'></div>
                              <div className='line-3'></div>
                              <div className='line-3a'></div>
                              <div className='line-4'></div>
                            </div>
                          </div>
                        ))}
              </>
                    ) : (
                      <>
                      {properties?.slice(0, 6).map((property, index) => {
                        return (
                          <Card
                          className="property-card"
                            key={index}
                            isSeller={false}
                            propertyId={property._id}
                            img={property.thumbnail}
                            bhk={property.bhk}
                            bath={property.bathrooms}
                            size={property.size}
                            price={property.price}
                            pricePer={property.pricePer}
                            city={property.city}
                            state={property.state}
                            type={property.propertyType}
                          />
                        );
                      })}
                      </>
                    )
                  }
                  
                </div>
        </div>

        
      </section>

      {/* tilt */}
      <div className="custom-shape-divider-bottom-1705730206">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>

        

      {/* section-5 hero5*/}
      <section className='home-hero5 section-wrapper wrap'>
        <h1>Why Rentify?</h1>

        <div className='home-hero5-content-wrapper'>
        <div className='home-hero5-content'>
          <div className='home-hero5-content-left'>
            <img src= {deal} alt='deal-icon' id='deal'/>
          </div>
          <div className='home-hero5-content-right'>
            <p className='home-hero5-content-right-p1'>We are totally broker free</p>
            <p className='home-hero5-content-right-p2'>We work directly with owners simplifying the process for you. This means that when you deal with us, you just deal with us.</p>
          </div>
        </div>

        <div className='home-hero5-content'>
          <div className='home-hero5-content-left'>
            <img src= {fairprice} alt='fairprice-icon' id='fairprice' />
          </div>
          <div className='home-hero5-content-right'>
            <p className='home-hero5-content-right-p1'>Fair pricing and standardized policies</p>
            <p className='home-hero5-content-right-p2'>Rentez rental prices are actual market prices. Our agreement terms are carefully drafted for customers and owners.</p>
          </div>
        </div>

        <div className='home-hero5-content'>
          <div className='home-hero5-content-left'>
            <img src= {flat} alt='flat-icon' id='flat' />
          </div>
          <div className='home-hero5-content-right'>
            <p className='home-hero5-content-right-p1'>What you see is what you get</p>
            <p className='home-hero5-content-right-p2'>All property data on Rentez are collected by our trained executives, ensuring high levels of accuracy and quality.</p>
          </div>
        </div>
        </div>

      </section>
      
      {/* tilt 2 */}

        <div className="custom-shape-divider-bottom-272727">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
          </svg>
        </div>

    </div>
  )
}

export default Home