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
import { Hidden } from "@mui/material";
import { authLogout } from "../../services/auth";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Container>
        <ContainerLogo>
          <Logo />
        </ContainerLogo>
        <Hidden mdDown>
          <ContainerLinks>
            <Link href={"/"}>
              <a>Inicio</a>
            </Link>
            <Link href={"/mapa"}>
              <a>Reporta y Fiscaliza</a>
            </Link>
            {!localStorage.user && (
              <>
                <Link href={"/crear-cuenta"}>
                  <a>Registrate</a>
                </Link>
                <Link href={"/iniciar-sesion"}>
                  <a>Ingresar</a>
                </Link>
              </>
            )}
            {localStorage.user &&
              JSON.parse(localStorage.user).typeUser.name ===
                "Municipalidad" && (
                <>
                  <Link href={"/estadisticas"}>
                    <a>Estadisticas</a>
                  </Link>
                </>
              )}
            {localStorage.user && (
              <>
                <Link href={"/perfil"}>
                  <a>Mi Perfil</a>
                </Link>
              </>
            )}
            {localStorage.user && (
              <a onClick={() => authLogout(router)}>Cerrar sesión</a>
            )}
          </ContainerLinks>
        </Hidden>
      </Container>
      {localStorage.user && (
        <ContainerPresentation>
          <TextStyle bold={700} color={COLORS.WHITE} type="h1">
            Hola, {JSON.parse(localStorage.user).fullName}
          </TextStyle>
          <Link href={"/perfil"}>
            <ContainerNotification>
              <NotificationsActiveIcon
                style={{ marginRight: 10, marginBottom: -5 }}
              />
              2
            </ContainerNotification>
          </Link>
        </ContainerPresentation>
      )}
    </>
  );
};

export default Header;
