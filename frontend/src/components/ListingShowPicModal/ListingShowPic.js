import './listingshowpic.css';
import React from 'react';

function ListingShowPic({ photoUrl }) {
    return (
        <div className="showpicmodal">
            <img src={photoUrl} className="modalpic" alt=""/>
        </div>
    );
}

export default ListingShowPic;
