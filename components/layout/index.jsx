import React from "react";
import { Container, ContainerLayout } from "./styled";

const Layout = ({ children, backgorund, margin }) => {
  return (
    <Container backgorund={backgorund} margin={margin}>
      <ContainerLayout>{children}</ContainerLayout>
    </Container>
  );
};

export default Layout;
