import React from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import classes from './MainCard.module.css'

const MainCard = ({mainCards}) => {

    const router = useNavigate()

    return (
        <div className={classes.SoloMainCard} onClick={ () => router(`/kitchen-more/${mainCards.id}`)}>
            <img src={mainCards.img} alt="img"></img>
            <h1>{mainCards.title}</h1>
            <p>{mainCards.description}</p>
        </div>
    );
};

export default MainCard;