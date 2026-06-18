import { useRef, useEffect, useState } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import '../App.css'

const INITIAL_CENTER: [number, number] = [-99.55446, 36.84276]
const INITIAL_ZOOM = 10.12


const Mapbox = () => {

  const mapRef = useRef<mapboxgl.Map | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)

  const [center, setCenter] = useState(INITIAL_CENTER)
  const [zoom, setZoom] = useState(INITIAL_ZOOM)
  
  
  //render mapbox map
  useEffect(() => {

    if (!mapContainerRef.current) return

    mapRef.current = new mapboxgl.Map({
      accessToken: (import.meta as any).env.VITE_MAPBOX_TOKEN,
      container: mapContainerRef.current!,
      style: 'mapbox://styles/taylorspencer22/cmqaffwub002n01qt9egtb92k',
      center: [-99.55446, 36.84276],
      zoom: 3.22
    });

    mapRef.current.on('move', () => {
      // get the current center coordinates and zoom level from the map
      const newCenter = mapRef.current?.getCenter()
      const newZoom = mapRef.current?.getZoom()

      //update state
      setCenter(newCenter ? [newCenter.lng, newCenter.lat] : INITIAL_CENTER)
      setZoom(newZoom ?? INITIAL_ZOOM)
    })

    return () => {
        mapRef.current!.remove()
      }
  }, []);

  const handleButtonClick = () => {
    mapRef.current!.flyTo({
      center: INITIAL_CENTER,
      zoom: INITIAL_ZOOM
    });
  }
  
  return (
    <>
    <div className='map-container-wrapper'>
      <div className="map-coordinates">
      Longitude: {center[0].toFixed(4)} | Latitude: {center[1].toFixed(4)} | Zoom: {zoom.toFixed(2)}
    </div>
    <button className='reset-button' onClick={handleButtonClick}>
      Reset
      </button>
      <div id='map-container' ref={mapContainerRef} />
      </div>
    </>
  )
}

export default Mapbox
