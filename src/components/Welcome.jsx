import React from "react"
import Navbar from "./Navbar";
import welcomeImage from "../assets/acceuil.png"

export default function Welcome() {
    return (
        
        <nav>
            <Navbar />
            <div className="welcome">Welcome to internUp</div>
            <div class="image-container">
            <img src={welcomeImage}  class="img--wel" />
            </div>
        </nav>
    )
}