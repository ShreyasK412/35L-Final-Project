import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";

const path = window.location.pathname; 
function Navbar () {
    
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    } 
    return (<header>
        <h3> <img src='BBB.png' border="" height="100" width="100"
    onload="resizeImg(this, 200, 100);"  /> </h3>
        <nav ref={navRef}>
            {/* <ul> <CustomLink href = "home"> Home </CustomLink> 
            <CustomLink href = "posts"> Posts </CustomLink> 
            </ul>
           */}
            <a href = "home"> Home </a>
            <a href = "posts"> Posts </a>
            <a href = "news"> News </a>
            <a href = "scores"> Scores </a>  
            {/* <a href = "basketball"> Basketball </a>
            <a href = "soccer"> Soccer </a>
            <a href = "football"> Football </a> */}
            <a href = "about"> About </a>  
         
            <button className = "nav-btn nav-close-btn" onClick = {showNavbar}>
                <FaTimes></FaTimes>
            </button>
        </nav>
            <button className = "nav-btn" onClick = {showNavbar}>
                <FaBars> </FaBars>
            </button>
    </header>);
}
function CustomLink({href,children, ...props}) {
    return (
        <li className={path === href ? "active" : ""}>
            <a href = {href} {...props}>
                {children}
 
            </a>
            
        </li>
    )
}
export default Navbar;