import React from 'react';
import classes from './MainCard.module.css'
import MainCard from './MainCard';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom';

const MainCards = ({ mainCards }) => {
    return (
        <div className={classes.MainCard}>
            {mainCards.map((maincard) =>
                <MainCard mainCards={maincard} />)}
        </div>
    );
};

export default MainCards;