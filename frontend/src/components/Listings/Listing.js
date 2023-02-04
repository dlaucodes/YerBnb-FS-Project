import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listing.css"





const Listing = ({listingItem}) => {
    const [item, setItem] = useState(listingItem)
    
    console.log(listingItem)
    // if(listingItem.length > 0){
    return ( 
        
       <>
           <div className="listing-img">
                <Link to={{pathname: `/listings/${listingItem.id}`}}   >
                    
                <img src={`${listingItem.photoUrls[0].imgUrl}`} />
                </Link>
            </div>
            <div className="listing-location-container">
                <ul>{listingItem.location}</ul>
            </div>
            <div className="listing-price-container">
                <ul>${listingItem.price} night</ul>
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