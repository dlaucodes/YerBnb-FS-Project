import './Search.css';
import React, {useState} from 'react';

const Search = ()=>{

    return(
        <>
        <div className="search-bar">
            <div className="search-input">
                search bar

            </div>
            <div className='search-icon'>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" height="12px" width="12px" display="block" stroke="currentcolor" strokeWidth="5.33333" overflow="visible"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
        </div>
        </>
    )


}



export default Search;