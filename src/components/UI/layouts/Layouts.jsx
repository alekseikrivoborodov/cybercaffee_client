import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import MyButton from '../button/MyButton';
import Modal from '../modalWindow/Modal';
import "./layouts.css"
import { useRef, useState } from 'react';

const Layout = (props) => {

    const [modal, setModal] = useState(false)
    const role = props.role

    return (
        <div className='navbar'>
            <header className='navbar-links'>
                <Link to="/admin">Админ</Link>
                <Link to="/kitchen">Стол</Link>
                <Link to="/client">Кухня(отключен)</Link>

                {role == "client" ?
                    <div>
                        {/* <MyButton onClick={() => setModal(true)}>Посмотреть заказ</MyButton>
                        {console.log(modal)}
                        <Modal visible={modal} setVisible={setModal}>
                            ЗАКАЗ
                        </Modal> */}
                        
                    </div>
                    :
                    " "
                }

            </header>

            <Outlet />
            <footer>2022</footer>

        </div>
    );
};

export default Layout;