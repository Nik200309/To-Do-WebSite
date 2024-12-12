import { FaTimes } from "react-icons/fa";
import "../Styles/NavbarCSS.css";

function SidebarLeft ({isMenuOpen, toggleNavbar, menuRef}) {
    return(
    <nav ref={menuRef} className={isMenuOpen ? "responsive_nav" : "hide"}>
        <a href="/#">Main</a>
        <a href="/#">My work</a>
        <a href="/#">Blog</a>
        <a href="/#">About me</a>
        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes/>
        </button>
    </nav>
    );
}

export default SidebarLeft;
