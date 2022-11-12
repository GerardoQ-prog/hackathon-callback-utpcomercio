import React from "react";
import Mapbox from "../../components/map/Mapbox"

const markers = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.0244, -12.1692],
    },
    properties: {
      title: "Obra de Saneamiento Chorrillos",
      description: "Obra em Chorrillos",
      img: "/img/obra.jpg",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.0103, -12.0294],
    },
    properties: {
      title: "Obra de renovación San Juan de Lurigancho",
      description:
        "Unos 257 mil habitantes de Lima Sur se beneficiarán con el megaproyecto “Sectorización de sistema de agua potable y alcantarillado de la parte alta de Chorrillos”, conocido como Matriz Próceres - Chorrillos, que ya cuenta con un 78 % de avance.\n\nEl Ministerio de Vivienda, Construcción y Saneamiento (MVCS), a través del Programa Agua Segura para Lima y Callao (PASLC), inspeccionó la ejecución de esta obra de gran envergadura que ampliará y mejorará la cobertura de agua y desagüe para la población de San Juan de Miraflores, Chorrillos y Santiago de Surco.",
      img: "/img/obra.jpg",
    },
  },
]

const Map = () => {
  return <Mapbox markers={markers} />;
};

export default Map;