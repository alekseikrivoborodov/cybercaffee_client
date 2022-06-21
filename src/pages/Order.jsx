import React from 'react';
import Card from '../components/Card';
import { useState } from 'react';

const Order = () => {

    const [orderList, setOrderList] = useState([])

    const AddNewOrderItem = (orderList) => 
        setOrderList([...orderList, ])

    // const addNewCardtoOrder = (e) => {
    //     e.preventDefault()
    //     console.log(orderList)
    // }


    return (
        <div>
            <div className="card-list">
                {orderList.map((card, index) =>
                    <Card number={index + 1} card={card} key={card.id} add={AddNewOrderItem}/>)}
            </div>
        </div>
    );
};

export default Order;