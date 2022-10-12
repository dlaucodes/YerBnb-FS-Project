import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal({setShowModal}) {
  return (
    <Modal onClose={() => setShowModal(false)}>
      <SignUpForm/>
    </Modal>
  );
}



export default SignUpFormModal;