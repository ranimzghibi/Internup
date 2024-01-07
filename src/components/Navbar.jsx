import React from "react"
import logo from "../assets/logo.png"
import "./SigninSignup.jsx";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>
            <img src={logo}  className="logo"/>
            <div class="signup-container">
            <Link to="/signin-signup" onClick={() => isSignUp(false)}>
            <a class="sign-in-link">SignIn</a>
            </Link>
            <div className="signup-button">
            <Link to="/signin-signup" onClick={() => isSignUp(true)}>
            <button>Sign Up</button>
            </Link>
            
            </div>
            </div>   
        </nav>
    )
}