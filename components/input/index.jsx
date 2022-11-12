import React from "react";
import { COLORS } from "../../assets/styles";
import { useStyles } from "./styled";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { IconButton, InputAdornment, TextField } from "@material-ui/core";
// import DateFnsUtils from "@date-io/date-fns";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import { es } from "date-fns/locale";

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
  dataOpenPayCard,
  onKeyUp,
}) => {
  const classes = useStyles({
    color: COLORS.TEXT,
    colorFocus: COLORS.GREEN,
  });

  return (
    <TextField
      label={placeholder}
      variant="filled"
      className={classes.root}
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
      data-openpay-card={dataOpenPayCard}
      onKeyUp={onKeyUp}
    />
  );
};

export const InputLetter = ({
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
  dataOpenPayCard,
}) => {
  const onlyLetters = (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-ZñÑ\s]/g, "");
  };

  const classes = useStyles({
    color: COLORS.TEXT,
    colorFocus: COLORS.GREEN,
  });

  return (
    <TextField
      label={placeholder}
      variant="filled"
      className={classes.customTextField}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      onInput={(e) => onlyLetters(e)}
      onBlur={onBlur}
      onFocus={onFocus}
      data-openpay-card={dataOpenPayCard}
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
  dataOpenPayCard,
}) => {
  const onlyNumbers = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
  };

  const classes = useStyles({
    color: COLORS.TEXT,
    colorFocus: COLORS.GREEN,
  });

  return (
    <TextField
      label={placeholder}
      variant="filled"
      className={classes.customTextField}
      name={name}
      value={value}
      onChange={onChange}
      error={error}
      helperText={helperText}
      autoComplete="off"
      inputProps={{ maxLength }}
      disabled={disabled}
      onInput={(e) => onlyNumbers(e)}
      onBlur={onBlur}
      onFocus={onFocus}
      data-openpay-card={dataOpenPayCard}
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

  const classes = useStyles({
    color: COLORS.TEXT,
    colorFocus: COLORS.GREEN,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      label={placeholder}
      variant="filled"
      className={classes.customTextField}
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

// export const InputDate = ({
//   placeholder,
//   name,
//   value,
//   onChange,
//   error,
//   helperText,
//   disabled = false,
//   onBlur,
//   onFocus,
// }) => {
//   const [selectedDate, setSelectedDate] = React.useState(value);
//   const [focus, setFocus] = React.useState(false);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     onChange(name, date);
//   };

//   const classes = useStyles({
//     color: !focus ? COLORS.TEXT : COLORS.GREEN,
//     colorFocus: COLORS.GREEN,
//     border: !focus ? 1 : 2,
//   });

//   return (
//     <MuiPickersUtilsProvider utils={DateFnsUtils} locale={es}>
//       <KeyboardDatePicker
//         disableToolbar
//         variant="inline"
//         format="dd/MM/yyyy"
//         label={placeholder}
//         value={selectedDate}
//         onChange={handleDateChange}
//         KeyboardButtonProps={{
//           "aria-label": "change date",
//         }}
//         className={classes.customInputDate}
//         autoOk
//         onFocus={() => {
//           if (onFocus) {
//             onFocus();
//           }
//           setFocus(true);
//         }}
//         onBlur={() => {
//           if (onBlur) {
//             onBlur();
//           }
//           setFocus(false);
//         }}
//         disabled={disabled}
//         error={error}
//         helperText={helperText}
//         name={name}
//       />
//     </MuiPickersUtilsProvider>
//   );
// };
