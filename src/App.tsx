import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import './App.css'

function App() {

  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  
  useEffect(() => {
    mapRef.current = new mapboxgl.Map({
      accessToken: import.meta.env.VITE_MAPBOX_TOKEN,
      container: mapContainerRef.current,
      // style: 'mapbox://styles/mapbox/streets-v11',
      center: [-99.55446, 36.84276],
      zoom: 3.22
    });

    return () => {
        mapRef.current.remove()
      }
  }, []);

  return (
    <>
      <div id='map-container' ref={mapContainerRef} />
    </>
  )
}

export default App