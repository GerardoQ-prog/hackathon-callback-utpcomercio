import { COLORS, SIZES } from "../../assets/styles";
import styled from "styled-components";

export const Text = styled.p`
  color: ${(props) => props.color || COLORS.TEXT};
  font-size: ${(props) => {
    if (props.size) {
      return props.size;
    } else {
      switch (props.type) {
        case "h1":
          return "24px";
        case "h2":
          return "20px";
        case "h3":
          return "18px";
        case "h4":
          return "14px";
        case "h5":
          return "12px";
        default:
          return "18px";
      }
    }
  }};
  font-stretch: normal;
  font-style: normal;
  font-weight: ${(props) => props.bold};
  letter-spacing: ${(props) =>
    props.letterSpacing ? `${props.letterSpacing}px` : "normal"};
  line-height: ${(props) =>
    props.lineHeight ? `${props.lineHeight}px` : "none"};
  margin: ${(props) => props.margin || "unset"};
  text-align: ${(props) => (props.textAlign ? props.textAlign : "start")};
  letter-spacing: ${(props) => props.letterSpacing && props.letterSpacing};
  text-decoration: ${(props) => props.textDecoration || "none"};
  cursor: ${(props) => props.cursor || "auto"};
  @media ${SIZES.TABLET} {
    font-size: ${(props) => {
      if (props.sizeMobile) {
        return props.sizeMobile;
      } else {
        switch (props.type) {
          case "h1":
            return "20px";
          case "h2":
            return "18px";
          case "h3":
            return "16px";
          case "h4":
            return "12px";
          case "h5":
            return "10px";
          default:
            return "18px";
        }
      }
    }};
    letter-spacing: normal;
    line-height: normal;
  }

  @media ${SIZES.MOBILE} {
    font-size: ${(props) => {
      if (props.sizeMobile) {
        return props.sizeMobile;
      } else {
        switch (props.type) {
          case "h1":
            return "18px";
          case "h2":
            return "16px";
          case "h3":
            return "14px";
          case "h4":
            return "12px";
          case "h5":
            return "10px";
          default:
            return "18px";
        }
      }
    }};
    letter-spacing: normal;
    line-height: normal;
  }
`;
