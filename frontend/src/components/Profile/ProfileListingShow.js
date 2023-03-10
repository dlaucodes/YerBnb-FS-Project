import React from "react";
import {useParams } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listing";
import * as userActions from '../../store/session'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getCurrentUser } from "../../store/session";


const ProfileListing = () =>{
    const listings = useSelector(state=>getListings(state));
    // const matchingListings = Object.keys(listings).filter(key => listings[key].ownerId === currentUser.id)
    // .map(key => listings[key]);
    const currentUser = useSelector((state)=>state.session.user)
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        dispatch(fetchListings())
        

    },[])

    console.log(currentUser.id)

    

   return (
    <div>
      {/* {matchingListings.map(listing => (
        <img src={listing.photoUrls[0]} alt={`Listing ${listing.id}`} />
      ))} */}
    </div>
  );
}


export default ProfileListing;