import React from 'react'
import './CSS/LoginSignup.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='Your Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Login</button>
                <p className="loginsignup-login">didn't have an account? <span onClick={() => navigate('/signup')}>sign up</span></p>
                {/* <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing ,i agree to the terms of use & privacy policy</p>
                </div> */}
            </div>
        </div>
    )
}

export default Login