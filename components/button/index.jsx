import { CircularProgress } from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import { BPrimary, BSecondary } from "./styled";

export const ButtonPrimary = ({
  background,
  color,
  onClick,
  children,
  size,
  width,
  height,
  disabled,
  loading,
}) => {
  return (
    <BPrimary
      background={background}
      color={color}
      size={size}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {!loading ? (
        children
      ) : (
        <CircularProgress size="24px" style={{ color: COLORS.WHITE }} />
      )}
    </BPrimary>
  );
};

export const ButtonSecondary = ({
  border,
  color,
  onClick,
  children,
  size,
  width,
  height,
  disabled,
  loading,
}) => {
  return (
    <BSecondary
      border={border}
      color={color}
      size={size}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {!loading ? (
        children
      ) : (
        <CircularProgress size="24px" style={{ color: Colors.TEXT }} />
      )}
    </BSecondary>
  );
};
