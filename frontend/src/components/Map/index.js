import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';


const MapContainer = ({listingItem}) => {
  
  const mapStyles = {        
    height: "auto",
    width: "100%"};
    
  
  const defaultCenter = {
    lat: 40.730610, lng: -73.935242
  }

//   const locations = [{location: {lat: listingItem.lat, lng: listingItem.lng}}]

//   console.log(listingItem)

//   console.log(locations)
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}>
              {/* {
              locations.map(item =>{
              return (
              
                  <Marker position={item.location}/>
                  )
              })
            } */}
        </GoogleMap>  
     </LoadScript>
  )
}

export default MapContainer;



