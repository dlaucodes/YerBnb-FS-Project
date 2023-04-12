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
    const selectedReview = []

    console.log(reviews)

    


    



    useEffect(()=>{
        dispatch(fetchReviews())
    }, [])


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