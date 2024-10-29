import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link, useLocation, useNavigate } from "react-router-dom"

import { resetPassword } from "../services/operations/authAPI"
import { FaLock } from "react-icons/fa"

function UpdatePassword() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()
  const { loading } = useSelector((state) => state.auth)
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { password, confirmPassword } = formData

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const token = location.pathname.split("/").at(-1)
    dispatch(resetPassword(password, confirmPassword, token, navigate))
  }

  return (
    <div className="change-pass-container">
      {loading ? (
        <div className="loader">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
          <div className="shadow"></div>
        </div>
      ) : (
        <div className="change-pass-page">
          <h1>
            Choose new password
          </h1>
          <p>
            Enter your new password and youre all set.
          </p>
          <form onSubmit={handleOnSubmit}>

            <div className="input flex">
            <FaLock style={{width:'14px', height:'14px'}} className='lock-icon'/>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="password"
                value={password}
                onChange={handleOnChange}
              />
              <label for="">New Password<sup style={{color:'red'}}> *</sup></label>

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
              <label for="">Confirm New Password<sup style={{color:'red'}}> *</sup></label>
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

            <button
              type="submit"
            >
              Reset Password
            </button>
          </form>
          <div  className="link-back">
            <Link to="/login">
              <p>
                <BiArrowBack /> Back To Login
              </p>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default UpdatePassword