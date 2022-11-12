import mapboxgl from "mapbox-gl";

export const defaultCenter = [-77.042793, -12.046374] // Lima
export const geoOptions = {
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserHeading: true,
  fitBoundsOptions: {
    maxZoom: 15
  }
}
export const popupOptions = {
  closeButton: true,
  closeOnClick: true,
  className: "popup__site_info",
  maxWidth: '300px',
  // closeOnMove: true
}

export function addGeolocateToMap (map = {}, geolocate) {
  map.addControl(geolocate);
}

export function addMarkersToMap (markers = [], map = {}, popup = {}) {
  
  for (const feature of markers) {
    const el = document.createElement("div");
    el.className = "marker";
    const marker = new mapboxgl.Marker(el).setLngLat(
      feature.geometry.coordinates
    );
    const markerPopup = new mapboxgl.Popup({ offset: 25, className: 'popup__site_info' })
      .setHTML(
        `
        <div class="cover">
          <img src="${feature.properties.img}" alt="${feature.properties.title}" />
        </div>
        <div class="site">
          <div class="description">
            <h2 class="title">${feature.properties.title}</h2>
            
          </div>
        </div>
        `  
        /* <span class="subtitle">${feature.properties.description}</span> */
      );
    marker.setPopup(markerPopup)
    marker.addTo(map);
  }

  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: markers
    },
  })

  map.addLayer({
    id: "places",
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "#af0000",
      "circle-radius": 10,
      "circle-stroke-width": 2,
      "circle-stroke-color": "#ffffff",
    },
  });

  map.on("mouseenter", "places", (e) => {
    map.getCanvas().style.cursor = "pointer";
    const coordinates = e.features[0].geometry.coordinates.slice();
    const title = e.features[0].properties.title;
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    popup.setLngLat(coordinates).setHTML(title).addTo(map);
  });

  /* map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
    popup.remove();
  }); */
}

export function centerMap (map = {}, geolocate = {}) {
  setTimeout(() => map.flyTo({ center: defaultCenter, speed: 0.4 }), 400);
  setTimeout(() => {
    globalThis.navigator.geolocation.getCurrentPosition(
      () => {
        geolocate.trigger()
      },
      () => { // on error
        map.flyTo({
          center: defaultCenter,
          zoom: 12,
          speed: 0.5,
        });
      });
  }, 2000);
}