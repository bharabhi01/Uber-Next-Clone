import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoieW9hYmhpeW8iLCJhIjoiY2t4YWpzMjY2MHE3ejJ1b2MycGNianUxZyJ9.vkJuAQDwMvet4svWZHwO5g';


const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [78.8718, 21.7679],
        zoom: 3,
        });

        if(props.pickupCoordinates) {
            addtoMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates) {
            addtoMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates, props.pickupCoordinates    
            ], {
                padding:60
            })
        }
       
        },[props.pickupCoordinates, props.dropoffCoordinates]);

        const addtoMap = (map, coordinates) => {
            const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
        }


    return (
        <Wrapper id = 'map'>
            
        </Wrapper>
    )
}

export default Map


const Wrapper = tw.div`
flex-1 h-1/2
`

