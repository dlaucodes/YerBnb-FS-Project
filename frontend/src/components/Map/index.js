import React, {useEffect, useRef, useState} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import './Map.css';

function benchMap({
    
    
}) {
    const [map, setMap] = useState(null);
    const mapRef = useRef(null);
    const markers = useRef({});
    const history = useHistory();
    let center = null;
    if (map) center = map.getCenter().toJSON();


    useEffect(()=>{
       if(!map){
           setMap(new window.google.maps.Map(mapRef.current, {
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
    }, [mapRef, map, mapOptions]);


    useEffect(()=>{
    
    }
}




function benchMapWrapper(props){

}



export default benchMapWrapper;