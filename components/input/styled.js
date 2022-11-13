import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { COLORS } from "../../assets/styles";

export const CustomTextfield = styled(TextField)({
  height: "60px",
  width: "100%",
  margin: "10px 0px",
  "& label.Mui-focused": {
    color: COLORS.BLUE,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: COLORS.TEXT,
      height: "60px",
      width: "100%",
    },
    "&.Mui-focused fieldset": {
      borderColor: COLORS.BLUE,
    },
  },
});
