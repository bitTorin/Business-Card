import React from "react"

import Title from './Title.js';
import Buttons from './Buttons.js';
import About from './About.js';

export default function Main() {
    return (
        <div className="main">
            <Title />      
            <Buttons />      
            <About />   
        </div>
    )
}