import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, matchPath, useLocation } from 'react-router-dom'
import logo from '../../assests/logo/Logo-svg-rbg.svg'
import { useSelector, useDispatch } from 'react-redux'
import { TbLogout } from "react-icons/tb";
import { logout } from "../../services/operations/authAPI"
import ConfirmationModal from '../common/ConfirmationModal'
import { IoMdClose } from "react-icons/io";

import SidebarLink from '../core/Dashboard/SidebarLink'
import { sidebarLinks } from "../../data/dashboard-links"

const Navbar = ({ whiteBackground }) => {

  const { token } = useSelector((state) => state.auth)
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation()
  const [confirmationModal, setConfirmationModal] = useState(null)

  const [scrollLocked, setScrollLocked] = useState(false); 

  const hamburgerRef = useRef(null);

  //no logout button in dashboard
  const dashboardRoutes = ['/dashboard/my-profile', '/dashboard/settings','/dashboard/my-listing','/dashboard/create-listing'];
  const isDashboardPage = dashboardRoutes.some(route => location.pathname.includes(route));

  const [showNavLinks, setShowNavLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const animationDelay = user && user.accountType === 'Customer' ? '0.55s' : '0.7s';
  
  //css active on nav routes
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname)
  }

  const NavbarLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Properties",
      path: '/properties',
    },
    {
      title: "Plans",
      path: '/plans',
    },
    {
      title: "About Us",
      path: "/about",
    },
  ];

  // white navbar on scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // scroll handling logic here
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  useEffect(() => {
    const closeMenuOnLinkClick = () => {
      setIsMenuOpen(false); // Close the dashboard menu
    };
  
    // Listen for changes in the location (i.e. link clicks)
    const unlisten = () => {
      closeMenuOnLinkClick();
    };
  
    // Return a function to stop listening for location changes
    return unlisten;
  }, [location]); // Run this effect whenever location changes

  const closeHamburgerMenu = () => {
    setShowNavLinks(false);
    setScrollLocked(false);
  };

  const handleNavLinkClick = (path) => {
    closeHamburgerMenu(); // Close hamburger menu before navigating
    navigate(path); // Navigate to the desired page
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        // Check if click occurred outside of hamburger menu and outside of dashboard menu
        (
          hamburgerRef.current &&
          !hamburgerRef.current.contains(event.target) &&
          !event.target.closest('.mobile-nav-middle')
        )
        &&
        (
          // Check if click occurred outside of dashboard menu
          !event.target.closest('.dashboard-menu')
        )
      ) {
        setShowNavLinks(false);
        setScrollLocked(false);
        setIsMenuOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Lock or unlock scroll based on showNavLinks state
    if (showNavLinks || isMenuOpen) {
      document.body.style.overflow = 'hidden'; // Lock scroll
      setScrollLocked(true);
    } else {
      document.body.style.overflow = ''; // Unlock scroll
      setScrollLocked(false);
    }
  }, [showNavLinks, isMenuOpen]);




  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the dashboard menu
    } else {
      if (window.innerWidth <= 1000) {
        setIsMenuOpen(true); // Open the dashboard menu
      } else {
        // Redirect to 'dashboard/my-profile' if screen size > 1000px
        window.location.href = '/dashboard/my-profile';
      }
    }
  };

  const closeDashboardMenu = () => {
    setIsMenuOpen(false);
  };


  return (
    <nav className={`navbar ${whiteBackground ? 'white-background' : 'blue-background'}`}>

      <button 
      className={`hamburger-menu ${showNavLinks ? 'active' : ''}`} 
      ref={hamburgerRef} 
      onClick={() => {
        setShowNavLinks(!showNavLinks); // Toggle mobile menu
        if (isMenuOpen) {
          setIsMenuOpen(false); // Close dashboard menu if open
        }
      }}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


    <div className="navbar-div">
      {/*nav-left */}
      <div className="nav-left">
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
        </div>

      {/*nav-middle */}

        <div className={showNavLinks ? 'mobile-nav-middle' : 'nav-middle flex'}>
          <ul>
            {NavbarLinks.map((link, index) => (
              <li key={index} onClick={() => handleNavLinkClick(link.path)}>
                <span
                  className={`${matchRoute(link.path) ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick(link.path)}
                >
                  {link.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

    {/* nav-right */}
    <div className="nav-right">
      {token === null && (
        <div className="nav-right1">
          <button onClick={() => navigate('/login')}>
            Log In
          </button>
        </div>
      )}
      {token === null && (
        <div className="nav-right2">
          <button onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      )}
      
      {/* nav-right after login */}

      {/* nav-right after login for dashboard */}
      <div className='nav-right-login'>
      {token !== null && (
        <div className="profile-button-wrapper">
          <button className="f-name" onClick={toggleMenu}>
            {user.firstName && <p>{user.firstName}</p>}
            {user.image && (
              <div className="profilepic">
                <img
                  src={user.image}
                  alt={`profile-${user.firstName}`}
                  className=""
                />
              </div>
            )}
          </button>
          {isMenuOpen && (
            <div className="dashboard-menu sidebar-top-under">
              <Link className="close-dashboard-menu" onClick={closeDashboardMenu}>
                <IoMdClose  />
              </Link>

              {sidebarLinks.map((link) => {
                if (link.type && user?.accountType !== link.type) return null
                return (
                <SidebarLink 
                  key={link.id} 
                  link={link} 
                  iconName={link.icon} 
                  onClick={() => handleNavLinkClick(link.path)}
                  className="dashboard-menu-link"
                />
                )
              })}

              <div className="partition-mob"/>

              <div className="sidebar-bottom" style={{ animationDelay }}>
                  <button
                      onClick={() =>
                      setConfirmationModal({
                          text1: "Are you sure?",
                          text2: "You will be logged out of your account.",
                          btn1Text: "Logout",
                          btn2Text: "Cancel",
                          btn1Handler: () => {dispatch(logout(navigate));
                                              setConfirmationModal(null)},
                          btn2Handler: () => setConfirmationModal(null),
                      })
                      }
                  >
                      <div className="logout-sidebar">
                          <TbLogout className="logout-icon-sidebar" />
                          <span>Logout</span>
                      </div>
                  </button>
              </div>
            </div>
          )}
        </div>
          )}
      </div>
      {/*  */}

        {token !==null && !isDashboardPage && (
          <div className="nav-right3">
            <button className='nav-right4' onClick={() => 
            setConfirmationModal({
              text1: "Are you sure?",
              text2: "You will be logged out of your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: () => {dispatch(logout(navigate));
                                  setConfirmationModal(null)},
              btn2Handler: () => setConfirmationModal(null),
          })}>
              <TbLogout className='logout-icon'/>Log out
            </button>
          </div>
        )}
    </div>
    </div>


    {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}

    </nav>

  )
}

export default Navbar