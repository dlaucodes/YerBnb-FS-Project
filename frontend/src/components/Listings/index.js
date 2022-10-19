import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";
import Listing from "./Listing";
import "./listing.css"


const ListingIndex = () => {
    const [list, setList] = useState({});
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ({...oldData, ...data}));
        });
    }, []);

    if (list){
        let array = Object.values(list)
    return (
        <div className="listing-container">
            {array.map((item, i) => (
                <Listing key={i} item={item}/>
            ))}
        </div>
    );
    }else{
        return <div></div>
    }
};

export default ListingIndex;