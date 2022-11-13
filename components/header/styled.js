import styled from "styled-components";
import { COLORS, SIZES } from "../../assets/styles";

export const ContainerNotification = styled.div`
  background: ${COLORS.WHITE_2};
  color: ${COLORS.TEXT};
  font-size: 20px;
  display: flex;
  width: 100px;
  justify-content: center;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

export const ContainerPresentation = styled.div`
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  align-items: center;
`;

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
  /* padding: 0px 20px; */
`;
