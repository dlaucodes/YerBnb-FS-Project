import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import './Map.css'
import { NavLink } from 'react-router-dom';
import icon from '../../assets/icon.png'



const MapContainer = ({listingArray, reviewsArray}) => {
    const locations = [];
    const listings = listingArray
    const reviews = reviewsArray
    const [selected, setSelected] = useState({})
  
    const onSelect = item =>{
        setSelected(item)
    }

  
    for(const key in listings){
        const listing = listings[key]
        const listingId = listing.id
  
        locations.push({
            id: listingId,
            city: listing.city,
            state: listing.state,
            location:{ 
            lat: listing.lat,
            lng: listing.lng
            },
            photo: listing.photoUrls[0],
            price: listing.price  
        })
    }    


    const mapStyles = {        
        height: "auto",
        width: "100%"};
    
  
    const defaultCenter = {
        lat: 40.69408, 
        lng: -74.00710
    }
    
    


  return (
      <>
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}>
              
          {
            locations.map((item)=> {   
              return (
                <Marker 
            className="marker"  
            key={item.id}
            position={item.location}
            onClick={() => onSelect(item)}
            label={"$" + item.price}
            icon={icon}
              
            />
                  )
            })
                    }
                    {
            selected.location && 
            (
                <NavLink to={{pathname: `/listings/${selected.id}`}}>
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}

            >
                <div className="marker-window">
                <img src={selected.photo}/>
                    <div className="marker-listing-info">
                    <div>{selected.city},{selected.state}</div>
                    <div>${selected.price} night</div>
                    
                    {/* <div className="listing-rating">
                        <div className="rating-star">
                        <svg viewBox="0 0 32 32" height="16px" width="16px"><path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" ></path></svg>
                        </div>
                        {(() => {
                        const filteredReview = reviews.filter(review => review.listingId === selected.id);
                        const sum = filteredReview.reduce((total, review) => total + review.rating, 0);
                        const average = sum / filteredReview.length;
                        return isNaN(average) ? '' : average.toFixed(1);
                        })()}
                    </div> */}
                  </div>
                </div>
            </InfoWindow>
                </NavLink>
            )
         }
    
        </GoogleMap>  
     </LoadScript>
     </>
  )
}

export default MapContainer;



