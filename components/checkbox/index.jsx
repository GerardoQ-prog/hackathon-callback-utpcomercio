import React from "react";
import { ContarinerCheckbox, useStyles } from "./styled";
import TextStyle from "../textStyle";
import { COLORS } from "../../assets/styles";
import { Checkbox } from "@material-ui/core";

const CustomCheckbox = ({
  name,
  onChange,
  value = false,
  renderText,
  color,
  error,
  helperText,
  margin,
}) => {
  const classes = useStyles({ color });

  return (
    <>
      <ContarinerCheckbox margin={margin}>
        <Checkbox
          checked={value}
          onChange={onChange}
          name={name}
          className={classes.customCheckbox}
        />
        {renderText()}
      </ContarinerCheckbox>
      {error && (
        <TextStyle color={COLORS.RED} bold={400} type="h5">
          {helperText}
        </TextStyle>
      )}
    </>
  );
};

export default CustomCheckbox;
