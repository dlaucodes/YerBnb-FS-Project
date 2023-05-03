import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import Dev from './Dev';

function DevModal({setShowDevModal}){
    return (
        <Modal onClose={()=> setShowDevModal(false)}>
            <Dev setShowDevModal= {setShowDevModal}/>
        </Modal>
    );
}

export default DevModal;