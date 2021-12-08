import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiaW5zNHciLCJhIjoiY2t2bndqc2d4M2V0MzJ3bWx4d2RlYWxjdyJ9.LPOMWdxnM8NBhEVKV8Hayg';


export default function Home() {

  useEffect( () => { // only loads once
      const map = new mapboxgl.Map({
        container: "map",
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [-99.29811, 39.39172],
        zoom: 3,
    });
  });

  return (
    <Wrapper>
      <Map id="map">Map</Map>
      <ActionItems>Start</ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  h-screen bg-blue-300 flex flex-col
`

const Map = tw.div`
  flex-1
`

const ActionItems = tw.div`
  bg-green-300 flex-1
`