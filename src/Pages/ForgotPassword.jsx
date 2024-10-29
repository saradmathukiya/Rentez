import { useState } from "react"
import { BiArrowBack } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getPasswordResetToken } from "../services/operations/authAPI"
import { IoMail } from "react-icons/io5"

function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [emailSent, setEmailSent] = useState(false)
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.auth)

  const handleOnSubmit = (e) => {
    e.preventDefault()
    dispatch(getPasswordResetToken(email, setEmailSent))
  }

  return (
    <div className="forgot-pass-container">
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
        <div className="forgot-pass-page">
          <h1>
            {!emailSent ? "Reset your password" : "Check email"}
          </h1>
          <p>
            {!emailSent
              ? "An Email will be sent to you for password reset."
              : `We have sent the reset email to ${email}`}
          </p>
          <form onSubmit={handleOnSubmit} className="reset-pass-form">
            {!emailSent && (
              <div className="input flex" style={{marginTop:'30px'}}>
              <IoMail fontSize={18} className='user-icon' />
                <input
                  required
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label for="">Email Address<sup style={{color:'red'}}> *</sup></label>
              </div>
            )}
            <button
              type="submit"
            >
              {!emailSent ? "Sumbit" : "Resend Email"}
            </button>
          </form>
          <div className="link-back">
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
// onChange={(e) => setEmail(e.target.value)}
export default ForgotPassword