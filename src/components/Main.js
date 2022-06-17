import React from "react"

import email from "../images/Email Icon.png";
import linkedin from "../images/LinkedIn Icon.png";


export default function Main() {
    return (
        <div className="main">
            <div>
                <h2 className="name"><b>Torin Miner</b></h2>
                <h5 className="title">Frontend Developer</h5>
                <small className="website">torinminer.com</small>
            </div>
            <div className="buttons">
                <button className="email">
                    <img src={email} />
                    <h4>Email</h4>
                </button>
                <button className="linkedin">
                    <img src={linkedin} />
                    <h4>LinkedIn</h4>
                </button>
            </div>
            <div className="description">
                <h3>About</h3>
                <small>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</small>
                <h3>Interests</h3>
                <small>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</small>
            </div>
        </div>
    )
}