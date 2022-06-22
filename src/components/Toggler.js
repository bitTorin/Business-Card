import React from "react"

export default function Toggler(props) {
    return (
        <div className={props.darkMode ? "toggler dark": "toggler"} >
            <div 
                className="togglerSlider"
                onClick={props.toggleDarkMode}
            >
                <div className="togglerSliderCircle"></div>
            </div>
        </div>
    )
}