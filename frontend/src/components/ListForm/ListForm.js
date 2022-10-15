import {useState} from 'react'

function Form (){
    const [title,setTitle] = useState ("")

    const handleInput = e =>{
        e.preventDefault();
        setTitle("");
    }
    
    return (
        <form onSubmit = {handleSubmit}>
        <label htmlFor="listing-title"> Title of Listing</label>
        <input type="text"
            id="list-title"
            value={title}
            onChange={handleInput}/>
        <button>Make a new Listing!</button>
        </form>
        
    )
}

export default Form;

