import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./listing.css"
import MapContainer from "../Map";





const Listing = ({listingItem}) => {
    const [item, setItem] = useState(listingItem)
    const test = listingItem

                 
    useEffect(()=>{
        
    }, [])
    
    // console.log(listingItem.ownerId)
    // if(listingItem.length > 0){
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