import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


const MapContainer = () => {
    const listings = useSelector(state=> state.listing)
    
    console.log(listings)


    

    const locations = [ {
      name: "Location 1",
      location: { 
        lat: 40.73954,
        lng: -73.937 
      }}]

     
    

    const mapStyles = {        
        height: "auto",
        width: "100%"};
    
  
    const defaultCenter = {
        lat: 40.730610, 
        lng: -73.935242
    }


    // useEffect(()=>{

    // }, [listingsItem])

  
  
  return (
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}>

          {
            locations.map(item => {
              return (
              <Marker key={item.name} position={item.location}/>
              )
            })
         }
        </GoogleMap>  
     </LoadScript>
  )
}

export default MapContainer;



