import { useLocation } from "react-router-dom";
import { useSelector} from "react-redux"
import { useEffect, useState } from "react";
import "./ListingShow.css"

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
    <div>
        {/* {listingId} */}
        {item.title}
        <div className="photo-container">
            <div className="photo-container1">
                <img src={`${item.photoUrl}`} className="photo-main"/>
            </div>
            <div className="photo-container2">
                <div className="top-photo">
                    <img src={`${item.photoUrl}`} className="photo-small"/>
                </div>
                <div className="bottom-photo">
                <img src={`${item.photoUrl}`} className="photo-small"/>
                </div>
            </div>
            <div className="photo-container3">
                <div className="top-photo">
                    <img src={`${item.photoUrl}`} className="photo-small"/>
                </div>
                <div className="bottom-photo">
                    <img src={`${item.photoUrl}`} className="photo-small"/>
                </div>
            </div>
        </div>
        <div>
        {item.location} 
        ${item.price}
        {item.description}
        </div>

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