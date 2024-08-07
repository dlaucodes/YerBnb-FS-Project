import React, {useState} from 'react';
import { Modal } from '../../context/modal';
import ListingShowPic from './ListingShowPic'

function ListingShowPicModal({setListingShowPicModal}){
    return(
        <Modal onClose={()=> ListingShowPicModal(false)}>
            <ReviewForm ListingShowPicModal={setListingShowPicModal}/>
        </Modal>
    );
}

export default ListingShowPicModal;