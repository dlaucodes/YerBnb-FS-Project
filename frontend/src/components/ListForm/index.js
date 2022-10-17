import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";

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
            <img src={`${item.photoUrl}`} />
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