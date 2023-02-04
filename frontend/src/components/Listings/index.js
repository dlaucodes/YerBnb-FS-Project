import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import csrfFetch from "../../store/csrf";
import { getListings } from "../../store/listing";
import Listing from "./Listing";
import "./listing.css"


const ListingIndex = () => {
    const [list, setList] = useState();
    const test = useSelector(state=> getListings(state))
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, []);

    if (list){
        let array = Object.values(list)
        // let showArray = array.reverse()
        let listings = Object.values(array)
        
        let listingsarray = Object.values(listings[0])
    
        console.log(array)
        console.log(listings)
       
        
        
        
    return (
        <div className="listing-container">
            {listingsarray.map((item, i) => (
                <Listing key={i} listingItem={item}/>
            ))}
        </div>
    );
    }else{
        return <div> loading</div>
    }
    

};

export default ListingIndex;