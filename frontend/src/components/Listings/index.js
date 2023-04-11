import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import csrfFetch from "../../store/csrf";
import { getListings } from "../../store/listing";
import Listing from "./Listing";
import "./listing.css"
import Profile from '../Profile'
import MapContainer from "../Map";
import {fetchReviews} from "../../store/review"



const ListingIndex = () => {
    const [list, setList] = useState(null);
    const test = useSelector(state=> getListings(state));
    const dispatch = useDispatch();
    const reviews = useSelector(state=> state.review.reviews)
    const review = []
    
    for(const key in reviews){
        const review = reviews[key]
        const listingId = review.listing_id

        console.log(review)
        console.log(review.listingId)
    }
    
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, []);
    

    useEffect(()=>{
        dispatch(fetchReviews())
        
    }, [])

    if (list){
        let array = Object.values(list)
        // let showArray = array.reverse()
        let listings = Object.values(array.reverse())
        let listingsarray = Object.values(listings[0])
        const showArray = listingsarray.reverse()
    
        // console.log(array)
        // console.log(listings)
        // was used to test for the data 
        
        
        
        
    return (
        <>
        <div className="listing-page">
            <div className="listing-container">
                {showArray.map((item, i) => (
                <div key={i}>
   
                <Listing listingItem={item} />
                
                </div>
  ))}
            </div>
            <div className="map">
                 <MapContainer listings={showArray} />
                
            </div>
        </div>
        </>
    );
    }else{
        return <div> loading...</div>
    }
};

export default ListingIndex;