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
    }, [list]);

    if (list){
        let array = Object.values(list)
        let showArray = array.reverse()
        let listings = Object.values(showArray)
        let listingarray = listings[0]
        console.log(listings)
        console.log(listings[0])
        console.log(listingarray[2].id)
        
        
    return (
        <div className="listing-container">
            {listingarray.map((item) => (
                <Listing key={item.id} listingItem={item}/>
            ))}
        </div>
    );
    }else{
        return <div> loading</div>
    }
    

};

export default ListingIndex;