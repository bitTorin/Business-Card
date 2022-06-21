import React from "react"

import twitter from "../images/Twitter Icon.png";
import linkedin from "../images/Linkedin Icon.svg";
import github from "../images/GitHub Icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://www.linkedin.com/in/torin-miner/" target="_blank">
                <img src={linkedin} />
            </a>
           
            <a href="https://github.com/bitTorin" target="_blank">
                <img src={github} />
            </a>
            <a href="https://twitter.com/bit_Torin" target="_blank">
                <img src={twitter} />
            </a>
            
        </div>
    )
}