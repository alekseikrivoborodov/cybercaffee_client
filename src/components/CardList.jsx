import React from "react";
import './cards.css'
import Card from "./Card";
import { useState } from "react";

const CardList = ({ cards, title }) => {

    return (
        <div>
            <h1>Список Блюд</h1>
            <div className="card-list">
                {cards.map((card, index) =>
                    <Card number={index + 1} card={card} key={card.id}/>)}
            </div>
        </div>
    )
}

export default CardList