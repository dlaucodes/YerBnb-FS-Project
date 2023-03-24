import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ListingEditForm from './ListingEditForm';

function ListingEditModal({setShowListingEditModal}) {
  return (
    <Modal onClose={() => setShowListingEditModal(false)}>
      <ListingEditForm setShowListingEditModal={setShowListingEditModal}/>
    </Modal>
  );
}

export default ListingEditModal;