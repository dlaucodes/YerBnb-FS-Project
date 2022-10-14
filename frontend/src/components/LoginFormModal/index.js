import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import LoginForm from './LoginFormModal';

function LoginFormModal({setShowLoginModal}) {
  return (
    <Modal onClose={() => setShowLoginModal(false)}>
      <LoginForm setShowLoginModal={setShowLoginModal}/>
    </Modal>
  );
}

export default LoginFormModal;