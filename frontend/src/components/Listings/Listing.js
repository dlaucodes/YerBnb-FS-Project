import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./listing.css"
import MapContainer from "../Map";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../store/review";






const Listing = ({listingItem, reviewItem}) => {
    const [item, setItem] = useState(listingItem)
    const test = listingItem
    const dispatch = useDispatch()
    const reviews = useSelector(state=>state.review.reviews)
    const reviewsArray= []
    const ownerId = 

    useEffect(()=>{
        dispatch(fetchReviews())
    }, [])

    for(const key in reviews){
        const review = reviews[key]
        const listingReviewId = review.listingId
        

        // reviewsArray.push({
        //     id: review.id,
        //     rating: review.rating,
        //     body: review.body,
        //     listingReviewId: review.listingId
        // })

        console.log(listingReviewId)
    }
                 
    
    return ( 
        
       <>
        <div className="listing">
           <div className="listing-img">
                <NavLink to={{pathname: `/listings/${listingItem.id}`}}>
                    
                {/* <img src={`${listingItem.photoUrls[0].imgUrl}`} /> */}
                <img src={`${listingItem.photoUrls[0]}`}/>
                </NavLink>
            </div>
            <div className="listing-location-container">
                {listingItem.location}
            </div>
            <div className="listing-price-container">
               ${listingItem.price} night
        {/* <MapContainer 
        lat={listingItem.lat} lng={listingItem.lng}/> */}
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