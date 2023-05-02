import React, {useState} from 'react';
import {Modal} from '../../context/modal';
import Confirmation from './Confirmation';
import Reservation from '.';

function ConfirmationModal({setShowConfirmationModal}){
    return (
        <Modal onClose={()=> setShowConfirmationModal(false)}>
            <Confirmation setShowConfirmationModal={setShowConfirmationModal}/>
        </Modal>
    )
}

export default ConfirmationModal;