import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const BoxText = styled.div`
  padding: 20px;
`;

export const BoxImage = styled.div`
  width: 150px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0px 0px 10px;
  }
`;

export const ContainerBox = styled.div`
  height: 150px;
  background: ${COLORS.PINK};
  display: flex;
  border-radius: 10px;
  margin: 20px;
`;
