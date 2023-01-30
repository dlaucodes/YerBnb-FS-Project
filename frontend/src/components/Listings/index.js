import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import csrfFetch from "../../store/csrf";
import { getListings } from "../../store/listing";
import Listing from "./Listing";
import "./listing.css"


const ListingIndex = () => {
    const [list, setList] = useState({});
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
        let showArray = array.reverse()
    return (
        <div className="listing-container">
            {showArray.map((item, i) => (
                <Listing key={i} listingItem={item}/>
            ))}
        </div>
    );
    }else{
        return <div></div>
    }
};

export default ListingIndex;