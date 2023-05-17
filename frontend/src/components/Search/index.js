import './Search.css';
import React, {useState} from 'react';


const Search = ()=>{
    const [searchInput, setSearchInput] = useState("")

    const handleSearch = (e)=> {
        setSearchInput();
    }

    return(
        <>
        <form className="search-bar" action="search">
            <div className="search-input">
                Start your search
            </div>
            <div className='search-icon' onClick={()=>{handleSearch()}}>
                <svg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" height="12px" width="12px" display="block" stroke="currentcolor" strokeWidth="5.33333" overflow="visible"><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
            </div>
        </form>
        </>
    )


}



export default Search;