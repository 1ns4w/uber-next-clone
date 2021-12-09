import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5zNHciLCJhIjoiY2t2bndqc2d4M2V0MzJ3bWx4d2RlYWxjdyJ9.LPOMWdxnM8NBhEVKV8Hayg';

function Map() {

    useEffect( () => { // only loads once
        const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29811, 39.39172],
          zoom: 3,
      });
    });

    return (
        <Wrapper id="map"></Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`