import './ReviewFormPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/modal'




const ReviewForm = ({setShowReviewFormModal})=>{
    const dispatch = useDispatch()
    const owner = useSelector(({session})=> session.user)
    const [rating, setRating] = useState("")
    const [body, setBody] = useState("")
    

    const handleSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[owner_id]', owner.id);
        formData.append('review[photo][]', owner.photoUrl)
    }

    return(
        <>
        <div className="review-form">
            hello
        </div>
        </>
    )

    
}







export default ReviewForm;