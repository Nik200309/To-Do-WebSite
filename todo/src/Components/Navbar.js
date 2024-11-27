import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/NavbarCSS.css";
import ProfileBar from "./ProfileBar.js";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const menuRef = useRef();
    const menuBtnRef = useRef();

    const toggleNavbar = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleProfileBar = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    const closeProfileBar = () => {
        setIsProfileMenuOpen(false); // Close the profile menu
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target) &&
                !menuBtnRef.current.contains(e.target)
            ) {
                setIsMenuOpen(false);
            }

            // Close the profile menu if clicked outside
            if (
                isProfileMenuOpen &&
                e.target.id !== "profileBtn" && // Ignore clicks on the profile button
                !document.getElementById("profile")?.contains(e.target)
            ) {
                closeProfileBar();
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [isProfileMenuOpen]);

    return (
        <div>
            <header>
                <button className="nav-btn" ref={menuBtnRef} onClick={toggleNavbar}>
                    <FaBars />
                </button>
                <input type="text" placeholder="Search task" />
                <h3 id="profileBtn" onClick={toggleProfileBar}>
                    Logo
                </h3>
                <nav
                    ref={menuRef}
                    className={isMenuOpen ? "responsive_nav" : "hide"}
                >
                    <a href="/#">Main</a>
                    <a href="/#">My work</a>
                    <a href="/#">Blog</a>
                    <a href="/#">About me</a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={toggleNavbar}
                    >
                        <FaTimes />
                    </button>
                </nav>
            </header>

            {/* Pass closeProfileBar to ProfileBar */}
            <ProfileBar
                isProfileMenuOpen={isProfileMenuOpen}
                closeProfileBar={closeProfileBar}
            />
        </div>
    );
}

export default Navbar;


