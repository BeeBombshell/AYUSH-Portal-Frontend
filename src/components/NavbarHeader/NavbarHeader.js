import React from "react";
import emblem from "../../assets/images/emblem.svg";
import "./navbarHeader.css";
import AyushLogo from "../../assets/images/Ayush-logo.webp";
import Ayushgrid from "../../assets/images/Ayush-grid.jpg";
import mohotsav from "../../assets/images/mohotsav.png";

const NavbarHeader = () => {
    return (
        <div className="navbarHeader">
            <nav className="navbar navbar-light bg-light">
                <div className="left">
                    <a className="navbar-brand" href="#">
                        <img src={AyushLogo} width={130} height={62} className="d-inline-block align-top" alt="" />
                        &nbsp;&nbsp;
                        <img src={Ayushgrid} width={166} height={63} className="d-inline-block align-top" alt="" />
                    </a>
                </div>
                {/* <div className="right"> */}
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Search..." />
                                <i className="search icon"></i>
                        </div>
                    </div>
                    &nbsp;&nbsp;
                    <img src={mohotsav} width={100} height={65} className="d-inline-block align-top" alt="" />
                {/* </div> */}
            </nav>
        </div>
    )
}


export default NavbarHeader;