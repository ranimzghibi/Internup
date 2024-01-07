import React, { useState } from "react";
import "./signin.css";
import logo from "../assets/logo2.png";
import email from "../assets/email-outline.png";
import Vector from "../assets/Vector.png";
import { Link } from "react-router-dom";

export default function SigninSignup() {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmpasswordInput, setConfirmpasswordInput] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignInSignUp = () => {


    
    if (isSignUp) {

     
      console.log("Signing up with email:", emailInput);
      console.log("Password:", passwordInput);
      console.log("Company Name:", confirmpasswordInput);
    } else {
      
      
      console.log("Signing in with email:", emailInput);
      console.log("Password:", passwordInput);
    }
  };

  return (
    <div className="boite">
      <div className="logoo">
        <img src={logo} alt="Logo" className="up" />
      </div>
      <div className="title">{isSignUp ? "Sign Up" : "Sign In"}</div>
      <div className="boite2">
      <div className="inputs">
        <div className="input">
          <input
            type="email"
            placeholder="Enter your email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="inp"
            style={{
              backgroundImage: `url(${email})`,
              backgroundSize: "30px",
              backgroundRepeat: "no-repeat",
              paddingLeft: "50px",
            }}
          />
          
        </div>
        <div className="input">
          <input
            type="password"
            className="inp"
            placeholder="Password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
            style={{
              backgroundImage: `url(${Vector})`,
              backgroundSize: "20px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center left",
              paddingLeft: "50px",
            }}
          />
        </div>
        {isSignUp && (
          <div className="input">
            <input
              type="text"
              className="inp"
              placeholder="Confirm password"
              value={confirmpasswordInput}
              onChange={(e) => setConfirmpasswordInput(e.target.value)}
              style={{
                backgroundImage: `url(${Vector})`,
                backgroundSize: "20px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center left",
                paddingLeft: "50px",
              }}
            />
          </div>
        )}
      </div>
      <Link to="/Account">
        <button className="submit"
        onClick={handleSignInSignUp}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        </Link>
      
      <div className="forget-password">
        {isSignUp ? "Already have an account?" : "Forgot password?"}
      </div>
      </div>
      <div className="not-user" onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Sign In" : "Not a user? Sign Up"}
      </div>
    </div>
  );
}
