import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { IoMdMenu } from "react-icons/io";
import partner from "../../assets/partner.svg";
import signout from "../../assets/signout.svg";
import faqs from "../../assets/faqs.svg";
import favourite from "../../assets/favourite.svg";
import profile from "../../assets/profile.svg";
import ListProperty from "../../pages/ListProperty";
import MyListing from "../../pages/MyListing";
import ConfirmationModal from "./ConfirmationModel";
import { logout } from "../../services/operations/authAPI";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  // console.log("sub links", subLinks)

  const [open, setOpen] = useState(false);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="navbar flex" ref={menuRef}>
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Logo" width={160} height={35} loading="lazy" />
          </Link>
        </div>

        <div className="nav-right flex">
          <nav className="nav">
            <ul className="nav-links flex">
              <Link to="/properties">
                <li>Properties</li>
              </Link>
              <li>About Us</li>
            </ul>
          </nav>
          <div className="nav-button flex">
            {token === null && (
              <Link to="/login">
                <button className="nav-login ">Log in</button>
              </Link>
            )}
            {token === null && (
              <Link to="/signup">
                <button className="nav-signup ">Sign up</button>
              </Link>
            )}
            {token !== null && (
              <Link to={"/"}>
                <button
                  className="profile-button flex "
                  onClick={() => {
                    setOpen(!open);
                  }}
                >
                  <div className="profilepic">
                    <img
                      src={user?.image}
                      alt={`profile-${user?.firstName}`}
                      className=""
                    />
                  </div>
                  <div className="menu-button">
                    <IoMdMenu />
                  </div>
                </button>
              </Link>
            )}
          </div>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          {user?.accountType === "Customer" && (
            <ul className="dropdown-links">
              <DropdownItem
                img={profile}
                text={"My Profile"}
                path={"/dashboard/my-profile"}
              />
              <DropdownItem
                img={favourite}
                text={"Favorites"}
                path={"/dashboard/Favorites"}
              />
              <DropdownItem img={faqs} text={"FAQs"} path={"/dashboard/FAQs"} />
              <DropdownItem
                img={partner}
                text={"Partner"}
                path={"/dashboard/Partner"}
              />
              <DropdownItem
                img={faqs}
                text={"Settings"}
                path={"/dashboard/Settings"}
              />

              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => {
                      dispatch(logout(navigate));
                      setConfirmationModal(null);
                    },

                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="Logout-button"
              >
                <div className="dropdownItem  ">
                  <img src={signout} alt="signout button" />
                  <a> Logout</a>
                </div>
              </button>
            </ul>
          )}

          {user?.accountType === "Seller" && (
            <ul className="dropdown-links">
              <DropdownItem
                img={profile}
                text={"My Profile"}
                path={"/dashboard/my-profile"}
              />

              <DropdownItem
                img={profile}
                text={"My Property"}
                path={"/dashboard/MyListing"}
              />

              <DropdownItem
                img={profile}
                text={"List Property"}
                path={"/dashboard/ListProperty"}
              />

              <DropdownItem
                img={faqs}
                text={"Settings"}
                path={"/dashboard/Settings"}
              />

              <button
                onClick={() =>
                  setConfirmationModal({
                    text1: "Are you sure?",
                    text2: "You will be logged out of your account.",
                    btn1Text: "Logout",
                    btn2Text: "Cancel",
                    btn1Handler: () => {
                      dispatch(logout(navigate));
                      setConfirmationModal(null);
                    },

                    btn2Handler: () => setConfirmationModal(null),
                  })
                }
                className="Logout-button"
              >
                <div className="dropdownItem  ">
                  <img src={signout} alt="signout button" />
                  <a> Logout</a>
                </div>
              </button>
            </ul>
          )}
        </div>
      </div>
      {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
    </>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img}></img>
      <Link to={props.path}>{props.text} </Link>
    </li>
  );
}

export default Navbar;

// my profile, setting , logout, create-listing, my-listing
