import React from "react";
import { COLORS } from "../../assets/styles";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Mapbox from "../../components/map/Mapbox";
import MapFooter from "../../components/mapFooter/MapFooter";
import Navigation from "../../components/navigation";
import { allDataMap } from "../../services/map";

const Map = ({ pointsMap }) => {
  return (
    <>
      <Layout backgorund={COLORS.RED} margin="0px">
        <Header />
      </Layout>
      <Mapbox markers={pointsMap} />
      {localStorage.user && <MapFooter />}
      <Navigation />
    </>
  );
};

export async function getServerSideProps(context) {
  const response = await allDataMap();
  const pointsMap = [];
  for (let point of response.data) {
    const newPoint = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [point.location.long, point.location.lat],
      },
      properties: {
        title: point.name ? point.name : "ABC",
        description: point.description,
        img: point?.files ? point.files[0] : point?.images[0],
        sku: point.id,
        type: point.type.type === "building" ? "obra" : "alerta",
        district: " San Juan de miraflores",
      },
    };
    pointsMap.push(newPoint);
  }

  return {
    props: {
      pointsMap,
    },
  };
}

export default Map;
