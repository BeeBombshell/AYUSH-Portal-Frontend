import React from "react";
import emblem from "../../assets/images/emblem.svg";
import "./navbarHeader.css";

const NavbarHeader = () => {
    return (
        <div className="navbarHeader">
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={emblem} width={30} height={30} className="d-inline-block align-top" alt="" />
                Ayush Global Portal
            </a>
            </nav>
        </div>
    )
}


export default NavbarHeader;