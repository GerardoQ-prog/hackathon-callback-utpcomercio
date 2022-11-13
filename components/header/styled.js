import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const ContainerLogo = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const ContainerLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    margin: 0px 10px;
    color: ${COLORS.WHITE};
    font-weight: 700;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
