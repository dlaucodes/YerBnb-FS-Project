import React, {useEffect, useRef, useState} from 'react';
import { Wrapper } from '@googlemaps/react-wrapper';
import { useHistory } from 'react-router-dom';
import './Map.css';

function benchMap({
    lat,
    lng,
    setLat,
    setLng,
    listings,
    selectedListing,
    mapOptions = {},
    mapEventHandlers = {},
    markerEventHandlers = {}
    
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
           }));
       } 
    }, [mapRef, map, mapOptions, lat, lng]);


    useEffect(() => {
        if (map) {
            const position = {lat: lat, lng: lng, zoom: 13}
            map.setCenter(position);
        }
    }, [lat, lng])

    useEffect(()=>{
        if(map){
            const listeners = Object.entries(mapEventHandlers).map(([event, handler]) =>
            window.google.maps.event.addListner(
                map,
                event,
            (...args) => handler(...args, map)
            ));
            return ()=> listeners.forEach(window.google.maps.event.removeListener);
        }
    }, [map, mapEventHandlers]);






function benchMapWrapper(props){
    return (
        <Wrapper apiKey={process.env.REACT_APP_MAPS_API_KEY}>
            <benchMap {...props} />
        </Wrapper>
    )
}


}

export default benchMapWrapper;