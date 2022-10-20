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
            <img src={`${item.photoUrl}`} />
            </Link>
            </div>
            <ul>{item.location}</ul>
            <ul>${item.price}</ul>
            <ul>{item.description}</ul>
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