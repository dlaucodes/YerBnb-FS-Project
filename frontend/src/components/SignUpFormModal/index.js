import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal({setShowSignUpModal}) {
  return (
    <Modal onClose={() => setShowSignUpModal(false)}>
      <SignUpForm/>
    </Modal>
  );
}

export default SignUpFormModal;