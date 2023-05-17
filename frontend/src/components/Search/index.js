import './Search.css';
import React, {useState} from 'react';
import ListingIndex from '../Listings';


const Search = ()=>{
    const [searchInput, setSearchInput] = useState("")
    const listingIndexComponent = searchInput ? (
    <ListingIndex searchInput={searchInput} />
    ) : null;



    if(1 > 0){
        return(
        <>
        <form className="search-bar">
            <input className="search-input"
            type="text"
            action="search"
            placeholder="search" onChange={(e)=> setSearchInput(e.target.value)}>
                
            </input>
            <div className='search-icon'>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" height="12px" width="12px" display="block" stroke="currentcolor" strokeWidth="5.33333" overflow="visible"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
        </form>
        {/* {listingIndexComponent} */}
        </>

        )

    }else{
        <div className="hidden">
        </div>
    }

}



export default Search;