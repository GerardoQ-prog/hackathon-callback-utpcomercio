"use client";

import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapFilters from "../mapFilters/MapFilters";
import { addGeolocateToMap, addMarkersToMap, centerMap, position, geoOptions, popupOptions, centerLocation } from "./actions"
import { useRouter } from "next/router";

const Mapbox = ({ markers = [] }) => {

  const router = useRouter()

  const mapContainer = useRef(null)
  const map = useRef(null)
  
  useEffect(() => {
    if(map.current) {
      console.log(map.current.getZoom());
      // map.current.flyTo({ zoom: 12, speed: 0.5, })
      return
    }
    
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? '';
    
    const geolocate = new mapboxgl.GeolocateControl(geoOptions)
    const popup = new mapboxgl.Popup(popupOptions);

    map.current =  new mapboxgl.Map ({ 
      attributionControl: false,
      container : mapContainer.current, 
      style :  'mapbox://styles/mapbox/dark-v10', 
      projection: 'globe',
      center :  position.coords,  // centro del mapa Chad 
      zoom :  position.zoom
    })

    map.current.on("load", () => {
      addGeolocateToMap(map.current, geolocate)
      addMarkersToMap(markers, map.current, popup, router)
      centerMap(map.current, geolocate)
    })

  }, []);

  return (
    <div>
      <MapFilters onMapSearch={(feature) => centerLocation(map.current, feature)} />
      <div style={{ width: '100vw', height: '100vh' }} ref={mapContainer}></div>
    </div>
  )
}

export default Mapbox