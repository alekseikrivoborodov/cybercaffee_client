import React, { useState } from "react";
import './cards.css'
import MyButton from "./UI/button/MyButton";

const Card = (props, onChange) => {

    const AddNewOrderItem = (event) => {
        onChange(props.card)
        console.log(event)
    }
    return(
        <div className="card">
            <img src={props.card.img} alt="img"></img>
            <h1>{props.card.title}</h1>
            <p>{props.card.description}</p>

            <div className="card-delete">
                <MyButton onClick={AddNewOrderItem}>Хочу</MyButton>
            </div>

        </div>
    )
}

export default Card