import './ReviewFormPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { Modal } from '../../context/modal'
import {createReview} from "../../store/review"
import { useParams } from 'react-router-dom';
import { getListings } from '../../store/listing';


const ReviewForm = ({setShowReviewFormModal})=>{
    const dispatch = useDispatch()
    const users = useSelector(state=>state.user.users)
    const currentUser = useSelector(state=>state.session.user)
    const owner = Object.values(users).find(user=>user.id === currentUser.id)
    const [rating, setRating] = useState(5)
    const [body, setBody] = useState("")
    const [ownerId, setOwnerId] = useState(owner.id)
    const [ownerName, setOwnerName] = useState(owner.firstName)
    const [ownerPic, setOwnerPic] = useState(owner.photoUrl)
    const [hover, setHover] = useState(0)
    const {listingId} = useParams()
    const listings = useSelector(state=> getListings(state))
    const listing = listings[0][listingId]

   

    const handleSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('review[rating]', rating);
        formData.append('review[body]', body);
        formData.append('review[user_id]', ownerId);
        formData.append('review[reviewer_pic]', ownerPic);
        formData.append('review[listing_id]', listingId);
        formData.append('review[listing_pic]', listing.photoUrls[0]);
        formData.append('review[reviewer_name]', ownerName);
        
        dispatch(createReview(formData));
        setShowReviewFormModal(false);
    }

    const closeModal = () =>{
        setShowReviewFormModal(false)
    };

    return(
        <>
        <div className="review-form">
            <div className='review-form-header'>
                <div className="close-span-container">
                    <div onClick={closeModal}  className="close-modal"><span >╳</span>
                    </div>
                </div>
                <div className="review-header-title">
                    Review
                </div>
            </div>

            <form className="review-inner" onSubmit={handleSubmit}>
       
            <div className="review-area">
             <div className="star-rating">
                {[...Array(5)].map((star, i) => {
                    i += 1;
                return (
                <button id='star' type="button" key={i}
                    className={i <= (hover || rating) ? "clicked" : "unclicked"}
                    onClick={() => setRating(i)}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(rating)}
                    >
                    <span className="star">&#9733;</span>
                </button>
                );
                })}
            </div>
                <div className="review-input-field">
                    <textarea
                        className="review-form-body"
                        placeholder="review this Yerbnb."
                        type="text-area"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        maxLength="800"
                        required
                    />
            </div>
            <div className="review-button-div">
                <button id="signup-button" type="submit">Review</button>
            </div>
         
        </div>
            </form>
            </div>
        </>
    )

    
}







export default ReviewForm;