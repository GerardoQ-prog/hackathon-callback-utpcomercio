import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import FormLogin from "../../components/formLogin";

const Login = () => {
  const CssTextField = styled(TextField)({
    height: "100px",
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
        height: "100px",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  });

  return (
    <div>
      <FormLogin />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
    </div>
  );
};

export default Login;
