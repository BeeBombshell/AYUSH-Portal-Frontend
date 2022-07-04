import React from "react";
import "./headerTop.css";

const HeaderTop = () => {
    return (
        <div className="flex-container">
            <div className="flex-left" style={{flexGrow: '1'}}></div>
            <div className="flex-right" style={{ flexGrow: '1' }}></div>
        </div>
    )
}


export default HeaderTop;