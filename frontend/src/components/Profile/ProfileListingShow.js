import React from "react";
import {useParams } from "react-router-dom";
import { getListings, fetchListings } from "../../store/listing";
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from "react";
import { getCurrentUser } from "../../store/session";

const ProfileListing = () =>{
    const listings = useSelector(state=>getListings(state));
    const currentUser = useSelector((state)=>state.session.user)
    const dispatch = useDispatch();
    const listingsArray = Object.values(listings[0])
   
    

    console.log(listingsArray[0])
    
    
    useEffect(()=>{
        dispatch(fetchListings())
    },[])

   console.log(currentUser)
  

    
    if(currentUser){
        return(
            <div className="profile-listing">
               test 
            </div>
        )
    }
}

export default ProfileListing;