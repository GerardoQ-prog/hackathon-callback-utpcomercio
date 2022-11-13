import Link from "next/link";
import React from "react";
import { COLORS } from "../../assets/styles";
import Logo from "../logo/Logo";
import TextStyle from "../textStyle";
import {
  Container,
  ContainerLinks,
  ContainerLogo,
  ContainerNotification,
  ContainerPresentation,
} from "./styled";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

const Header = () => {
  return (
    <>
      <Container>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <ContainerLinks>
          <Link href={"/"}>
            <a>Inicio</a>
          </Link>
          <Link href={"/mapa"}>
            <a>Reporta y Fiscaliza</a>
          </Link>
          {/* <Link>
          <a></a>
        </Link> */}
        </ContainerLinks>
      </Container>
      <ContainerPresentation>
        <TextStyle bold={400} color={COLORS.WHITE} type="h1">
          Hola , <br></br>
          <b>Gerardo</b>
        </TextStyle>
        <ContainerNotification>
          <NotificationsActiveIcon
            style={{ marginRight: 10, marginBottom: -5 }}
          />
          2
        </ContainerNotification>
      </ContainerPresentation>
    </>
  );
};

export default Header;
