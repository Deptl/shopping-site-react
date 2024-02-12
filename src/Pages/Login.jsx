import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export const Login = () => {
    const navigate = useNavigate();

    return (
        <div className='login-signup'>
            <div className="container">
                <h1>Login</h1>
                <div className="textfields">
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="btn">Login</button>
                <p className="login">First time here? <span>Signup Here</span></p>
            </div>
        </div> 
    )
}
