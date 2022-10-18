import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ListForm from './ListFormModal';

function ListFormModal({setShowListFormModal}) {
  return (
    <Modal onClose={() => setShowListFormModal(false)}>
      <ListForm setShowListFormModal={setShowListFormModal}/>
    </Modal>
  );
}

export default ListFormModal;