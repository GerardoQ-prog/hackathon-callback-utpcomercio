import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import React from "react";
import { CustomTextfield } from "./styled";

export const InputText = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
}) => {
  return (
    <CustomTextfield
      label={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
    />
  );
};

export const InputName = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
}) => {
  const onlyLetters = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  };

  return (
    <CustomTextfield
      label={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      onInput={(e) => onlyLetters(e)}
    />
  );
};

export const InputNumber = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
  onKeyUp,
}) => {
  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  return (
    <CustomTextfield
      label={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyUp={onKeyUp}
      onInput={(e) => onlyNumbers(e)}
    />
  );
};

export const InputPassword = ({
  placeholder,
  name,
  value,
  onChange,
  error,
  helperText,
  maxLength = 100,
  disabled = false,
  onBlur,
  onFocus,
}) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <CustomTextfield
      label={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      type={values.showPassword ? "text" : "password"}
      onBlur={onBlur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      onFocus={onFocus}
    />
  );
};
