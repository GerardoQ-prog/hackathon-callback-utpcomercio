"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { addGeolocateToMap, addMarkersToMap, centerMap, defaultCenter, geoOptions, popupOptions } from "./actions"

const Mapbox = ({ markers = [] }) => {

  const mapContainer = useRef(null)
  const map = useRef(null)
  
  useEffect(() => {
    if(map.current) return
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? '';
    
    const geolocate = new mapboxgl.GeolocateControl(geoOptions)
    const popup = new mapboxgl.Popup(popupOptions);

    map.current =  new mapboxgl.Map ({ 
      attributionControl: false,
      container : mapContainer.current, 
      style :  'mapbox://styles/mapbox/dark-v10', 
      projection: 'globe',
      center :  [15.4542,  18.7322],  // centro del mapa Chad 
      zoom :  1.8
    })

    map.current.on("load", () => {
      addGeolocateToMap(map.current, geolocate)
      addMarkersToMap(markers, map.current, popup)
      centerMap(map.current, geolocate)
    })

  }, []);

  return (
    <div>
      <div style={{ width: '100vw', height: '100vh' }} ref={mapContainer}></div>
    </div>
  )
}

export default Mapbox