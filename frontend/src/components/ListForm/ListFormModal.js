import "./listform.css"
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

const ListForm = ({setShowListFormModal}) =>{
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title,setTitle] = useState ("")
    const [photoFile, setPhotoFile] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null)
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [lat, setLat] = useState("")
    const [lng, setLng] = useState("")
    
    
    const owner = useSelector(({session}) => session.user);

    const handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('listing[price]', price);
        formData.append('listing[title]', title);
        formData.append('listing[description]', description);
        formData.append('listing[location]', location );
        formData.append('listing[lat]', lat );
        formData.append('listing[lng]', lng);
        formData.append('listing[owner_id]', owner.id);


        if (photoFile) {
            formData.append('listing[photo]', photoFile)
        }
        const response = await fetch('api/listings', {
            method: 'POST',
            body: formData
        })

        if (response.ok) {
            const message = await response.json();
            // debugger
            console.log(message.message);
            setTitle("")
            setPhotoFile(null)
            setPhotoUrl(null)
            setDescription("")
            setPrice("")
            setLocation("")
            setLat("")
            setLng("")
        }
    }
    
    const handleFile = e =>{
        const file = e.currentTarget.files[0];
        setPhotoFile(file);
    }
    
    // console.log(photoFile)
    return (
        <>
        <div onClick={() => setShowListFormModal(false)}  className="close-modal"><span >X<p>Sign up</p></span>
      </div>
        <form id="listform" onSubmit = {handleSubmit}>
        <label htmlFor="listing-title"> Title</label>
        <input type="text"
            id="list-title"
            value={title}
            onChange={e => setTitle(e.target.value)}/>
            <label htmlFor="listing-title"> Price</label>
        <input type="float"
            id="list-price"
            value={price}
            onChange={e => setPrice(e.target.value)}/>
            <label htmlFor="listing-title">Description</label>
         <input type="text"
            id="list-description"
            value={description}
            onChange={e => setDescription(e.target.value)}/>
            <label htmlFor="listing-title"> Location</label>
         <input type="text"
            id="list-location"
            value={location}
            onChange={e =>setLocation(e.target.value)}/>
              <label htmlFor="listing-lat">Lat</label>
        <input type="float"
            id="list-lat"
            value={lat}
            onChange={e =>setLat(e.target.value)}/>
              <label htmlFor="listing-title"> Lng</label>
        <input type="float"
            id="list-lng"
            value={lng}
            onChange={e =>setLng(e.target.value)}/>
        <input type="file" onChange={handleFile}/>
        <button>Make a new Listing!</button>
        </form>
      </>  
    )
}

export default ListForm;

