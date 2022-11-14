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
import { parseCookies } from "nookies";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const router = useRouter();
  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

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
            {!user && (
              <>
                <Link href={"/crear-cuenta"}>
                  <a>Registrate</a>
                </Link>
                <Link href={"/iniciar-sesion"}>
                  <a>Ingresar</a>
                </Link>
              </>
            )}
            {user && user?.typeUser.name === "Municipalidad" && (
              <>
                <Link href={"/estadisticas"}>
                  <a>Estadisticas</a>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href={"/perfil"}>
                  <a>Mi Perfil</a>
                </Link>
              </>
            )}
            {user && (
              <a
                onClick={() => authLogout(router)}
                style={{ cursor: "pointer" }}
              >
                Cerrar sesión
              </a>
            )}
          </ContainerLinks>
        </Hidden>
        <Hidden mdUp>
          {!user ? (
            <Link href="/iniciar-sesion">
              <AccountCircleIcon
                style={{ color: COLORS.WHITE }}
                fontSize="large"
              />
            </Link>
          ) : (
            <div onClick={() => authLogout(router)}>
              <LogoutIcon style={{ color: COLORS.WHITE }} fontSize="large" />
            </div>
          )}
        </Hidden>
      </Container>
      {user && (
        <ContainerPresentation>
          <TextStyle bold={700} color={COLORS.WHITE} type="h1">
            Hola, {user.fullName}
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
