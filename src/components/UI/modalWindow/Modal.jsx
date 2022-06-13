import React from 'react';
import classes from './Modal.module.css'


const Modal = ({children, visible, setVisible}) => {

    const rootClasses = [classes.myModal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={[classes.myModal, classes.active].join(' ')}>
            <div className={classes.myModalContent}>
                {children}
            </div>
            
        </div>
    );
};

export default Modal;