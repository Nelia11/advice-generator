import "./GreenButton.css";
import { GreenButtonProps } from "../../interfaces/AdviceInterface";
import React from "react";

const GreenButton: React.FC<GreenButtonProps> = ({handleClick}) => {
    return (
        <button className="green-btn" onClick={handleClick}>
            <img src="images/icon-dice.svg" />
        </button>
    );
};

export default GreenButton;