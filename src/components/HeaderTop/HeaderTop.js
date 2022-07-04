import React from "react";
import "./headerTop.css";
import flag from "../../assets/images/india-flag.png";

const HeaderTop = () => {
    return (
        <div className="flex-container">
            <div className="flex-left" style={{ flexGrow: '1' }}>
                <img className="flag" src={flag} alt="Indian Flag"></img>
                <div className="goi-text">
                    भारत सरकार |  Government of India 
                </div>
            </div>
            <div className="flex-right" style={{ flexGrow: '1' }}></div>
        </div>
    )
}


export default HeaderTop;