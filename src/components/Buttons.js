import React from "react"

import email from "../images/Email Icon.png";
import internet from "../images/Internet Icon.png";

export default function Buttons() {
    return (         
        <div className="buttons">
            <a className="button" href="mailto:torin.miner@gmail.com">
                <button className="email">
                    <img src={email} />
                    <h4>Email</h4>
                </button>
            </a>
            <a className="button" href="https://torinminer.com" target="_blank">
                <button className="portfolio">
                    <img className="internet" src={internet} />
                    <h4>Portfolio</h4>
                </button>
            </a>
        </div>
        
    );
}