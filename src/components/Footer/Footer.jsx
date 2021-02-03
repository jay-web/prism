import React from "react";
import "./footer.css";

const Footer = (props) => {
    return(
        <div className="footer"> 
            <span className="footerText">{props.name} </span>
        </div>
    )
} 


export default Footer;