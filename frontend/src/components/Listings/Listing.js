import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listing.css"





const Listing = ({listingItem}) => {
    const [item, setItem] = useState(listingItem)
    
    console.log(listingItem)
    // if(listingItem.length > 0){
    return ( 
        
       <>
        <div className="listing">
           <div className="listing-img">
                <Link to={{pathname: `/listings/${listingItem.id}`}}   >
                    
                {/* <img src={`${listingItem.photoUrls[0].imgUrl}`} /> */}
                <img src={`${listingItem.photoUrls[0]}`}/>
                </Link>
            </div>
            <div className="listing-location-container">
                {listingItem.location}
            </div>
            <div className="listing-price-container">
               ${listingItem.price} night
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