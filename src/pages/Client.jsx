import React from 'react';
import {useState } from 'react';
import CardList from '../components/CardList';

import Modal from '../components/UI/modalWindow/Modal';
import Order from './Order';

const Client = () => {

    const [cards, setCards] = useState([
        { id: 1, title: "Крылышки", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
        { id: 2, title: "Салат", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
        { id: 3, title: "Бургер", img: "https://bipbap.ru/wp-content/uploads/2017/06/14813uxVsXjAPBFmIovEzZkHNnR.jpg", description: 'None' },
    ])

    const [modal, setModal] = useState(true)



    return (
        <div>
            <CardList cards={cards} />
            <Modal visible={modal} setVisible={setModal}>
                <h1>ЗАКАЗ</h1>
            </Modal>
            <Order/>
        </div>
    );
};

export default Client;