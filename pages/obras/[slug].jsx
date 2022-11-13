import React from "react";
import { COLORS } from "../../assets/styles";
import Layout from "../../components/layout";
import TextStyle from "../../components/textStyle";
import TrackingNumbers from "../../components/trackingNumbers";
import InformationWork from "../../components/informationWork";
import CommentsWork from "../../components/commentsWork";
import Header from "../../components/header";

const WorkSlug = () => {
  return (
    <div>
      <Layout backgorund={COLORS.RED} margin="0px">
        <Header />
        <TextStyle
          bold={500}
          color={COLORS.WHITE}
          size="42px"
          sizeMobile="30px"
          margin="10px 0px"
        >
          OBRAS
        </TextStyle>
      </Layout>
      <Layout>
        <TextStyle bold={500} color={COLORS.RED} type="h3" margin="10px 0px">
          San Juan de Miraflores
        </TextStyle>
        <TextStyle bold={700} color={COLORS.BLUE} size="30px" sizeMobile="22px">
          Parque Zonal Ramiro Priale
        </TextStyle>
        <TrackingNumbers />
        Aqui galeria de fotos xd
        <br /> Aqui mapa xd
        <InformationWork />
        <CommentsWork />
      </Layout>
    </div>
  );
};

export default WorkSlug;
