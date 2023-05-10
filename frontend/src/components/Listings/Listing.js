import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./listing.css"
import MapContainer from "../Map";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/review";
import { getListings, fetchListings } from "../../store/listing";
import Profile from "../Profile";


const Listing = ({listingItem}) => {
    const [item, setItem] = useState(listingItem)
    const test = listingItem
    const dispatch = useDispatch()
    const reviews = useSelector(state=>getReviews(state))
    const listings = useSelector(state=>getListings(state))
    const reviewsArray = []

    for(const key in reviews){
        const review = reviews[key]
        for(const object in review){
            const reviewObject = review[object]
                reviewsArray.push(reviewObject)
        }
    }


    useEffect(()=>{
        dispatch(fetchReviews())
        dispatch(fetchListings())
    }, [])


    return ( 
       <>
        <div className="listing">
           <div className="listing-img">
                <NavLink to={{pathname: `/listings/${listingItem.id}`}}>
                <img src={`${listingItem.photoUrls[0]}`}/>
                </NavLink>
            </div>
            <div className="listing-information">
                <div className="listing-information-left">
                    <div className="listing-location-container">
                        {listingItem.city}, {listingItem.state}
                    </div>
                    <div className="listing-price-container">
                        ${listingItem.price} night
                    </div>
                </div>
                
            <div className="listing-rating">
                <div className="rating-star">
                <svg viewBox="0 0 32 32" height="16px" width="16px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>
                </div>
                {(() => {
                const filteredReview = reviewsArray.filter(review => review.listingId === listingItem.id);
                const sum = filteredReview.reduce((total, review) => total + review.rating, 0);
                const average = sum / filteredReview.length;
                return isNaN(average) ? '' : average.toFixed(1);
                })()}
            </div>
            </div>
        </div>
       </>  
     )
}
 
export default Listing;