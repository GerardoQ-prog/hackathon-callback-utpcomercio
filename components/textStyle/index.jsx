import React from "react";
import { Text } from "./styled";

const TextStyle = ({
  bold,
  lineHeight,
  color,
  width,
  letterSpacing,
  position,
  children,
  textAlign,
  margin,
  type,
  size,
  sizeMobile,
  textDecoration,
  cursor,
}) => {
  return (
    <Text
      bold={bold}
      lineHeight={lineHeight}
      color={color}
      width={width}
      letterSpacing={letterSpacing}
      position={position}
      textAlign={textAlign}
      margin={margin}
      type={type}
      size={size}
      sizeMobile={sizeMobile}
      textDecoration={textDecoration}
      cursor={cursor}
    >
      {children}
    </Text>
  );
};

export default TextStyle;
