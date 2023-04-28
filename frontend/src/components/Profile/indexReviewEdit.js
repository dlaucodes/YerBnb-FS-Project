import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ReviewEditForm from './ReviewEditForm';

function ReviewEditModal({setShowReviewEditModal, reviewId}) {
  return (
    <Modal onClose={() => setShowReviewEditModal(false)}>
      <ReviewEditForm setShowReviewEditModal={setShowReviewEditModal} reviewId={reviewId}/>
    </Modal>
  );
}

export default ReviewEditModal;