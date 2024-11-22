import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavbarCSS.css";
import ProfileBar from "./ProfileBar.js";
import React from 'react';
import ProfileButton from "./ProfileButton.js"



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const menuRef = useRef();
    const menuBtnRef = useRef();

    
    const toggleNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target) && !menuBtnRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <header>
                <button
                    className="nav-btn"
                    ref={menuBtnRef}
                    onClick={toggleNavbar}
                >
                    <FaBars />
                </button>
                <input type="text" placeholder="Search task" />
                <h3 id="profileBtn">Logo</h3>
                <nav ref={menuRef} className={isMenuOpen ? "responsive_nav" : "hide"}>
                    <a href="/#">Main</a>
                    <a href="/#">My work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
                    <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
                        <FaTimes />
                    </button>
                </nav>
            </header>
            <React.Fragment>
                <ProfileBar />
            </React.Fragment>
        </div>
    );
}

export default Navbar;