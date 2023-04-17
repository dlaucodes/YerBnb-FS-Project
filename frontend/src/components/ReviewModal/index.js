import React, {useState} from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from './ReviewForm';

function ReviewFormModal({setShowReviewFormModal}){
    return(
        <Modal onClose={()=> setShowReviewFormModal(false)}>
            <ReviewForm setShowReviewFormModal={setShowReviewFormModal}/>
        </Modal>
    );
}

export default ReviewFormModal;