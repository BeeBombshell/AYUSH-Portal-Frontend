import React from "react";
import "./card.css";
import img1 from '../assets/images/img1.png';

const Card = () => {
    return (
        <div className="card-component">
            <div className="card bg-dark text-white">
                <img className="card-img" src={img1} alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
            <div className="card bg-dark text-white">
                <img className="card-img" src={img1} alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        </div>
    )
}

export default Card