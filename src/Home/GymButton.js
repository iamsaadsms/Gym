import React from "react";
import './GymButton.css';

const GymButton = ({ data, className, style }) => {
    return (
        <div className={className}>
            <button className="common-btn" style={style}>{data}</button>
        </div>
    );
}

export default GymButton;
