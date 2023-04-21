import { Redirect, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import ListingIndex from "../Listings";
import Listing from "../Listings/Listing";
import { getListings } from "../../store/listing";
import { useEffect, useState } from "react";
import "./ListingShow.css";
import csrfFetch from "../../store/csrf";
import { fetchListings, getListing, fetchListing } from "../../store/listing";
import Reservation from "../Reservation"
import ProfileDetails from "../Profile"
import { fetchUsers, getUser } from "../../store/user";
import { fetchUser } from "../../store/profile";
import MapContainer from "../Map";
import { getReviews, fetchReviews } from "../../store/review";
import ReviewFormModal from '../ReviewModal'



const ListingShow = (props) => {
    const {id} = useParams()
    const [items, setItems] = useState()
    const {listingId} = useParams()
    const listings = useSelector(state=>getListings(state))
    const dispatch = useDispatch()
    const users = useSelector(state=>state.user.users)
    const reviews = useSelector(state=>getReviews(state))
    const [showReviewFormModal, setShowReviewFormModal] = useState(false)
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' })
    const reviewItems = []
    
    
    
    
    for(const key in reviews[0]){
        const review = reviews[0][key]
        const reviewId = review.id
        const reviewListingId = review.listingId
        const reviewBody = review.body
        const reviewRating = review.rating
        const reviewerPic = review.reviewerPic
        const listingPic = review.listingPic
        const reviewerName = review.reviewerName
        const reviewCreatedAt = review.createdAt
        const date = new Date(review.createdAt);
        const month = date.toLocaleString('default', { month: 'long' });
        

        reviewItems.push({
            id: reviewId,
            listingId: reviewListingId,
            body: reviewBody,
            rating: reviewRating,
            reviewer: reviewerPic,
            listing: listingPic,
            reviewerName: reviewerName,
            createdAt: reviewCreatedAt,
            reviewDate: month
        })
    }

    
    

    // console.log(reviewId)

    // console.log(reviewItems, "hfjksdahfjkasdjkfhkljasd")
    
    
    
    useEffect(()=>{
        dispatch(fetchListings())
         dispatch(fetchUsers())
         dispatch(fetchReviews())
    },[dispatch, id])

    


 
    if(listings[0] || reviews[0]){
        let listing = listings[0][listingId]
        const ownerId = listing.ownerId;
        const owner = Object.values(users).find(user => user.id === ownerId);
        const photoUrl = owner ? owner.photoUrl : ""; 
        const hostName = owner ? owner.firstName : "";
        const filteredReviews = (reviewItems).filter(review => review.listingId === listing.id)
        

        // const reviewOwner = Object.values(users).find(user=>user.id)
      
    return (
    <>
        {/* {listingId} */}
        <div className= "listing-template">
            <div className="title-container">
                <h1>{listing.title}</h1>
            </div>
            <div className="location-container">
                {listing.location} 
             </div>
            <div className="photo-container">
                {listing.photoUrls.length > 0 && 
                <div className="photo-container1">
                    <img src={`${listing.photoUrls[0]}`} className="photo-main" alt=""/>
                </div>} 
            <div className="right-photocontainer">
                {listing.photoUrls.length > 0 &&
           
            <div className="photo-container2" >
            {listing.photoUrls.map((photo, i) => {
                if ( i === 1 || i === 3){      
                return (
                            
                <img src={`${photo}`} className="photo-small" key={i} />
                
                )
                }     
                     
            })}
            </div>
            }

            {listing.photoUrls.length > 0 &&

            <div className="photo-container3" >
            {listing.photoUrls.map((photo, i) => {
                if ( i === 2 || i === 4){      
                return (
                            
                <img src={`${photo}`} className="photo-small" key={i}/>
               
                )
                }     
                     
            })}
            </div>
            }
            </div>
        </div>

        {/* <div className="listing-divider">
        </div> */}
        
        <div className="listing-descriptions">
            <div className="listing-info-left">
            
            <div className="host-info">

                <div className="host-name">
                    Hosted by {`${hostName}`}
                </div>
                <div className="host-picture">
                   {owner && <img src={`${photoUrl}`}/>}
                </div>
            </div>

            <div className="super-host">
                <div id="superhost-desc">
                    <svg viewBox="0 0 32 32"  height="24px" width="24px"><path d="m24.3334 1.66675c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323-.00065 24.666 3.00065.00075v2h-26.66665v-2l3-.00075v-24.666c0-1.05436681.81587301-1.91816558 1.850737-1.99451429l.149263-.00548571zm-4.00065 2h-12.666l-.00075 24.66625 12.66675-.00025zm4.00065 0h-2.00065v24.666l2.00025.00025zm-7.0001 11.00002c.7363778 0 1.33333.5969522 1.33333 1.33333s-.5969522 1.33333-1.33333 1.33333-1.33333-.5969522-1.33333-1.33333.5969522-1.33333 1.33333-1.33333z"></path></svg>
                    <div id="superhost-title">
                        <div>Self check-in</div>
                    </div>
                </div>
                <div id="superhost-desc">
                    <svg viewBox="0 0 32 32"  height="24px" width="24px"><path d="m11.6667 0-.00095 1.666h8.667l.00055-1.666h2l-.00055 1.666 6.00065.00063c1.0543745 0 1.9181663.81587127 1.9945143 1.85073677l.0054857.14926323v15.91907c0 .4715696-.1664445.9258658-.4669028 1.2844692l-.1188904.1298308-8.7476886 8.7476953c-.3334303.3332526-.7723097.5367561-1.2381975.5778649l-.1758207.0077398h-12.91915c-2.68874373 0-4.88181754-2.1223321-4.99538046-4.7831124l-.00461954-.2168876v-21.66668c0-1.05436021.81587582-1.91815587 1.85073739-1.99450431l.14926261-.00548569 5.999-.00063.00095-1.666zm16.66605 11.666h-24.666v13.6673c0 1.5976581 1.24893332 2.9036593 2.82372864 2.9949072l.17627136.0050928 10.999-.0003.00095-5.6664c0-2.6887355 2.122362-4.8818171 4.7832071-4.9953804l.2168929-.0046196 5.66595-.0006zm-.081 8-5.58495.0006c-1.5977285 0-2.9037573 1.2489454-2.9950071 2.8237299l-.0050929.1762701-.00095 5.5864zm-18.586-16-5.999.00062v5.99938h24.666l.00065-5.99938-6.00065-.00062.00055 1.66733h-2l-.00055-1.66733h-8.667l.00095 1.66733h-2z"></path></svg>
                    <div id="superhost-title">
                        Free cancellation
                    </div>
                </div>
                     <div id="superhost-desc">
                <svg viewBox="0 0 32 32"  height="24" width="24"><path d="m16 17c3.8659932 0 7 3.1340068 7 7s-3.1340068 7-7 7-7-3.1340068-7-7 3.1340068-7 7-7zm0 2c-2.7614237 0-5 2.2385763-5 5s2.2385763 5 5 5 5-2.2385763 5-5-2.2385763-5-5-5zm9.6666667-18.66666667c1.0543618 0 1.9181651.81587779 1.9945142 1.85073766l.0054858.14926234v6.38196601c0 .70343383-.3690449 1.35080636-.9642646 1.71094856l-.1413082.0779058-9.6666667 4.8333334c-.5067495.2533747-1.0942474.2787122-1.6171466.0760124l-.1717078-.0760124-9.66666666-4.8333334c-.62917034-.3145851-1.04315599-.93418273-1.09908674-1.62762387l-.00648607-.16123049v-6.38196601c0-1.05436179.81587779-1.91816512 1.85073766-1.99451426l.14926234-.00548574zm0 2h-19.33333337v6.38196601l9.66666667 4.83333336 9.6666667-4.83333336z"></path></svg>
                <div id="superhost-title">
                    {`${hostName}`} is a Superhost
                </div>
                </div>
            </div>

            <div className="description-container">
                <p>
                {listing.description}
                </p>
            </div>
            </div>
            <div className="listing-info-right">
            <div className="reservation-container-outer">
                Reservation container
            </div>
          
            </div>
            <div className="listing-reviews-container">
                <div className="listing-review-header">
                    <div className="listing-show-rating">
                        <div className="rating-star">
                            <svg viewBox="0 0 32 32" height="16px" width="16px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>
                        </div>
                            {(() => {
                            const sum = filteredReviews.reduce((total, review) => total + review.rating, 0);
                            const average = sum / filteredReviews.length;
                            return isNaN(average) ? '' : average.toFixed(1);
                            })()}
                    </div> 
                        <div className="dot">
                            ·
                        </div>
                    <div className="listing-review-total">
                        {filteredReviews.length} reviews
                    </div>
                </div>
                {/* <div className="listing-review-stats">
                    review stats
                </div> */}
                <div className="listing-reviews-outer"> 
                    {filteredReviews.map((review, i)=>{
                        <div key={i}></div>
                        return(
                    <div className="listing-reviews-card">
                        <div className="listing-reviewer-container">
                            <div className="listing-reviewer-picture">
                                <img src={`${review.reviewer}`}/>
                            </div>
                                <div className="listing-reviewer-info">
                                    <div className="listing-reviewer-name">
                                        {review.reviewerName}
                                    </div>
                                    <div className="reviewer-dates">

                                        <div className="review-created-month">
                                        {review.reviewDate}
                                        </div>
                                        <div className="review-created-year">
                                        {(review.createdAt).slice(0, 4)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="listing-review-body">
                                {review.body}
                            </div>
                    </div>)
                    }

                    )}
                </div>
                <div className="listing-create-review">
                <button onClick={()=>{setShowReviewFormModal(true)}}>write a review</button>
                </div>    
            </div>
        </div>
        {showReviewFormModal && (<ReviewFormModal setShowReviewFormModal={setShowReviewFormModal}/> )}
        </div>
    </>
    )}
}
 
export default ListingShow;

    