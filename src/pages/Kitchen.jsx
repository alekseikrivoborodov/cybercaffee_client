import React from 'react';
import MainCards from '../components/MainCards';

const Kitchen = ({mainCards}) => {
    return (
        <div>
            <h1>Стол клиента</h1>
            <MainCards mainCards={mainCards}/>
        </div>
    );
};

export default Kitchen;