import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import { useNavigate } from "react-router-dom";

function VerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access of this route when user has filled the signup form
    if (!signupData) {
      navigate("/signup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      accountType,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = signupData;

    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate
      )
    );
  };

  return (
    <div  className="otp-wrapper">
      {loading ? (
        <div>
          <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
        </div>
      ) : (
        <div>
          <form onSubmit={handleVerifyAndSignup} className="otp-Form">
          <h1 className="main-heading">
            Verify Email
          </h1>
          <p className="otp-subheading">
          A verification code has been sent to
           <p style={{fontWeight:'700', marginTop:'3px'}}> {signupData.email} </p>
          </p>
          
          
          
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  style={{boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",}}
                  className="otp-input"
                  />
              )}
              containerStyle={{
                // display:"flex",
                justifyContent: "space-between",
                gap: "0 6px",
                // width: '100%'
              }}
            />
            

            <button className="verifyButton"
              type="submit"
            >
              Verify OTP
            </button>
          
          
          <div className="link-signup">
            <Link to="/signup">
              <p>
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button className="resendBtn"
              onClick={() => dispatch(sendOtp(signupData.email, navigate))}
            >
              <RxCountdownTimer />
              Resend Code
            </button>
          </div>

          </form>
        </div>
      )}
    </div>
  );
}

export default VerifyEmail;