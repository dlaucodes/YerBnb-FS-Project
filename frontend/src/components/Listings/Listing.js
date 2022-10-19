import { Link } from "react-router-dom";
import "./listing.css"




const Listing = ({item}) => {
    // console.log(item)
    return ( 
        <div className="listing" key={item.id}>
            <ul>
            <div className="listing-img">
            <Link to={{pathname: `/listings/${item.id}`, price: item.price}}   >
            <img src={`${item.photoUrl}`} />
            </Link>
            </div>
            <ul>{item.location}</ul>
            <ul>${item.price}</ul>
            <ul>{item.description}</ul>
            </ul>
        </div>
     );
}
 
export default Listing;