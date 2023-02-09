import React, {useEffect, useRef, useState} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import './Map.css';

function Map({
    
    
}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null)


    useEffect(()=>{
       if(!map){
           setMap(new window.__googleMapsCallback.maps.Map(mapRef.current, {
               center: {
                   lat: 40.74363402543966,
                   lng: -73.98377122848856
               },
               zoom: 13,
               mapId: "49aa6f67e21bd8eb",
               gestureHandling: "greedy",
               clickableIcons: false,
               diableDefaultUI: true,
               ...mapOptions,
           }))
       } 
    })


    useEffect(()=>{
        
    }
}




function MapWrapper(props){

}



export default MapWrapper;