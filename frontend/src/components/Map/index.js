import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import './Map.css'
import { NavLink } from 'react-router-dom';
import icon from '../../assets/icon.png'



const MapContainer = (props) => {
    const locations = [];
    const listings = props.listings
    const [selected, setSelected] = useState({})
    
    
    
    const onSelect = item =>{
        setSelected(item)
    }

  
    for(const key in listings){
        const listing = listings[key]
        const listingId = listing.id
  
        locations.push({
            id: listingId,
            loc: listing.location,
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
        lat: 40.72780, 
        lng: -73.96675
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
                    <div>{selected.loc}</div>
                    <div>${selected.price} night</div>
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



