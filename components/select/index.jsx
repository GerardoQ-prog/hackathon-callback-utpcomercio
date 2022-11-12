import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { COLORS } from "../../assets/styles";
import { useStyles } from "./styled";

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
  const [focus, setFocus] = React.useState(false);

  const classes = useStyles({
    color: !focus ? COLORS.TEXT : COLORS.GREEN,
    border: !focus ? 1 : 2,
  });

  const handleChange = (event) => {
    onChange(name, event);
  };

  return (
    <FormControl className={classes.customFormControl}>
      <InputLabel className={classes.customLabel}>{placeholder}</InputLabel>
      <Select
        onFocus={() => {
          if (onFocus) {
            onFocus();
          }
          setFocus(true);
        }}
        onBlur={() => {
          if (onBlur) {
            onBlur();
          }
          setFocus(false);
        }}
        className={classes.customSelect}
        name={name}
        value={value}
        error={error}
        onChange={handleChange}
      >
        {options.map((item, index) => {
          return (
            <MenuItem value={item.id} key={index}>
              {item.text}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
