import React from "react"

import Title from './Title.js';
import Buttons from './Buttons.js';
import About from './About.js';

export default function Main(props) {
    return (
        <div className={props.darkMode ? "main dark": "main"}>
            <Title />      
            <Buttons />      
            <About />   
        </div>
    )
}