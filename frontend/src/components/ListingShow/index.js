import { Redirect, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";
import ListingIndex from "../Listings";
import Listing from "../Listings/Listing";
import { getListings } from "../../store/listing";
import { useEffect, useState } from "react";
import "./ListingShow.css";
import csrfFetch from "../../store/csrf";
import { fetchListing } from "../../store/listing";




const ListingShow = () => {
    const location = useLocation()
    // const listingId = location.pathname.slice(10)
    // const item = location.item
    // const [item, setItem] = useState()
    const {listingId} = useParams()
    const photoUrl = location.photoUrl
    const sessionUser = useSelector(state=>state.session.user)
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listing)
    const listingvalues = Object.values(listings)
    const listingarray = listingvalues[0]
    const item = Object.values(listingarray)[listingId -1]
    
    useEffect(()=>{
        dispatch(fetchListing(listingId))
        // .then(()=>{
        //   item = setItem(actualListing[listingId -1])  
        // })
    }, [])

    console.log(item)


//     useEffect(()=>{
//     dispatch(fetchListings())
//   },[])
    // console.log(item)
    // console.log(listingId)

    // console.log(listingarray[1])
    // console.log(listingItem)

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
        <div className= "listing-template">
        <div className="title-container">
        <h1>{item.title}</h1>
        </div>
        <div className="photo-container">
            {item.photoUrls.length > 0 && 
            <div className="photo-container1">
                <img src={`${item.photoUrls[0]}`} className="photo-main" alt=""/>
            </div>} 
            <div className="right-photocontainer">
            {item.photoUrls.length > 0 &&
           
            <div className="photo-container2" >
            {item.photoUrls.map((photo, i) => {
                if ( i === 1 || i === 3){      
                return (
                            
                <img src={`${photo}`} className="photo-small"/>
                
                )
                }     
                     
            })}
            </div>
            }

            {item.photoUrls.length > 0 &&

            <div className="photo-container3" >
            {item.photoUrls.map((photo, i) => {
                if ( i === 2 || i === 4){      
                return (
                            
                <img src={`${photo}`} className="photo-small"/>
               
                )
                }     
                     
            })}
            </div>
            }
            </div>
        </div>

        <div className="listing-divider">
        </div>
        
        <div className="listing-descriptions">
        <div className="location-container">
        {item.location} 
        </div>

        <div className="price-container">
        ${item.price} night
        </div>

        <div className="description-container">
        {item.description}
        </div>
        </div>

        {sessionUserIsOwner && (
            <div>
                {/* Session User is Owner */}
            </div>
        )}
        </div>
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

    //  <div className="photo-container2" >
    //         {item.photoUrls.map((photo, i) => {
    //                 if ( i === 5 ) {
    //                     return
    //                 } else if (i % 2 !== 0) {
    //                     return (
    //                         <div className="top-photo">
    //                             <img src={`${photo.imgUrl}`} className="photo-small"/>
    //                         </div>
    //                     )
    //                 } else if (i % 2 === 0 && i !== 0) {
    //                     return (
    //                         <div className="bottom-photo">
    //                             <img src={`${photo.imgUrl}`} className="photo-small"/>
    //                         </div>
    //                     )
    //                 }
    //         })}
    //         </div>

    //  <div className="photo-container2" >
    //         {item.photoUrls.map((photo, i) => {
    //                 if ( i === 1 || i === 2 ) {
    //                     return
    //                 } else if (i % 2 !== 0) {
    //                     return (
    //                         <div className="top-photo">
    //                             <img src={`${photo.imgUrl}`} className="photo-small"/>
    //                         </div>
    //                     )
    //                 } else if (i % 2 === 0 && i !== 0) {
    //                     return (
    //                         <div className="bottom-photo">
    //                             <img src={`${photo.imgUrl}`} className="photo-small"/>
    //                         </div>
    //                     )
    //                 }
    //         })}
    //         </div>