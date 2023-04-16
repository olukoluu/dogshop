import React from "react";

function Navbar(){

    return(
    <nav>
        <div className="logo">
            <a href="http://localhost:3000">
                <img src="./photos/logo.png" className="logo--icon" alt="logo" />
                <h2>Pet Store</h2>
            </a>
        </div>
        
        <div className="nav--link">
            <a href="http://localhost:3000">
                Home
            </a>
            <a href="http://localhost:3000">
                Explore
            </a>
            <a href="http://localhost:3000">
                Products
            </a>
            <a href="http://localhost:3000">
                About Us
            </a>
        </div>
    </nav>

    )
}

export default Navbar;