import { useRef } from "react";
import {FaBars, FaTimes} from "react-icons/fa";

import '../Pages/Scores/scores.css'
import "../Styles/main.css";

const path = window.location.pathname; 
function ScoreNavbar () {
    
    const navRef = useRef();

    const showScoreNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    } 
    return (<header style={{ display: "flex", justifyContent: "center" }}>
        <h3> <src border="" height="100" width="100"
    onload="resizeImg(this, 200, 100);"  /> </h3>
        <nav ref={navRef} style={{ marginLeft: '175px' }}>
        
            <a href = "basketball"> Basketball </a>
            <a href = "soccer"> Soccer </a>
            <a href = "football"> Football </a>
        
         
            <button className = "nav-btn nav-close-btn" onClick = {showScoreNavbar}>
                <FaTimes></FaTimes>
            </button>
        </nav>
            <button className = "nav-btn" onClick = {showScoreNavbar}>
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
export default ScoreNavbar;