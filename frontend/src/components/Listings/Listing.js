import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./listing.css"
import MapContainer from "../Map";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews, getReviews } from "../../store/review";
import { getListings } from "../../store/listing";






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
    }, [])


    return ( 
        
       <>
        <div className="listing">
           <div className="listing-img">
                <NavLink to={{pathname: `/listings/${listingItem.id}`}}>
                <img src={`${listingItem.photoUrls[0]}`}/>
                </NavLink>
            </div>
            <div className="listing-location-container">
                {listingItem.location}
            </div>
            <div className="listing-price-container">
               ${listingItem.price} night
            </div>
            <div className="listing-rating">
                {(() => {
                const reviews = reviewsArray.filter(item => item.listingId === listingItem.id);
                const sum = reviews.reduce((total, item) => total + item.rating, 0);
                const average = sum / reviews.length;
                return isNaN(average) ? '' : average.toFixed(1);
                })()}
            </div>

         
        </div>
       
      
        
       </>  
     )
    //  else{
    //      return (
    //      <div>
    //          loading...
    //     </div>)
    //  }
}
 
export default Listing;