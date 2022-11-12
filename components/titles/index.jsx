import React from "react";
import { Container, ContainerTitle } from "./styled";

export const Title = ({ background, color, children, width }) => {
  return (
    <Container>
      <ContainerTitle background={background} color={color} width={width}>
        {children}
      </ContainerTitle>
    </Container>
  );
};
