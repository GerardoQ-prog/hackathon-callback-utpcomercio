import Head from "next/head";
import { parseCookies } from "nookies";
import React from "react";
import { COLORS } from "../../assets/styles";
import Header from "../../components/header";
import Layout from "../../components/layout";
import Mapbox from "../../components/map/Mapbox";
import MapFooter from "../../components/mapFooter/MapFooter";
import Navigation from "../../components/navigation";
import { allDataMap } from "../../services/map";

const Map = ({ pointsMap }) => {
  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  return (
    <>
      <Head>
        <title>Reporta y fiscaliza</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout backgorund={COLORS.RED} margin="0px">
        <Header />
      </Layout>
      <Mapbox markers={pointsMap} />
      {user && <MapFooter />}
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
        coordinates: [
          point.location?.long ? point.location?.long : "-77.003845",
          point.location?.lat ? point.location?.lat : "-11.985682",
        ],
      },
      properties: {
        title: point.name
          ? point.name
          : point.description
          ? point.description
          : "",
        description: point.description || "",
        img: point?.files
          ? point.files[0]
          : point?.images
          ? point?.images[0]
          : "",
        sku: point.id,
        type: point.type.type === "building" ? "obra" : "alerta",
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
