import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OpenRoute from "./components/Auth/OpenRoute";
import SignupForm from "./pages/SignupForm";
import LoginForm from "./pages/LoginForm";
import VerifyEmail from "./pages/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import UpdatePassword from "./pages/UpdatePassword";
import Navbar from "./components/common/Navbar";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Settings from "./pages/Settings";
import MyProfile from "./pages/MyProfile";
import FAQs from "./pages/FAQs";
import Favorites from "./pages/Favorites";
import Partner from "./pages/Partner";
import ListProperty from "./pages/ListProperty";
import MyListing from "./pages/MyListing";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/properties" element={<Properties />} />
        <Route path="/property/:propertyId" element={<PropertyDetail />} />

        <Route
          path="signup"
          element={
            <OpenRoute>
              <SignupForm />
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
          path="login"
          element={
            <OpenRoute>
              <LoginForm />
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
        {/* 
        <Route
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        > */}
        <Route
          path="/dashboard/my-profile"
          element={
            <PrivateRoute>
              <MyProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/Favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/Partner"
          element={
            <PrivateRoute>
              <Partner />
            </PrivateRoute>
          }
        />

        <Route
          path="dashboard/FAQs"
          element={
            <PrivateRoute>
              <FAQs />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/MyListing"
          element={
            <PrivateRoute>
              <MyListing />
            </PrivateRoute>
          }
        />

        <Route
          path="/dashboard/ListProperty"
          element={
            <PrivateRoute>
              <ListProperty />
            </PrivateRoute>
          }
        />

        {/* {user?.accountType === ACCOUNT_TYPE.STUDENT && (
            <>
              <Route path="dashboard/cart" element={<Cart />} />
              <Route
                path="dashboard/enrolled-courses"
                element={<EnrolledCourses />}
              />
            </>
          )} */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
