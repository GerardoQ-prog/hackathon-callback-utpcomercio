import Link from "next/link";
import React from "react";
import Logo from "../logo/Logo";
import { Container, ContainerLinks, ContainerLogo } from "./styled";

const Header = () => {
  return (
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
  );
};

export default Header;
