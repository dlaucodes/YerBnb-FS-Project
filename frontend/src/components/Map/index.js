import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import './Map.css'
import { NavLink } from 'react-router-dom';



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
        lat: 40.7085, 
        lng: -73.9520
    }
    
    const markerOptions = {
      path:
        `
                  M 1,0 
                  L 2,0 
                  A 1 1 0 0 1 3,1
                  A 1 1 0 0 1 2,2
                  L 1,2 
                  A 1 1 0 0 1 0,1
                  A 1 1 0 0 1 1,0
                  z
                `,
      fillColor: "white",
      fillOpacity: 1,
      strokeColor: "black",
      strokeWeight: 1,
      scale: 15,
      anchor: null,
      labelOrigin: {}
};


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
            icon={markerOptions}   
            />
                  )
            })
                    }
                    {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
                <div className="marker-window">
                <NavLink to={{pathname: `/listings/${selected.id}`}}>
                <img src={selected.photo}/>
                </NavLink>
                  ${selected.price}
                </div>
            </InfoWindow>
            )
         }
    
        </GoogleMap>  
     </LoadScript>
     </>
  )
}

export default MapContainer;



