import React from "react";
import {useState, useRef, useEffect} from "react";
import "../Styles/profile-menu.css";



function ProfileBar({ isProfileMenuOpen, closeProfileBar }) {
    const menuProfileRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if(
                isProfileMenuOpen &&
                menuProfileRef.current &&
                !menuProfileRef.current.contains(e.target)
            ){
                console.log ("Click detected outside ProfileBar")
                closeProfileBar();
            }
        };
    
        document.addEventListener("mousedown", handleClickOutside);
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeProfileBar]);

    return (
        <div className="profile">
            <nav
                className={isProfileMenuOpen ? "responsive_profilenav" : "hide"}
                ref={menuProfileRef} // Previous mistake: I used to have an id of "profile" for this atribute which overlap the class logic here (id is heghiger in priority )// 
            >
                <p>Profile Menu Content</p>
            </nav>
        </div>
    );
}

export default ProfileBar;