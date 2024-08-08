import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import csrfFetch from "../../store/csrf";
import { getListings } from "../../store/listing";
import Listing from "./Listing";
import "./listing.css"
import Profile from '../Profile'
import MapContainer from "../Map";
import { fetchReviews } from "../../store/review"
import Search from "../Search";
import '../../components/Search/Search.css'



const ListingIndex = () => {
    const [list, setList] = useState(null);
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState("")
    const loweredSearch = searchInput.toLowerCase()
 
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, []);
    
    
    useEffect(()=>{
        dispatch(fetchReviews())   
    }, [list])
    
    if (list){
        const array = Object.values(list)
        const listings = Object.values(array.reverse())
        const listingsArray = Object.values(listings[0])
        const showArray = listingsArray.reverse()
        const filteredArray = showArray.filter((item) => {
        const lowercaseSearch = searchInput.toLowerCase();
        return (
        searchInput === "" || 
        (item.city && item.city.toLowerCase().includes(lowercaseSearch)) ||
        (item.state && item.state.toLowerCase().includes(lowercaseSearch))
      );
    });
        
    
        
        return (
            <>
            
        <form className="search-bar">
            <input className="search-input"
            type="text"
            action="search"
            placeholder="Search by Location" onChange={(e)=> setSearchInput(e.target.value)}>
                
            </input>
            <div className='search-icon'>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" height="12px" width="12px" display="block" stroke="currentcolor" strokeWidth="5.33333" overflow="visible"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
            </form>
           
        <div className="listing-page">
            <div className="listing-filter">
                {/* <div className="filter">
                    filter
                </div> */}
            </div>
            <div className="listing-bottom">
                <div className="listing-container">
                
                    {filteredArray
                    // .filter((item)=>{
                    //     return search === '' ? item 
                    //     : item.city.includes(search);
                    // })
                    .map((item, i) => (
                        <div key={i}>
                        
                    <Listing listingItem={item} />
                    </div>
                    ))}
                </div>
                <div className="map">
                    <MapContainer listingArray={filteredArray} />    
                </div>
            </div>

        </div>
        </>
    );
    }else{
        return <div> loading...</div>
    }
};

export default ListingIndex;