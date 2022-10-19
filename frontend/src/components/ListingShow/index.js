import { useLocation } from "react-router-dom";

const ListingShow = () => {
    const location = useLocation()
    const listingId = location.pathname.slice(10)
    const price = location.price
    return (<div>listing {listingId} {price}</div>);
}
 
export default ListingShow;