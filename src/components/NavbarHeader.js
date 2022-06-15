import React from "react";
import emblem from "../assets/images/emblem.svg";
import "./navbarHeader.css";

const NavbarHeader = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                <img src={emblem} width={30} height={30} className="d-inline-block align-top" alt="" />
                Ayush Global Portal
            </a>
        </nav>
    )
}


export default NavbarHeader;