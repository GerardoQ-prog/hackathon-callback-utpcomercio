import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const ContarinerCheckbox = styled.div`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "10px 0px"};
`;

export const useStyles = makeStyles(() => ({
  customCheckbox: {
    "& .MuiCheckbox-root": {
      color: (props) => `${props.color} !important`,
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked:hover": {
      backgroundColor: "transparent",
    },
  },
  root: {
    "&$checked": {
      color: (props) => props.color,
    },
  },
}));
