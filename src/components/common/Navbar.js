import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, matchPath, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);

  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  // console.log("sub links", subLinks)

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  return (
    <div className="navbar flex">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="Logo" width={160} height={35} loading="lazy" />
        </Link>
      </div>

      <div className="nav-right flex">
        <nav className="nav">
          <ul className="nav-links flex">
            <li>Home</li>
            <li>About Us</li>
          </ul>
        </nav>
        <div className="nav-button flex">
          {token === null && (
            <Link to="/login">
              <button className="nav-login primary-button">Log in</button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="nav-signup primary-button">Sign up</button>
            </Link>
          )}
          {/* {token !== null && <ProfileDropdown />} */}
        </div>
        {/* <button className="mr-4 md:hidden">
          <AiOutlineMenu fontSize={24} fill="#AFB2BF" />
        </button> */}
      </div>
    </div>
  );
}

export default Navbar;
