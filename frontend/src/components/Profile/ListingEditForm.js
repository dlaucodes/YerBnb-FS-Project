import "./ListEdit.css"
import {useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { updateListing } from "../../store/listing";
import { useParams } from "react-router-dom";

const ListingEditForm = ({listingId, setShowListingEditModal}) =>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState ("")
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
    const [city, setCity] = useState("Astoria");
    const [guest, setGuest] = useState(1);
    const [bed, setBed] = useState("")
    const [bath, setBath] = useState("")
    const [bedroom, setBedroom] = useState("")
    const [pet, setPet] = useState(false)
    const [wifi, setWifi] = useState(false)
    const [kitchen, setKitchen] = useState(false)
    const [state, setState] = useState("")
    const owner = useSelector(({session}) => session.user); 
    
    const handleCity = (e)=>{
      const selectedCity = e.target.value;
      switch (selectedCity){
        case "Astoria":
          setLat(40.76214)
          setLng(-73.92131)
          setCity("Astoria");
          break;
        case "Bronx":
          setLat(40.84436)
          setLng(-73.85673)
          setCity("Bronx")
          break;
        case "Brooklyn":
          setLat(40.68647)
          setLng(-73.94359)
          setCity("Brooklyn")
          break;
        case "Flushing":
          setLat(40.75727)
          setLng(-73.83439)
          setCity("Flushing")
          break;
        case "Long Island City":
          setLat(40.74612)
          setLng(-73.95436)
          setCity("Long Island City")
          break;
        case "New York":
          setLat(40.72771)
          setLng(-74.00006)
          setCity("New York")
          break;
        case "Queens":
          setLat(40.76220)
          setLng(-73.91938)
          setCity("Queens")
          break;
        case "Williamsburg":
          setLat(40.70842)
          setLng(-73.96188)
          setCity("Williamsburg")
        default:

          break;
      }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('listing[price]', price);
        formData.append('listing[title]', title);
        formData.append('listing[description]', description);
        formData.append('listing[lat]', lat );
        formData.append('listing[lng]', lng);
        formData.append('listing[owner_id]', owner.id);
        formData.append('listing[id]', listingId)
        formData.append('listing[city]', city);
        formData.append('listing[guests]', guest);
        formData.append('listing[pets_allowed]', pet);
        formData.append('listing[kitchen]', kitchen);
        formData.append('listing[wifi]', wifi);
        formData.append('listing[state]', state);


        

        if (files && files.length > 0 && files.length < 6) {
            files.forEach((file)=> {
                formData.append('listing[photos][]', file)

            })
        }
        
        
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
                <div id="create-text">Host your home</div>
            </div>
            <div className="listingform-container">
            <div className="input-field">
                <input type="text"
                    className="list-title"
                    value={title}
                    placeholder="Title"
                    onChange={e => setTitle(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                
          <div className="bottom-row">
                <input type="float"
                    className="list-price"
                    value={price}
                    placeholder="Price"
                    onChange={e => setPrice(e.target.value)}/>
                    <label htmlFor="listing-title"></label>
                <div className="city-select">
                 <select onChange={handleCity}>
                    <option>
                      City
                    </option>
                    <option value="Astoria">
                      Astoria
                    </option>
                    <option value="Bronx">
                      Bronx
                    </option>
                     <option value="Brooklyn">
                      Brooklyn
                    </option>
                    <option value="Flushing">
                      Flushing
                    </option>
                    <option value="Long Island City">
                      Long Island City
                    </option>
                    <option value="New York">
                      New York
                    </option>
                    <option value="Queens">
                      Queens
                    </option>
                     <option value="Williamsburg">
                      Williamsburg
                    </option>
                </select>
                </div>
                <div className='state-input'>
                <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                required>
                  <option disabled value="">State</option>
                  <option value="New Jersey">NJ</option>
                  <option value="New York">NY</option>
                  
                </select>
              </div>
                <div className="guest-select">
                  <select className='guests-input'
              value={guest}
              onChange={(e) => setGuest(e.target.value)}
              required
              >
                <option value="" disabled hidden></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
              </select>
              </div> 

              <div className="bedroom-select">
                <select className='bedrooms-input'
                  value={bedroom}
                  onChange={(e) => setBedroom(e.target.value)}
                  required
                >
                  <option value="" disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
              
              <div className="bed-select">
                <select className='beds-input'
                    value={bed}
                    onChange={(e) => setBed(e.target.value)}
                    required
                >
                  <option value="" disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                <span className="beds-floating-label">Beds</span>
              </div>

              <div className="bath-select">
                <select className='bathrooms-input'
                  value={bath}
                  onChange={(e) => setBath(e.target.value)}
                  required
                  >
                  <option value="" disabled hidden></option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <span className="bathrooms-floating-label">Bathrooms</span>
              </div>
            </div>

              <div className="check-box">
                <div className='wifi-checkbox'>
                  <label htmlFor="wifi-checkbox">Wifi</label>
                  <input 
                    id='wifi-checkbox'
                    type="checkbox" 
                    onChange={()=>setWifi(!wifi)}/>
                </div>
                <div className='pet-checkbox'>
                  <label htmlFor="pet-checkbox">Pets Allowed</label>
                  <input 
                    id='pet-checkbox'
                    type="checkbox" 
                    onChange={()=>setPet(!pet)}/>
                </div>
                <div className='kitchen-checkbox'>
                  <label htmlFor="kitchen-checkbox">Kitchen</label>
                  <input 
                    id='kitchen-checkbox'
                    type="checkbox" 
                    onChange={()=>setKitchen(!kitchen)}/>
                </div>
              </div>
                 
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
