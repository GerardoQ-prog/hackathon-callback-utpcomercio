import React from "react";
import { COLORS } from "../../assets/styles";
import { Title } from "../titles";
import LaunchIcon from "@mui/icons-material/Launch";
import TextStyle from "../textStyle";
import { ContainerLink, ContainerResumen, ContainerSocial } from "./styled";
import Link from "next/link";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";

const InformationWork = ({ infoWork }) => {
  return (
    <div>
      <Title background={COLORS.RED} color={COLORS.WHITE}>
        Sobre la obra
      </Title>
      <TextStyle bold={700} type="h3" margin="10px 0px">
        Compartir en:
      </TextStyle>
      <ContainerSocial>
        <FacebookShareButton
          url={"https://github.com/next-share"}
          quote={
            "next-share is a social share buttons for your next React apps."
          }
          hashtag={"#nextshare"}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton
          url={"https://github.com/next-share"}
          title={
            "next-share is a social share buttons for your next React apps."
          }
          separator=":: "
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </ContainerSocial>
      <TextStyle bold={400} type="h3" margin="10px 0px">
        <b>Resumen:</b> Actualizado el 12/11/2022
      </TextStyle>
      <ContainerResumen>
        <div>
          <TextStyle bold={700} type="h3">
            Estado:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            {infoWork?.status.status}
          </TextStyle>
        </div>
        <div style={{ width: 150 }}>
          <TextStyle bold={700} type="h3">
            Presupuesto:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            ${infoWork?.budget}
          </TextStyle>
        </div>
      </ContainerResumen>
      <ContainerResumen>
        <div>
          <TextStyle bold={700} type="h3">
            Inicio:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            {infoWork?.startDate}
          </TextStyle>
        </div>
        <div style={{ width: 150 }}>
          <TextStyle bold={700} type="h3">
            Fin:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            2023-11-01
          </TextStyle>
        </div>
      </ContainerResumen>
      <TextStyle bold={700} type="h3">
        Fuentes de información:
      </TextStyle>
      {infoWork.externalLinks &&
        infoWork.externalLinks.map((item, index) => {
          return (
            <ContainerLink key={index}>
              <Link href={item.link}>
                <a
                  target="_blank"
                  style={{
                    color: COLORS.BLUE,
                    textDecoration: "underline",
                  }}
                >
                  {item.name}
                </a>
              </Link>
              <LaunchIcon style={{ fontSize: 14, marginBottom: -3 }} />
            </ContainerLink>
          );
        })}
      <TextStyle bold={700} type="h3" margin="20px 0px 10px 0px">
        Descripción:
      </TextStyle>
      <TextStyle bold={400} type="h3">
        {infoWork.description}
      </TextStyle>
    </div>
  );
};

export default InformationWork;
