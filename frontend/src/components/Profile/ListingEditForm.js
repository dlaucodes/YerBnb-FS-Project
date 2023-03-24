import "./ListEdit.css"
import {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { updateListing } from "../../store/listing";
import { useParams } from "react-router-dom";

const ListingEditForm = ({listingId, setShowListingEditModal}) =>{
    const dispatch = useDispatch();
    const [title,setTitle] = useState ("")
    const [photoFile, setPhotoFile] = useState(null);
    const [photoFile2, setPhotoFile2] = useState (null);
    const [photoFile3, setPhotoFile3] = useState (null);
    const [photoFile4, setPhotoFile4] = useState (null);
    const [photoFile5, setPhotoFile5] = useState (null);
    const [photoUrl, setPhotoUrl] = useState(null);
    const [photoUrl2, setPhotoUrl2] = useState(null);
    const [photoUrl3, setPhotoUrl3] = useState(null);
    const [photoUrl4, setPhotoUrl4] = useState(null);
    const [photoUrl5, setPhotoUrl5] = useState(null);
    const [files, setFiles] = useState(null);
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const owner = useSelector(({session}) => session.user); 
    
    
    console.log(listingId, title, "yo")

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
        formData.append('listing[id]', listingId)

        

        if (files && files.length > 0 && files.length < 6) {
            files.forEach((file)=> {
                formData.append('listing[photos][]', file)

            })
        }
        
        console.log(setShowListingEditModal)   
        dispatch(updateListing(formData, listingId))
        setShowListingEditModal(false)
        
    }
    
    
    const handleFile = e =>{
        const file = e.currentTarget.files[0];
        const file2 = e.currentTarget.files[1];
        const file3 = e.currentTarget.files[2];
        const file4 = e.currentTarget.files[3];
        const file5 = e.currentTarget.files[4];
        const currentFiles = e.currentTarget.files;
        const filesList = [];
        for (let i = 0; i < currentFiles.length; i++) {
        filesList.push(currentFiles[i]);
    }
        setFiles(filesList);
        if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPhotoFile(file);
        setPhotoUrl(fileReader.result);
      };
    } else setPhotoUrl(null);
      if (file2) {
      const fileReader2 = new FileReader();
      fileReader2.readAsDataURL(file2);
      fileReader2.onload = () => {
        setPhotoFile2(file2);
        setPhotoUrl2(fileReader2.result);
      };
    } else setPhotoUrl2(null);
      if (file3) {
      const fileReader3 = new FileReader();
      fileReader3.readAsDataURL(file3);
      fileReader3.onload = () => {
        setPhotoFile3(file3);
        setPhotoUrl3(fileReader3.result);
      };
    } else setPhotoUrl3(null);
      if (file4) {
      const fileReader4 = new FileReader();
      fileReader4.readAsDataURL(file4);
      fileReader4.onload = () => {
        setPhotoFile4(file4);
        setPhotoUrl4(fileReader4.result);
      };
    } else setPhotoUrl4(null);
      if (file5) {
      const fileReader5 = new FileReader();
      fileReader5.readAsDataURL(file5);
      fileReader5.onload = () => {
        setPhotoFile5(file5);
        setPhotoUrl5(fileReader5.result);
      };
    } else setPhotoUrl5(null);
  }

    
    
    return (
        <>
        <div className="modal-content animate-bottom">

        <form id="listform" onSubmit = {handleSubmit}>
            <div className="modal-heading-create">
                <div onClick={() => setShowListingEditModal(false)} className="close-modal">
                    <span >╳</span>
                </div>
                <div id="create-text">Edit Listing</div>
            </div>
            <div className="listingform-container">
            <div className="input-field">
                <input type="text"
                    className="list-title"
                    value={title}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="float"
                    className="list-price"
                    value={price}
                    placeholder="Price"
                    onChange={e => setPrice(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                 <input type="text"
                    className="list-location"
                    value={location}
                    placeholder="Location"
                    onChange={e =>setLocation(e.target.value)}/>
                      <label htmlFor="listing-lat"></label>
                <input type="float"
                    className="list-lat"
                    value={lat}
                    placeholder="Latitude"
                    onChange={e =>setLat(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="float"
                    className="list-lng"
                    value={lng}
                    placeholder="Longitude"
                    onChange={e =>setLng(e.target.value)}/>
                 <input type="text"
                    className="list-description"
                    value={description}
                    placeholder="Description"
                    onChange={e => setDescription(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <input type="file" name="file" onChange={handleFile} accept="image" multiple/>
                <div className="create-div"></div>
                <button className="listing-button" type="submit">Edit Listing</button>
            </div>
            </div>
        </form>
        </div>
      </>  
    )
}



export default ListingEditForm;
