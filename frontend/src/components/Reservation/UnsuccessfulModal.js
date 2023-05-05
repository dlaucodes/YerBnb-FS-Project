import React, {useState} from 'react';
import {Modal} from '../../context/modal';
import Unsuccessful from './Unsuccessful';
import Reservation from '.';

function UnsuccessfulModal({setShowUnsuccessfulModal}){
    return (
        <Modal onClose={()=> setShowUnsuccessfulModal(false)}>
            <Unsuccessful setShowUnsuccessfulModal={setShowUnsuccessfulModal}/>
        </Modal>
    )
}

export default UnsuccessfulModal;