import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {login} from '../services/operations/authAPI'


function Login () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email:"",
        password:"",
    })

    const [showPassword, setShowPassword] = useState(false)
    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
          ...prevData,
          [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
    }

    const {loading} = useSelector((state) => state.auth)

  return (
      <div className='login-wrapper flex wrap'>

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
          ) : (

          <div className='login-page flex wrap flex-col'>
            
            {/* <img style={{height:'100px', width:'200px'}}  src={logo} /> */}

            {/* <h2 style={{fontWeight:'600'}}>Welcome back!</h2> */}
          <h1>Login</h1>
          <form onSubmit={handleOnSubmit} className='login-form'>
          
            <div className="input flex" style={{marginTop:'30px'}}>
            <IoMail fontSize={18} className='user-icon' />
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleOnChange}
              />
              <label for="">Email Address<sup style={{color:'red'}}> *</sup></label>
            </div>

            <div className="input flex password">
              <FaLock className='lock-icon'/>
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

            <div className="login-bottom flex flex-col">

              <div className='forgot-password-div'>
                <Link to = '/forgot-password'style={{textDecoration:'none',color:'#0072E5'}} >
                  Forgot Password?
                </Link>  
              </div>

              <div className='signin-btn flex flex-col'>
                <button
                  type="submit"
                  className='custom-btn btn-1'
                >
                  Login In
                </button>
              </div>

              {/* <div className="partition1"/> */}

              <div className="link flex wrap">
                Don't have an account? <a href="/signup">Sign up!</a>
              </div>
            </div>
            
          </form>
        </div>
          )
        }


        
      </div>
  )
}

export default Login