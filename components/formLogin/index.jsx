import React from "react";
import { COLORS } from "../../assets/styles";
import { InputText } from "../input";
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
        <InputText placeholder="Email" />
      </div>
    </ContainerLogin>
  );
};

export default FormLogin;
