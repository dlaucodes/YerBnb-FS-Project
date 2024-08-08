import React from 'react';
import { Modal } from '../../context/modal';
import ListingShowPic from './ListingShowPic';

function ListingShowPicModal({ setListingShowPicModal, photoUrl }) {
    return (
        <Modal onClose={() => setListingShowPicModal(false)}>
            <ListingShowPic photoUrl={photoUrl} />
        </Modal>
    );
}

export default ListingShowPicModal;
