import mapboxgl from "mapbox-gl";

export let position = {
  coords: [15.4542, 18.7322],
  zoom: 2,
};
export const defaultCenter = [-77.042793, -12.046374]; // Lima
export const geoOptions = {
  positionOptions: {
    enableHighAccuracy: true,
  },
  trackUserLocation: true,
  showUserHeading: true,
  fitBoundsOptions: {
    maxZoom: 15,
  },
};
export const popupOptions = {
  closeButton: false,
  closeOnClick: true,
  className: "popup__single_info",
  maxWidth: "250px",
  // closeOnMove: true
};

export function addGeolocateToMap(map = {}, geolocate) {
  map.addControl(geolocate, "bottom-right");
}

export function addMarkersToMap(markers = [], map = {}, popup = {}, router) {
  for (const feature of markers) {
    const el = document.createElement("div");
    el.className = feature.properties.type || "marker";
    el.setAttribute("title", feature.properties.title);
    const marker = new mapboxgl.Marker(el).setLngLat(
      feature.geometry.coordinates
    );

    const divEl = document.createElement("div");
    const htmlEl = `
      <div class="cover">
        <img src="${feature.properties.img}" alt="${feature.properties.title}" />
      </div>
      <div class="site">
        <div class="description">
          <h2 class="title">${feature.properties.title}</h2>
          <button title="Presiona para ver más" class="ver">
            Ver
          </button>
        </div>
      </div>
    `;

    divEl.innerHTML = htmlEl;
    divEl.addEventListener("click", () => {
      router.push(
        `/${feature.properties.type === "obra" ? "obras" : "alerta"}/${
          feature.properties.sku
        }`
      );
    });
    const markerPopup = new mapboxgl.Popup({
      offset: 25,
      className: "popup__site_info",
    }).setDOMContent(divEl);
    marker.setPopup(markerPopup);
    marker.addTo(map);
  }

  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: markers,
    },
  });

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

export function centerMap(map = {}, geolocate = {}) {
  setTimeout(() => map.flyTo({ center: defaultCenter, speed: 0.4 }), 400);
  setTimeout(() => {
    globalThis.navigator.geolocation.getCurrentPosition(
      (data) => {
        geolocate.trigger();
        position.coords = [data.coords.longitude, data.coords.latitude];
        position.zoom = 12;
      },
      () => {
        // on error
        position.coords = defaultCenter;
        position.zoom = 12;
        map.flyTo({
          center: defaultCenter,
          zoom: 12,
          speed: 0.5,
        });
      }
    );
  }, 2000);
}

export function centerLocation(map = {}, feature = {}) {
  console.log(map, feature);
  map.flyTo({ center: feature.center, speed: 0.4 });
}
