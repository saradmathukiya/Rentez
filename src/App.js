import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import './Appresponsive.css'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import OpenRoute from "./components/core/Auth/OpenRoute";
import PrivateRoute from "./components/core/Auth/PrivateRoute";
import VerifyEmail from './Pages/VerifyEmail';
import ForgotPassword from './Pages/ForgotPassword';
import UpdatePassword from './Pages/UpdatePassword';
import Navbar from './components/common/Navbar';
import Dashboard from './Pages/Dashboard';
import Error from './Pages/Error'
import MyProfile from "./components/core/Dashboard/MyProfile";
import Settings from './components/core/Dashboard/Settings';
import { ACCOUNT_TYPE } from "./utils/contsants";
import { useSelector } from 'react-redux';
import ListProperty from './components/core/Dashboard/ListProperty';
import MyListing from './components/core/Dashboard/MyListing';
import Properties from './Pages/Properties';
import PropertyDetails from './Pages/PropertyDetails';
import Plans from './Pages/Plans'
import AboutUs from './Pages/About'
import Footer from './components/common/Footer';
// import ToTop from './components/common/ToTop';


function App() {

  const { user } = useSelector((state) => state.profile)

  const location = useLocation();
  const hideNavbarPaths = ['/login', '/signup', '/verify-email', '/forgot-password', '/update-password'];
  const HideNavbar = hideNavbarPaths.some(path => location.pathname.startsWith(path));

  const whiteNavbarPaths = [
    '/dashboard/my-profile',
    '/dashboard/settings',
    '/dashboard/create-listing',
    '/dashboard/my-listing',
    '/property',
  ];

  const isWhiteNavbar = whiteNavbarPaths.some((path) => location.pathname.startsWith(path));

  const hideFooterPaths = [
    '/dashboard/my-profile',
    '/dashboard/settings',
    '/dashboard/create-listing',
    '/dashboard/my-listing',
    '/login',
    '/signup',
  ];
  
  const shouldHideFooter = hideFooterPaths.some(path => location.pathname.startsWith(path));


  return (
    <div>
      {/* { !HideNavbar && <Navbar /> } */}
      {!HideNavbar && (isWhiteNavbar ? <Navbar whiteBackground /> : <Navbar />)}
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path="property/:propertyId" element={ <PropertyDetails/> } />
        <Route path="properties" element={ <Properties/> } />
        <Route 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />} />
      
          <Route path="dashboard/Settings" element={<Settings />} /> 

      {
        user?.accountType === ACCOUNT_TYPE.SELLER && (
          <>
          <Route path="dashboard/create-listing" element={<ListProperty />} />
          <Route path="dashboard/my-listing" element={<MyListing/>} />
          </>
        )
      }
    </Route>


        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        /> 
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        /> 
         <Route
          path="plans"
          element={
              <Plans/>
          }
        />
        <Route
          path="about"
          element={
              <AboutUs/>
          }
        />

          <Route path="*" element={<Error />} />
        </Routes>

        {/* footer */}
        {!shouldHideFooter && <Footer />}
    </div>
    
  );
}
// eslint-disable-next-line 
export default App;
