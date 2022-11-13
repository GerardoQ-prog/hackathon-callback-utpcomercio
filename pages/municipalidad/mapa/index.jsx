import React from "react";
import MuniLayout from "../../../layouts/MuniLayout";
import Mapbox from "../../../components/map/Mapbox";


const MunicipalityMap = ({ markers = [] }) => {

  return (
    <MuniLayout size="sm">
      <Mapbox markers={markers} />
    </MuniLayout>
  )
};

export default MunicipalityMap;
