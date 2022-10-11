import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal({num, closeMenu}) {
  const [showModal, setShowModal] = useState(false);
  debugger

  return (
    <>
      <button onClick={() => {
          setShowModal(true)
          closeMenu()
        }
        }>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm/>
        </Modal>
      )}
    </>
  );
}



export default SignUpFormModal;