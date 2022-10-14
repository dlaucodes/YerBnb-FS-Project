import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal({setShowSignUpModal}) {
  return (
    <Modal onClose={() => setShowSignUpModal(false)}>
      <SignUpForm setShowSignUpModal={setShowSignUpModal}/>
    </Modal>
  );
}

export default SignUpFormModal;