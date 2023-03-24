import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ListingEditForm from './ListingEditForm';

function ListingEditModal({setShowListingEditModal, listingId}) {
  return (
    <Modal onClose={() => setShowListingEditModal(false)}>
      <ListingEditForm setShowListingEditModal={setShowListingEditModal} listingId={listingId}/>
    </Modal>
  );
}

export default ListingEditModal;