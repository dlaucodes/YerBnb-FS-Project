import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { NavItem } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import ListingEditForm from '../Profile/ListingEditForm';
import { fetchListings } from '../../store/listing';





const MapContainer = (props) => {

    const locations = [{}];
    const listings = props.listings
    const photos = {};
    const test = {}
    const [selected, setSelected] = useState("")
    
    const onSelect = item =>{
        setSelected(item)
    }

  
    for(const key in listings){
        const listing = listings[key]
        const listingId = listing.id
  
        locations[listingId] = {
            id: listingId,
            location:{ 
            lat: listing.lat,
            lng: listing.lng
            }   
        }
    }    

    console.log(locations)


    const mapStyles = {        
        height: "auto",
        width: "100%"};
    
  
    const defaultCenter = {
        lat: 40.7085, 
        lng: -73.9520
    }


  return (
      <>
     <LoadScript
       googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>

        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={14}
          center={defaultCenter}
          disableDefaultUI={true}
          clickableIcons={false}>
              
          {
            locations.map((item)=> {   
                console.log(item.id)
              return (
                  <Marker key={item.id} position={item.location} onClick={()=> onSelect(item.location)}/>
                  )
            })
                    }
    
        </GoogleMap>  
     </LoadScript>
     </>
  )
}

export default MapContainer;



