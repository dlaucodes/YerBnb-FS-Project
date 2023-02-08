import { Redirect, useLocation } from "react-router-dom";
import { useSelector, useDispatch} from "react-redux";

import { useEffect, useState } from "react";
import "./ListingShow.css";



const ListingShow = ({listingItem}) => {
    const location = useLocation()
    const listingId = location.pathname.slice(10)
    // const item = location.item
    const [item, setItem] = useState(listingItem)
    const photoUrl = location.photoUrl
    const sessionUser = useSelector(state=>state.session.user)
    const dispatch = useDispatch()
    const listings = useSelector(state => state.listing)
    const listingvalues = Object.values(listings)
    const listingarray = listingvalues[0]
    const itemvalue = listingarray.id
    // useEffect(()=>{
    //     setItem(location.item)    
    // }, [])
//     useEffect(()=>{
//     dispatch(fetchListings())
//   },[])
    console.log(listingId)
    console.log(listingItem)
    console.log(listingvalues)
    console.log(listingarray)
    console.log(itemvalue)
    console.log(item)
    console.log(location)
    // if(!sessionUser){
    //     return(
    //         <Redirect to="/"/>
    //     )
    // }
    // if(item){
    //     const sessionUserIsOwner = sessionUser ? (sessionUser.id === item.ownerId) : null
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
                <img src={`${item.photoUrls[0].imgUrl}`} className="photo-main"/>
            </div>} 
            <div className="right-photocontainer">
            {item.photoUrls.length > 0 &&
           
            <div className="photo-container2" >
            {item.photoUrls.map((photo, i) => {
                if ( i === 1 || i === 3){      
                return (
                            
                <img src={`${photo.imgUrl}`} className="photo-small"/>
                
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
                            
                <img src={`${photo.imgUrl}`} className="photo-small"/>
               
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

        {/* sessionownerinfo under */}
        </div>
    </>
    )
}
 
export default ListingShow;

// {sessionUserIsOwner && (
//             <div>
//                 {/* Session User is Owner */}
//             </div>
//         )}
//belonged inside the empty div above 

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