import React from "react";
import { COLORS } from "../../assets/styles";
import Header from "../../components/header";
import InformationProfile from "../../components/informationProfile";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import TextStyle from "../../components/textStyle";

const Profile = () => {
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
          MI PERFIL
        </TextStyle>
      </Layout>
      <InformationProfile />
      <Navigation />
    </div>
  );
};

export default Profile;
