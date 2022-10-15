import { useEffect, useState } from "react";
import csrfFetch from "../../store/csrf";

const ListingIndex = () => {
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
            <p>{item.title}</p>
            <img src={`${item.photoUrl}`} />
        </li>
    ));

    return (
        <ul>
            {listings}
        </ul>
    );
};

export default ListingIndex;