import React from "react";
import { COLORS } from "../../assets/styles";
import { useForm } from "../../hooks/useForm";
import { ButtonPrimary } from "../button";
import { InputPassword, InputText } from "../input";
import TextStyle from "../textStyle";
import { ContainerLogin } from "./styled";

const FormLogin = () => {
  const { form, onChange } = useForm({
    email: "",
    password: "",
  });

  return (
    <ContainerLogin>
      <div style={{ maxWidth: "700px", padding: 20 }}>
        <img />
        <TextStyle bold={900} color={COLORS.BLUE} type="h1" margin="20px 0px">
          Iniciar sesión
        </TextStyle>
        <div>
          <InputText
            placeholder="Correo electrónico"
            name="email"
            value={form.email}
            onChange={onChange}
          />
          <InputPassword
            placeholder="Contraseña"
            name="password"
            value={form.password}
            onChange={onChange}
          />
          <ButtonPrimary
            background={COLORS.RED_2}
            color={COLORS.WHITE}
            size="18px"
          >
            Ingresar
          </ButtonPrimary>
        </div>
      </div>
    </ContainerLogin>
  );
};

export default FormLogin;
