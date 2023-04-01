import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import ListingEditForm from '../Profile/ListingEditForm';
import { fetchListings } from '../../store/listing';





const MapContainer = (props) => {
    // const  = useSelector(state=> state.listing)
    const locations = {};
    const test = "1"
    const listings = props.listings
           

    console.log(props, "props")
  
    for(const key in listings){
        const listing = listings[key]
        console.log(listing, "listing")
        const listingId = listing.id
        locations[listingId] = { 
            lat: listing.lat,
            lng: listing.lng
            
        }
    }    

    console.log(locations, "locations")

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
      <>
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={12}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}>
              
          {
            Object.values(locations).map((item, i )=> {
              return (
              <Marker key={i} position={item}/>
              )
            })
         }
        </GoogleMap>  
     </LoadScript>
     </>
  )
}

export default MapContainer;



