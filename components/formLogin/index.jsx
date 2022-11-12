import React from "react";
import { COLORS } from "../../assets/styles";
import TextStyle from "../textStyle";
import { ContainerLogin } from "./styled";

const FormLogin = () => {
  return (
    <ContainerLogin>
      <div>
        <img />
        <TextStyle bold={900} color={COLORS.BLUE} type="h1">
          Iniciar sesión
        </TextStyle>
      </div>
    </ContainerLogin>
  );
};

export default FormLogin;
