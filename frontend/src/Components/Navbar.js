import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

function Navbar () {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    return (<header>
        <h3> <img src='BBB.png' border="" height="100" width="100"
    onload="resizeImg(this, 200, 100);"  /> </h3>
        <nav ref={navRef}>
            <a href = "/#"> Home </a>
            <a href = "/#">Posts</a>
            <a href = "/#"> News </a>
            <a href = "/#"> Scores </a>
            <a href = "/#"> About </a>
            <button className = "nav-btn nav-close-btn" onClick = {showNavbar}>
                <FaTimes></FaTimes>
            </button>
        </nav>
            <button className = "nav-btn" onClick = {showNavbar}>
                <FaBars> </FaBars>
            </button>
    </header>);
}

export default Navbar;