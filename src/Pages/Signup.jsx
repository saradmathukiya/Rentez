import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../services/operations/authAPI"
import { setSignupData } from "../slices/authSlice"
// import { ACCOUNT_TYPE } from "../utils/contsants"
import Tab from "../components/common/Tab"
// import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsFillPenFill } from "react-icons/bs";
import { FaPenFancy } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import logo from '../assests/logo/Logo-svg-rbg.svg'

function Signup() {

  const ACCOUNT_TYPE = {
    CUSTOMER: "Customer",
    SELLER: "Seller",
    ADMIN: "Admin",
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //spinner
  const {loading} = useSelector((state) => state.auth)

  // Customer or Seller
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.CUSTOMER)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Passwords Does Not Match")
      return
    }
    const signupData = {
      ...formData,
      accountType,
    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setAccountType(ACCOUNT_TYPE.CUSTOMER)
  }

  // data to pass to Tab component
  const tabData = [
    {
      id: 1,
      tabName: "Customer",
      type: ACCOUNT_TYPE.CUSTOMER,
    },
    {
      id: 2,
      tabName: "Seller",
      type: ACCOUNT_TYPE.SELLER,
    },
  ]

  

  return (
    <div className="login-wrapper flex wrap">

      {
        loading? (
          <div className="loader">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>
        ) 
        : 
        (
        <div className="signup-page flex wrap flex-col">

          <div className="signup-logo">
            <img src={logo} alt="logo"/>
            <div className="tab">
              <Tab tabData={tabData} field={accountType} setField={setAccountType} />
            </div>
          </div>
      
      
      {/* Form */}
        <form onSubmit={handleOnSubmit} className='login-form'>

          <div className="signup-top">
            <div className="input flex">
            <BsFillPenFill style={{width:'14px', height:'14px'}} className='user-icon'/>
              <input
                required
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleOnChange}
              />
                <label for="">First Name <sup style={{color:'red'}}>*</sup></label>
            </div>

            <div className="input flex">
            <FaPenFancy style={{width:'14px', height:'14px'}} className='user-icon'/>
              <input
                required
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleOnChange}
              />
                <label for="">Last Name <sup style={{color:'red'}}>*</sup></label>
            </div>
          </div>

          <div className="input flex">
              <IoMail fontSize={17} className='user-icon'/>
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleOnChange}
                />
                <label for="">Email Address<sup style={{color:'red',marginLeft:'5px'}}> *</sup></label>
          </div>

          <div className="input flex">
            <FaLock style={{width:'14px', height:'14px'}} className='lock-icon'/>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
              />
              <label for="">Password<sup style={{color:'red'}}> *</sup></label>

              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className='eye-btn'
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={22} fill="#000000" />
                  ) : (
                    <AiOutlineEye fontSize={22} fill="#000000" />
                  )}
              </span>
          </div>

          <div className="input flex">
            <FaLock style={{width:'14px', height:'14px'}} className='lock-icon'/>
              <input
                required
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleOnChange}
              />
              <label for="">Confirm Password<sup style={{color:'red'}}> *</sup></label>
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className='eye-btn'
              >
                {showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={22} fill="#000000" 
                />
                  ) : (
                    <AiOutlineEye fontSize={22} fill="#000000" />
                )}
              </span>     
          </div>

          <div className="signup-bottom">
            <div className="tandc">
              <input required type="checkbox"/>
              <label>I agree to <span id="tandc">Privacy Policy</span><sup style={{color: 'red'}}>*</sup> and 
              <span id="tandc"> Terms & Conditions</span><sup style={{color: 'red'}}>*</sup>
              </label>
            </div>
            
            {/* <div className="tandc">
              <input required type="checkbox"/><label>I agree to all <span id="tandc">Terms & Conditions</span><sup style={{color: 'red'}}>*</sup></label>
            </div> */}
          </div>

          <div className="signin-btn flex"
           style={{ 
           alignItems:'center',
           justifyContent:'center'}}>
            <button
              type="submit"
              className="custom-btn btn-1"
            >
              Create Account
            </button>
          </div>
          
          <div style={{marginTop: '13px'}} className="link flex wrap">
            Already got an account? <a href="/login">Login</a>
          </div>

        </form>
      </div>
        )
      }
      
      
    </div>
  )
}

export default Signup