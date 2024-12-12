import {useState, useRef, useEffect} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/NavbarCSS.css";
import ProfileBar from "./ProfileBar.js";
import SidebarLeft from "./SidebarLeft";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const sidebarRef = useRef();
  const menuBtnRef = useRef();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfileBar = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileBar = () => {
    setIsProfileMenuOpen(false); // Close the profile menu
  };
  const exceptionButtons = ["nav-close-btn", "profileBtn"];
  const exceptionElements = document.getElementsByClassName("profileBtn");
  const exceptionElements2 = document.getElementsByClassName("nav-btn");
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        !menuBtnRef.current.contains(e.target) &&
        !Array.from(exceptionElements).some((el) => el.contains(e.target))&&
        !Array.from(exceptionElements2).some((el) => el.contains(e.target))
      ) {
        setIsSidebarOpen(false);
      }

      // Close the profile menu if clicked outside
      if (
        isProfileMenuOpen &&
        e.target.className !== "profileBtn" &&
        e.target.className !== "nav-btn" &&
        e.target.className !== "nav-close-btn" &&
        // Ignore clicks on the profile button
        !document.getElementsByClassName("profile")?.contains(e.target)
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
    <header>
      <button className="nav-btn" ref={menuBtnRef} onClick={toggleSidebar}>
        <FaBars/>
      </button>
      <input type="text" placeholder="Search task"/>
      <button className="profileBtn" onClick={toggleProfileBar}>
        Logo
      </button>
      <SidebarLeft isMenuOpen={isSidebarOpen} toggleNavbar={toggleSidebar} menuRef={sidebarRef}/>
      <ProfileBar
        isProfileMenuOpen={isProfileMenuOpen}
        closeProfileBar={closeProfileBar}
      />
    </header>
  );
}

export default Navbar;