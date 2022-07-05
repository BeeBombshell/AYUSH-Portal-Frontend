import React from "react";
import "./headerTop.css";
import flag from "../../assets/images/india-flag.png";

const HeaderTop = () => {
    return (
        <div className="flex-container">
            <div className="flex-left">
                <div className="wrapper-div">
                    <img className="flag" src={flag} alt="Indian Flag"></img>
                    <div className="goi-text">
                        भारत सरकार |  Government of India
                    </div>
                    <button type="button" className="btn btn-outline-light">
                        Regions
                        &nbsp;
                        <i className="fas fa-angle-down"></i>
                    </button>
                </div>
            </div>
            <div className="flex-right" style={{ flexGrow: '1' }}></div>
        </div>
    )
}


export default HeaderTop;