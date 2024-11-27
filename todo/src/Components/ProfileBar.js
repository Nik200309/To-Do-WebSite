import React from "react";
import {useState, useRef, useEffect} from "react";
import "../Styles/profile-menu.css";



function ProfileBar({ isProfileMenuOpen, closeProfileBar }) {
    const menuProfileRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuProfileRef.current && !menuProfileRef.current.contains(e.target)) {
                console.log("Click detected outside ProfileBar");
                closeProfileBar(); 
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeProfileBar]);

    return (
        <div>
            <div
                className={isProfileMenuOpen ? "responsive_nav" : "hide"}
                id="profile"
                ref={menuProfileRef}
            >
                <p>Profile Menu Content</p>
            </div>
        </div>
    );
}

export default ProfileBar;