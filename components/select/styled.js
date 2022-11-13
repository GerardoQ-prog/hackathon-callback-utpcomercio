import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const ContainerSelect = styled.select`
  border: 1px solid ${COLORS.TEXT};
  padding: 0px 10px;
  width: 100%;
  outline: none;
  height: 55px;
  border-radius: 5px;
  font-size: 16px;
  color: ${COLORS.TEXT};

  &:focus {
    border: 2px solid ${COLORS.BLUE};
  }
`;
