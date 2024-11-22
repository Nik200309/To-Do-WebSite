import React from "react";
import {useState, useRef, useEffect} from "react";
import "../Styles/profile-menu.css";

function ProfileBar (){
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const menuRef = useRef();
    const menuBtnRef = useRef();

    const profileBtn = document.getElementById("profileBtn")

    const toggleProfileBar = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    }

     
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current && 
                menuBtnRef.current && 
                !menuRef.current.contains(e.target) && 
                !menuBtnRef.current.contains(e.target)
            ) {
                setIsProfileMenuOpen(false); // Закрываем меню, если клик вне его
            }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return(
    <div>
        <div className={isProfileMenuOpen ? "responsive_nav" : "hide" } id="profile" ref={menuRef}>
            <p>Some Text</p>
        </div> 
    </div>
 )   
}


export default ProfileBar;