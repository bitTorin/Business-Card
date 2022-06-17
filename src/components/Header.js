import React from "react"

import headshot from "../images/headshot.jpg";

export default function Header() {
    return (
        <div className="header">
            <img src={headshot}/>
        </div>
    )
}