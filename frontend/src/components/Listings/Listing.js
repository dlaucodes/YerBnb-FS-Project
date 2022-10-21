import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./listing.css"





const Listing = ({listingItem}) => {
    const [item, setItem] = useState(listingItem)
    useEffect(()=>{
        setItem(listingItem)    
    }, [listingItem])
    if(item){
    return ( 
        <div className="listing" key={item.id}>
            <ul>
            <div className="listing-img">
            <Link to={{pathname: `/listings/${item.id}`, item: item}}   >
            <img src={`${item.photoUrls[0].imgUrl}`} />
            </Link>
            </div>
            <div className="listing-location-container">
            <ul>{item.location}</ul>
            </div>
            <div className="listing-price-container">
            <ul>${item.price} night</ul>
            </div>
            {/* <ul>{item.description}</ul> */}
            </ul>
        </div>
     )}else{
         return (
         <div>
             loading...
        </div>)
     }
}
 
export default Listing;