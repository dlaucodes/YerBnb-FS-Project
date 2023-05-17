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



const ListingIndex = ({searchInput}) => {
    const [list, setList] = useState(null);
    const dispatch = useDispatch();
    const [search, setSearch] = useState(searchInput)
    
    // console.log(search)
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, [list]);
    
    
    useEffect(()=>{
        dispatch(fetchReviews())   
    }, [])
    
    if (list){
        const array = Object.values(list)
        const listings = Object.values(array.reverse())
        const listingsArray = Object.values(listings[0])
        const showArray = listingsArray.reverse()
        const filteredArray = showArray
        
       
        // .filter(item => (item.city).toLowerCase().includes(search))

        
    //     const showArray = showArray.filter((item) => {
          
    //     const lowercaseSearch = searchInput.toLowerCase();
    //     const city = item.city ? item.city.toString() : "";
      
    //   return (
    //     searchInput === "" || // Show all items if searchInput is empty
    //     item.city.toLowerCase().includes(lowercaseSearch)
        
    //   );
    // });
    //     showArray is an array of objects that contain each listing's info
        
        return (
            <>
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