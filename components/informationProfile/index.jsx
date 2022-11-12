import React from "react";
import { stringAvatar } from "../../helpers/comments";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";
import Layout from "../layout";
import TextStyle from "../textStyle";
import { ContainerInfoReport } from "./styled";
import { COLORS } from "../../assets/styles";
import TabsProfile from "../tabsProfile";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Avatar, Hidden } from "@mui/material";

const InformationProfile = () => {
  return (
    <Layout>
      <Hidden mdDown>
        <ContainerInfoReport>
          <div>
            <TextStyle
              bold={900}
              size="40px"
              sizeMobile="20px"
              textAlign="center"
            >
              50
            </TextStyle>
            <TextStyle bold={400} type="h3">
              <VisibilityIcon style={{ marginBottom: -8 }} /> obras seguidas
            </TextStyle>
          </div>
          <div>
            <Avatar
              style={{ width: "70px", height: "70px", fontSize: "40px" }}
              {...stringAvatar("Luis Melgarejo")}
            ></Avatar>
          </div>
          <div>
            <TextStyle
              bold={900}
              size="40px"
              sizeMobile="20px"
              textAlign="center"
            >
              10
            </TextStyle>
            <TextStyle bold={400} type="h3">
              <ReportProblemOutlinedIcon style={{ marginBottom: -8 }} /> obras
              reportadas
            </TextStyle>
          </div>
        </ContainerInfoReport>
      </Hidden>
      <Hidden mdUp>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            style={{ width: "70px", height: "70px", fontSize: "40px" }}
            {...stringAvatar("Luis Melgarejo")}
          ></Avatar>
        </div>
        <ContainerInfoReport>
          <div>
            <TextStyle
              bold={900}
              size="40px"
              sizeMobile="20px"
              textAlign="center"
            >
              50
            </TextStyle>
            <TextStyle bold={400} type="h3">
              <VisibilityIcon style={{ marginBottom: -8 }} /> obras seguidas
            </TextStyle>
          </div>
          <div>
            <TextStyle
              bold={900}
              size="40px"
              sizeMobile="20px"
              textAlign="center"
            >
              10
            </TextStyle>
            <TextStyle bold={400} type="h3">
              <ReportProblemOutlinedIcon style={{ marginBottom: -8 }} /> obras
              reportadas
            </TextStyle>
          </div>
        </ContainerInfoReport>
      </Hidden>
      <TextStyle
        bold={900}
        size="40px"
        sizeMobile="25px"
        textAlign="center"
        margin="30px 0px 20px 0px"
      >
        Luis Melgarejo
      </TextStyle>
      <TextStyle bold={700} color={COLORS.YELLOW} type="h2" textAlign="center">
        <EmojiEventsIcon style={{ marginBottom: -5 }} /> Defensor local
      </TextStyle>
      <TextStyle
        bold={900}
        type="h2"
        textAlign="center"
        color={COLORS.RED}
        margin="15px 0px"
      >
        San Juan de Lurigancho
      </TextStyle>
      <TabsProfile />
    </Layout>
  );
};

export default InformationProfile;
