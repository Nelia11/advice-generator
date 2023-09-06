import React from "react";
import "./Card.css";
import { Advice } from "../../interfaces/AdviceInterface";

const Card: React.FC<Advice> = ({id, advice}) => {
    return (
        <div className="card-wrapper">
            <div className="advice-content">
                <span className="advice-id">ADVICE #{id} </span>
                <span className="advice-text">"{advice}"</span>
            </div>
            <img src="images/pattern-divider-desktop.svg" className="desktop-divider"/>
        </div>
    );
};

export default Card;