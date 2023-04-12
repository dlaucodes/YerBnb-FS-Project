import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import csrfFetch from "../../store/csrf";
import { getListings } from "../../store/listing";
import Listing from "./Listing";
import "./listing.css"
import Profile from '../Profile'
import MapContainer from "../Map";
import { fetchReviews } from "../../store/review"



const ListingIndex = () => {
    const [list, setList] = useState(null);
    const dispatch = useDispatch();
 
    
    
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
                 <MapContainer listingArray={showArray} />    
            </div>
             
        </div>
            
            
        </>
    );
    }else{
        return <div> loading...</div>
    }
};

export default ListingIndex;