import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";
import Listing from "./Listing";
import "./listing.css"


const ListingIndex = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList((oldData) => ([...oldData, ...data]));
        });
    }, []);

    return (
        <div className="listings-container">
            {list.map((item, i) => (
                <Listing key={i} item={item}/>
            ))}
        </div>
    );
};

export default ListingIndex;