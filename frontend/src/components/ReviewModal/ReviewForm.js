import './ReviewFormPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/modal'
import {createReview} from "../../store/review"
import { useParams } from 'react-router-dom';




const ReviewForm = ({setShowReviewFormModal})=>{
    const dispatch = useDispatch()
    const owner = useSelector(({session})=> session.user)
    const [rating, setRating] = useState("")
    const [body, setBody] = useState("")
    const {listingId} = useParams()
    const photoUrl = owner ? owner.photoUrl : ""
    console.log(owner)
    const photo = "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=636&h=424"
    

    const handleSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[user_id]', owner.id);
        formData.append('review[photo]', photo)
        formData.append('review[listing_id]', listingId)

        console.log(photoUrl)

        dispatch(createReview(formData))
        setShowReviewFormModal(false)
    }

    console.log(listingId)

    const closeModal = () =>{
        setShowReviewFormModal(false)
    };

    return(
        <>
        <form className="reviewform" onSubmit={handleSubmit}>
        <div onClick={closeModal}  className="close-modal"><span >╳</span>
        </div>
        <div className="review-form">
            <div className="input-field">
            <input
              className="review-form-rating"
              placeholder="rating"
              type="integer"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            </div>
            <div className="input-field">
            <input
              className="review-form-body"
              placeholder="body"
              type="text"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
            </div>
            <div className="signup-div">
            <button id="signup-button" type="submit">Review</button>
            </div>
         
        </div>
        </form>
        </>
    )

    
}







export default ReviewForm;