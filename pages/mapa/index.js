import React from "react";
import { COLORS } from "../../assets/styles";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Mapbox from "../../components/map/Mapbox";
import MapFooter from "../../components/mapFooter/MapFooter";
import Navigation from "../../components/navigation";

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
      sku: "obra-saneamiento-chorrillos",
      type: "obra",
      district: " San Juan de miraflores",
      followers: "200",
      comments: "100",
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
      sku: "obra-renovacion-san-juan-de-lurigancho",
      type: "alerta",
      district: " San Juan de miraflores",
      followers: "200",
      comments: "100",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-77.0067, -12.1464],
    },
    properties: {
      title: "Alerta de robo en Surco",
      description: "descripcion",
      img: "/img/obra.jpg",
      sku: "alerta-surco",
      type: "alerta",
      district: " San Juan de miraflores",
      followers: "200",
      comments: "100",
    },
  },
];

const Map = () => {
  return (
    <>
      <Layout backgorund={COLORS.RED} margin="0px">
        <Header />
      </Layout>
      <Mapbox markers={markers} />
      <MapFooter />
      <Navigation />
    </>
  );
};

export default Map;
