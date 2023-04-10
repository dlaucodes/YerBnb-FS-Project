import React, {useState} from 'react';
import { Modal } from '../../context/modal';
import ReviewForm from './ReviewForm'

function ReviewFormModal({setShowReviewFormModal}){
    return(
        <Modal onClose={()=> setShowReviewFormModal(false)}>
            <ReviewForm setShowReviewFormModal={setShowReviewModal}/>
        </Modal>
    );
}

export default ReviewFormModal;