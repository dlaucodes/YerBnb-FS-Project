import "./listform.css"
import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

const ListForm = ({setShowListFormModal}) =>{
    const dispatch = useDispatch();
    const [title,setTitle] = useState ("")
    const [photoFiles, setPhotoFiles] = useState();
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


        if (photoFiles) {
            formData.append('listing[photos]', photoFiles)
        }
        console.log(formData);
        const response = await fetch('api/listings', {
            method: 'POST',
            body: formData
        })
        if (response.ok) {
            const message = await response.json();
            setTitle("")
            setPhotoFiles(null)
            setPhotoUrl(null)
            setDescription("")
            setPrice("")
            setLocation("")
            setLat("")
            setLng("")
        }
        
        setShowListFormModal(false)
    }
    
    const handleFile = e =>{
        let SubmitPhotoFiles = [];
        // e.target.files.forEach((file) => {
        //     SubmitPhotoFiles.push(file);
        // })
        const file = e.currentTarget.files[0];
        setPhotoFiles(SubmitPhotoFiles);
    }
    
    return (
        <>
        <div className="modal-content animate-bottom">

        <form id="listform" onSubmit = {handleSubmit}>
            <div className="modal-heading-create">
                <div onClick={() => setShowListFormModal(false)} className="close-modal">
                    <span >╳</span>
                </div>
                <div id="create-text">Host your home</div>
            </div>
             <div className="hr-div">
                <hr id="divider"/>
            </div>
            <div className="input-container">
                <input type="text"
                    id="list-title"
                    value={title}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="float"
                    id="list-price"
                    value={price}
                    placeholder="Price"
                    onChange={e => setPrice(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                 <input type="text"
                    id="list-location"
                    value={location}
                    placeholder="Location"
                    onChange={e =>setLocation(e.target.value)}/>
                      <label htmlFor="listing-lat"></label>
                <input type="float"
                    id="list-lat"
                    value={lat}
                    placeholder="Latitude"
                    onChange={e =>setLat(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="float"
                    id="list-lng"
                    value={lng}
                    placeholder="Longitude"
                    onChange={e =>setLng(e.target.value)}/>
                 <input type="text"
                    id="list-description"
                    value={description}
                    placeholder="Description"
                    onChange={e => setDescription(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="file" onChange={handleFile}/>
                <div className="create-div"></div>
                <button id="listing-button" type="submit">Create New Listing</button>
            </div>
        </form>
        </div>
      </>  
    )
}

export default ListForm;

