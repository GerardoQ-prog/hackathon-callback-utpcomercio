import React from "react";
import { Container, ContainerLayout } from "./styled";

const Layout = ({ children, backgorund }) => {
  return (
    <Container backgorund={backgorund}>
      <ContainerLayout>{children}</ContainerLayout>
    </Container>
  );
};

export default Layout;
