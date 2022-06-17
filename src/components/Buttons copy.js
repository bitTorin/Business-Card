import React from "react"

import email from "../images/Email Icon.png";
import internet from "../images/Internet Icon.png";

const buttons = {
    justifyContent: 'center',
    display: 'flex',
    gap: '8px'
};

const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '115px',
    height: '34px',
    borderRadius: '6px',
    padding: '9px, 13px, 9px, 11px',
    gap: '6px',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
}

const emailBtn = {
    backgroundColor: '#FFFFFF',
    border: '0px',
    color: '#374151'
}

const portfolioBtn = {
    backgroundColor: '#5093E2',
    border: '0px',
    fontColor: 'white',
    padding: '8px'
  }
  
const portfolioIcon = {
    width: '13px'
  }


export default function Buttons() {
    return (         
        <div className={buttons}>
            <a className={buttonStyle} href="mailto:torin.miner@gmail.com">
                <button className={emailBtn}>
                    <img src={email} />
                    <h4>Email</h4>
                </button>
            </a>
            <a className={buttonStyle} href="https://torinminer.com" target="_blank">
                <button className={portfolioBtn}>
                    <img className={portfolioIcon} src={internet} />
                    <h4>Portfolio</h4>
                </button>
            </a>
        </div>
        
    );
}