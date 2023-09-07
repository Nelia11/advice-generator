import React from "react";
import "./Card.css";
import { Advice } from "../../interfaces/AdviceInterface";
import GreenButton from "../../UI/GreenButton/GreenButton";

const Card: React.FC<Advice> = ({id, advice, handleClick}) => {
    return (
        <div className="container">
            <div className="card-wrapper">
                <div className="advice-content">
                    <span className="advice-id">ADVICE #{id} </span>
                    <span className="advice-text">"{advice}"</span>
                </div>
                <img src="images/pattern-divider-desktop.svg" className="desktop-divider"/>
            </div>
            <GreenButton handleClick={handleClick}/>
        </div>        
    );
};

export default Card;