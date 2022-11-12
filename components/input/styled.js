import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((props) => ({
  root: {
    boxShadow: "none",
    width: "100%",
    margin: "30px 0px",
    "& .MuiFilledInput-root": {
      background: "white",
      border: (props) => `1px solid ${props.color}`,
      borderRadius: 5,
      color: (props) => props.color,
    },
    "& .MuiFilledInput-root.Mui-error": {
      background: "white",
      border: (props) => `1px solid red`,
      borderRadius: 5,
      color: (props) => props.color,
    },
    "& .MuiFilledInput-underline:before": {
      display: "none",
    },
    "& .MuiFilledInput-underline:after": {
      display: "none",
    },
    "& .MuiFilledInput-root.Mui-focused": {
      border: (props) => `2px solid ${props.colorFocus}`,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: (props) => props.colorFocus,
      fontWeight: 700,
    },
    "& .MuiFormHelperText-contained": {
      marginLeft: 0,
    },
  },
  customInputDate: {
    boxShadow: "none",
    width: "100%",
    margin: "10px 0px",
    padding: "4px 5px",
    border: (props) => `${props.border}px solid ${props.color}`,
    borderRadius: 5,
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
    "& .MuiFormLabel-root": {
      marginLeft: 5,
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: (props) => props.colorFocus,
      fontWeight: 700,
    },
    "& .MuiFormControl-root.Mui-focused": {
      border: (props) => `2px solid ${props.colorFocus}`,
    },
  },
}));
