import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((props) => ({
  customFormControl: {
    boxShadow: "none",
    width: "100%",
    margin: "10px 0px",
    border: (props) => `${props.border}px solid ${props.color}`,
    borderRadius: 5,
    height: "56px",
    padding: "0px 10px",
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
    "& .MuiSelect-select:focus": {
      background: "transparent",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: (props) => props.color,
      fontWeight: 700,
    },
  },
  customSelect: {
    "& .MuiInput-underline:before": {
      display: "none",
    },
    "& .MuiSelect-select:focus": {
      background: "transparent",
    },
    "& .MuiInput-underline:after": {
      display: "none",
    },
  },
  customLabel: {
    marginLeft: 10,
    "& .MuiFormLabel-root.Mui-focused": {
      color: (props) => props.color,
      fontWeight: 700,
    },
  },
}));
