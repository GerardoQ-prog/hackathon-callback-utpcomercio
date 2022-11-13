import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import { InputText } from "../input";
import CustomSelect from "../select";
import TextStyle from "../textStyle";

const FormProblem = () => {
  return (
    <div>
      <TextStyle
        bold={900}
        type="h1"
        color={COLORS.BLUE}
        margin="10px 0px 20px 0px"
      >
        Nuevo Problema
      </TextStyle>
      <CustomSelect placeholder="Categoria" />
      <InputText placeholder="Detalle del problema" />
    </div>
  );
};

export default FormProblem;
