import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const BPrimary = styled.button`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: 700;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  outline: none;
  margin: 10px 0px;
  cursor: pointer;
  transition: all 0.5s ease;
  font-family: "Montserrat";
  &:disabled {
    background: grey;
    color: ${COLORS.WHITE};
  }
`;

export const BSecondary = styled.button`
  border: ${(props) => `1px solid  ${props.border}`};
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: 700;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "40px"};
  filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  outline: none;
  margin: 10px 0px;
  cursor: pointer;
  background: transparent;
  font-family: "Montserrat";
  &:disabled {
    border: ${(props) => `1px solid  ${COLORS.TEXT}`};
  }
`;
