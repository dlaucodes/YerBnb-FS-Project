import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import ReviewEditForm from './ReviewEditForm';

function ReviewEditModal({setShowReviewEditModal, reviewId, reviewPic, reviewListingId}) {
  return (
    <Modal onClose={() => setShowReviewEditModal(false)}>
      <ReviewEditForm setShowReviewEditModal={setShowReviewEditModal} reviewId={reviewId} reviewPic={reviewPic} reviewListingId={reviewListingId}/>
    </Modal>
  );
}

export default ReviewEditModal;