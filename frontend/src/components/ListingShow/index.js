import { Redirect, useLocation } from "react-router-dom";
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
    
    // if(!sessionUser){
    //     return(
    //         <Redirect to="/"/>
    //     )
    // }
    if(item){
        const sessionUserIsOwner = sessionUser ? (sessionUser.id === item.ownerId) : null
    return (
    <>
        {/* {listingId} */}
        <div className="title-container">
        <h1>{item.title}</h1>
        </div>
        <div className="photo-container">
            <div className="photo-container1"
            >
                <img src={`${item.photoUrls[0].imgUrl}`} className="photo-main"/>
            </div>
            <div className="photo-container2">
                <div className="top-photo"
                >
                    <img src={`${item.photoUrls[1].imgUrl}`} className="photo-small"/>
                </div>
                <div className="bottom-photo">
                <img src={`${item.photoUrls[2].imgUrl}`} className="photo-small"/>
                </div>
            </div>
            <div className="photo-container3">
                <div className="top-photo">
                    <img src={`${item.photoUrls[3].imgUrl}`} className="photo-small"/>
                </div>
                <div className="bottom-photo">
                    <img src={`${item.photoUrls[4].imgUrl}`} className="photo-small"/>
                </div>
            </div>
        </div>

        <div className="hr-divider">
            <hr />
        </div>

        <div className="location-container">
        {item.location} 
        </div>

        <div className="price-container">
        ${item.price} night
        </div>

        <div className="description-container">
        {item.description}
        </div>

        {sessionUserIsOwner && (
            <div>
                {/* Session User is Owner */}
            </div>
        )}
    </>
    )}else{
        return(
            <div>
                loading...
            </div>
        )
    }
}
 
export default ListingShow;