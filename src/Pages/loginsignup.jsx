import React from 'react'
import "./loginsignup.css"
import { useNavigate } from 'react-router-dom'

export const Loginsignup = () => {
  const navigate = useNavigate();

  return (
    <div className='login-signup'>
      <div className="container">
        <h1>Sign Up</h1>
        <div className="textfields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn">Continue</button>
        <p className="login">Already have an account? <span onClick={navigate("/Login")}>Login Here</span></p>
        <div className="agree">
          <input type="checkbox" name="" id="" />
          <p>By Continuing I agree the use of terms and privacy policy </p>
        </div>
      </div>
    </div>
  )
}
