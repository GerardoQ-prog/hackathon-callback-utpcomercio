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

const InformationWork = () => {
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
            En ejecución
          </TextStyle>
        </div>
        <div style={{ width: 150 }}>
          <TextStyle bold={700} type="h3">
            Presupuesto:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            $368.000.000
          </TextStyle>
        </div>
      </ContainerResumen>
      <ContainerResumen>
        <div>
          <TextStyle bold={700} type="h3">
            Inicio:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            01/11/2022
          </TextStyle>
        </div>
        <div style={{ width: 150 }}>
          <TextStyle bold={700} type="h3">
            Fin:
          </TextStyle>
          <TextStyle bold={400} type="h3">
            01/11/2023
          </TextStyle>
        </div>
      </ContainerResumen>
      <TextStyle bold={700} type="h3">
        Fuentes de información:
      </TextStyle>
      <ContainerLink>
        <Link href="https://facebook.com">
          <a
            target="_blank"
            style={{
              color: COLORS.BLUE,
              textDecoration: "underline",
            }}
          >
            MEF: Sistema de seguimiento de inversiones{" "}
          </a>
        </Link>
        <LaunchIcon style={{ fontSize: 14, marginBottom: -3 }} />
      </ContainerLink>
      <ContainerLink>
        <Link href="https://facebook.com">
          <a
            target="_blank"
            style={{
              color: COLORS.BLUE,
              textDecoration: "underline",
            }}
          >
            MEF: Sistema de seguimiento de inversiones{" "}
          </a>
        </Link>
        <LaunchIcon style={{ fontSize: 14, marginBottom: -3 }} />
      </ContainerLink>{" "}
      <ContainerLink>
        <Link href="https://facebook.com">
          <a
            target="_blank"
            style={{
              color: COLORS.BLUE,
              textDecoration: "underline",
            }}
          >
            MEF: Sistema de seguimiento de inversiones{" "}
          </a>
        </Link>
        <LaunchIcon style={{ fontSize: 14, marginBottom: -3 }} />
      </ContainerLink>
      <TextStyle bold={700} type="h3" margin="20px 0px 10px 0px">
        Normativa Legal:
      </TextStyle>
      <ContainerLink>
        <Link href="https://facebook.com">
          <a
            target="_blank"
            style={{
              color: COLORS.BLUE,
              textDecoration: "underline",
            }}
          >
            Ley Dota 2
          </a>
        </Link>
        <LaunchIcon style={{ fontSize: 14, marginBottom: -3 }} />
      </ContainerLink>
    </div>
  );
};

export default InformationWork;
