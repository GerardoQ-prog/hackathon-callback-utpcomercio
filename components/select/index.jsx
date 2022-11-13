import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { ContainerSelect } from "./styled";

const CustomSelect = ({
  name,
  onChange,
  options,
  placeholder,
  value,
  error,
  helperText,
  onBlur,
  onFocus,
}) => {
  const handleChange = (event) => {
    onChange(name, event);
  };

  return (
    <ContainerSelect name={name} onChange={handleChange} value={value}>
      <option value={0}>{placeholder}</option>
      {options?.map((item, index) => {
        return (
          <option key={index} value={item.value}>
            {item.text}
          </option>
        );
      })}
    </ContainerSelect>
  );
};

export default CustomSelect;
