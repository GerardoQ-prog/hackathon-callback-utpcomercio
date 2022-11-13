import React from "react";
import { COLORS } from "../../assets/styles";
import { useForm } from "../../hooks/useForm";
import { ButtonPrimary } from "../button";
import { InputName, InputPassword, InputText } from "../input";
import CustomSelect from "../select";
import TextStyle from "../textStyle";
import { ContainerRegister } from "./styled";

const FormRegister = () => {
  const { form, onChange } = useForm({
    name: "",
    lastname: "",
    district: 0,
    email: "",
    password: "",
  });

  return (
    <ContainerRegister>
      <div style={{ maxWidth: "700px", padding: 20 }}>
        <img />
        <TextStyle bold={900} color={COLORS.BLUE} type="h1" margin="20px 0px">
          Crear cuenta
        </TextStyle>
        <div>
          <InputName
            placeholder="Nombres"
            name="name"
            value={form.name}
            onChange={onChange}
          />
          <InputName
            placeholder="Apellidos"
            name="lastname"
            value={form.lastname}
            onChange={onChange}
          />
          <CustomSelect placeholder={"Seleccione distrito"} />
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
            Registrarse
          </ButtonPrimary>
        </div>
      </div>
    </ContainerRegister>
  );
};

export default FormRegister;
