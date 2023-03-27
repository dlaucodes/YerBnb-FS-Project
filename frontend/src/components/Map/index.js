import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({listingItem}) => {
  
  const mapStyles = {        
    height: "auto",
    width: "100%"};
    
  
  const defaultCenter = {
    lat: 40.730610, lng: -73.935242
  }
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}  
        />
     </LoadScript>
  )
}

export default MapContainer;



