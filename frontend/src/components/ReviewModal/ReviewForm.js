import './ReviewFormPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/modal'
import {createReview} from "../../store/review"
import { useParams } from 'react-router-dom';
import { getListings } from '../../store/listing';
import usersReducer from '../../store/user';




const ReviewForm = ({setShowReviewFormModal})=>{
    const dispatch = useDispatch()
    const owner = useSelector(state=>state.user)
    const [rating, setRating] = useState("")
    const [body, setBody] = useState("")
    const {listingId} = useParams()
    const listings = useSelector(state=> getListings(state))
    const listing = listings[0][listingId]
    // const photoUrl = owner ? owner.photoUrl : ""
    // console.log(owner)
    console.log(owner)

    console.log(listing.photoUrls[0], "hi")

   
    

    const handleSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[user_id]', owner.id);
        formData.append('review[reviewer_pic]', owner.photoUrl)
        formData.append('review[listing_id]', listingId)
        formData.append('review[listing_pic]', listing.photoUrls[0])
        formData.append('review[reviewer_name]', owner.firstName)
        dispatch(createReview(formData))
        setShowReviewFormModal(false)
    }

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