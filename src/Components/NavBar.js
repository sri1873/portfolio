import React from "react";
import 'O:/Portfolio/portfolio/src/assets/styles/navbar.css';
const NavBar = () => {
    return (
        <nav className="nav">
            <div className="logo">
            </div>
            <ul className="nav-links">
                <li><a href="#about">Experience</a></li>
                <li><a href="#home">Projects</a></li>
                <li><a href="#home">Contact</a></li>

            </ul>
        </nav>
    );
}

export default NavBar;