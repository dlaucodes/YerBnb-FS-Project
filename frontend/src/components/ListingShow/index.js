import { useLocation } from "react-router-dom";
import { useSelector} from "react-redux"
import { useEffect, useState } from "react";

const ListingShow = () => {
    const location = useLocation()
    const listingId = location.pathname.slice(10)
    const item = location.item
    // const [item, setItem] = useState()
    // const photoUrl = location.photoUrl
    const sessionUser = useSelector(state=>state.session.user)
    
    console.log(location)
    // useEffect(()=>{
    //     setItem(location.item)    
    // }, [listingId])
    

    if(item){
        const sessionUserIsOwner = (sessionUser.id === item.ownerId) 
    return (
    <div>listing 
        {listingId}
        {item.location} 
        {item.price}
        {item.description}
        <img src={`${item.photoUrl}`} />
        {sessionUserIsOwner && (
            <div>
                Session User is Owner
            </div>
        )}
    </div>
    )}else{
        return(
            <div>
                loading...
            </div>
        )
    }
}
 
export default ListingShow;