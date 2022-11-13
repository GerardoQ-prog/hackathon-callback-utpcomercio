import mapboxgl from "mapbox-gl";

export let position = {
  coords: [15.4542,  18.7322],
  zoom: 2
}
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
  closeButton: false,
  closeOnClick: true,
  className: "popup__single_info",
  maxWidth: '250px',
  // closeOnMove: true
}

export function addGeolocateToMap (map = {}, geolocate) {
  map.addControl(geolocate, 'bottom-right');
}

export function addMarkersToMap (markers = [], map = {}, popup = {}, router) {

  for (const feature of markers) {
    const el = document.createElement("div");
    el.className = feature.properties.type || "marker";
    el.setAttribute("title", feature.properties.title)
    const marker = new mapboxgl.Marker(el).setLngLat(
      feature.geometry.coordinates
    );

    const divEl = document.createElement("div")
    const htmlEl = `
      <div class="cover">
        <img src="${feature.properties.img}" alt="${feature.properties.title}" />
      </div>
      <div class="site">
        <div class="description">
          <h2 class="title">${feature.properties.title}</h2>
          <button title="Presiona para ver más">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7984 1.11696C10.9842 1.03974 11.1835 1 11.3847 1C11.5858 1 11.7851 1.03974 11.9709 1.11696C12.1566 1.19419 12.3253 1.30738 12.4672 1.45007L12.4683 1.45121L14.5503 3.55816C14.6922 3.69921 14.805 3.86683 14.8821 4.0515C14.9596 4.23719 14.9996 4.43639 14.9996 4.63762C14.9996 4.83885 14.9596 5.03805 14.8821 5.22374C14.8047 5.40906 14.6914 5.57721 14.5488 5.71857L14.5479 5.71939L11.3789 8.88112C11.1724 9.08719 10.8379 9.0868 10.6318 8.88025C10.4257 8.67371 10.4261 8.33921 10.6327 8.13314L13.8048 4.96836C13.8486 4.92494 13.8834 4.87336 13.9071 4.8166C13.9308 4.75985 13.943 4.69902 13.943 4.63762C13.943 4.57622 13.9308 4.51539 13.9071 4.45864C13.8834 4.40188 13.8486 4.35029 13.8048 4.30687L13.8005 4.3027L11.7179 2.19498C11.6745 2.15141 11.6223 2.11632 11.5653 2.09261C11.5081 2.06883 11.4467 2.05658 11.3847 2.05658C11.3226 2.05658 11.2612 2.06883 11.204 2.09261C11.1468 2.11637 11.095 2.15114 11.0515 2.19486L7.88106 5.38785C7.67549 5.59489 7.341 5.59607 7.13396 5.39049C6.92692 5.18492 6.92574 4.85043 7.13131 4.64339L10.3019 1.4503C10.4437 1.3076 10.6127 1.19419 10.7984 1.11696ZM5.39942 7.12151C5.60452 7.32902 5.60256 7.66351 5.39505 7.86861L2.1948 11.0316C2.15094 11.075 2.11615 11.1267 2.09246 11.1834C2.06876 11.2401 2.05658 11.301 2.05658 11.3624C2.05658 11.4238 2.06876 11.4846 2.09246 11.5414C2.11616 11.5981 2.15092 11.6497 2.1948 11.6931L2.19634 11.6947L4.31005 13.8035L4.31158 13.805C4.35509 13.8488 4.40694 13.8836 4.46415 13.9074C4.52136 13.9312 4.58277 13.9434 4.64481 13.9434C4.70686 13.9434 4.76827 13.9312 4.82548 13.9074C4.88268 13.8836 4.93452 13.8488 4.97803 13.805L8.1484 10.6122C8.35398 10.4051 8.68847 10.4039 8.89551 10.6095C9.10255 10.8151 9.10373 11.1496 8.89815 11.3566L5.72758 14.5497C5.58573 14.6924 5.4168 14.8058 5.23102 14.883C5.04523 14.9603 4.84601 15 4.64481 15C4.44362 15 4.2444 14.9603 4.05861 14.883C3.87322 14.806 3.70483 14.6931 3.56316 14.5508L3.56227 14.5499L1.45162 12.4442L1.45077 12.4433C1.30815 12.302 1.19486 12.1338 1.11747 11.9485C1.03994 11.7628 1 11.5636 1 11.3624C1 11.1612 1.03994 10.9619 1.11747 10.7763C1.19501 10.5906 1.3086 10.4221 1.45162 10.2806L4.65232 7.11714C4.85984 6.91204 5.19432 6.914 5.39942 7.12151ZM10.3818 6.3844C10.5884 6.17833 10.5888 5.84384 10.3827 5.63729C10.1766 5.43074 9.84213 5.43036 9.63558 5.63643L5.64745 9.61536C5.4409 9.82143 5.44052 10.1559 5.64659 10.3625C5.85266 10.569 6.18715 10.5694 6.3937 10.3633L10.3818 6.3844Z" fill="black" fill-opacity="0.89"/>
          </svg>
          </button>
        </div>
      </div>
    `

    divEl.innerHTML = htmlEl
    divEl.addEventListener("click", () => { 
      router.push(`/obras/${feature.properties.sku}`)
    })
    const markerPopup = new mapboxgl.Popup({ offset: 25, className: 'popup__site_info' })
      .setDOMContent(divEl);
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
      "circle-color": "transparent",
      "circle-radius": 10,
      "circle-stroke-width": 2,
      "circle-stroke-color": "transparent",
    },
  });

}

export function centerMap (map = {}, geolocate = {}) {
  setTimeout(() => map.flyTo({ center: defaultCenter, speed: 0.4 }), 400);
  setTimeout(() => {
    globalThis.navigator.geolocation.getCurrentPosition(
      (data) => {
        geolocate.trigger()
        position.coords = [data.coords.longitude, data.coords.latitude]
        position.zoom = 12
      },
      () => { // on error
        position.coords = defaultCenter
        position.zoom = 12
        map.flyTo({
          center: defaultCenter,
          zoom: 12,
          speed: 0.5,
        });
      });
  }, 2000);
}

export function centerLocation (map = {}, feature = {}) {
  console.log(map, feature);
  map.flyTo({ center: feature.center, speed: 0.4 })
}