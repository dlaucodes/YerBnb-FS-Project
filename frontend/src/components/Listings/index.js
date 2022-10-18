import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";
import "./listing.css"

export const ListingIndex = () => {
    const [list, setList] = useState([]);
    
    useEffect(() => {
        const res = csrfFetch('/api/listings').then(res => {
            return res.json();
        }).then(data => {
            setList(data);
        });
    }, []);

    const listings = list.map(item => (
        <li key={item.id}>
            <div>{item.title}</div>
            <div className="listing-img">
            <img src={`${item.photoUrl}`} />
            </div>
            <div>{item.price}</div>
            </li>
    ));

    return (
        <ul>
            {listings}
        </ul>
    );
};

export default ListingIndex;