import React from 'react';
import {useState } from 'react';
import { useParams } from 'react-router-dom';
import CardList from '../components/CardList';

import Modal from '../components/UI/modalWindow/Modal';
import Order from './Order';

const Client = ({cards}) => {

    const [modal, setModal] = useState(true)


    return (
        <div>
            <CardList cards={cards} />
            <Modal visible={modal} setVisible={setModal}>
                <h1>ЗАКАЗ</h1>
            </Modal>
            {/* <Order/> */}
        </div>
    );
};

export default Client;