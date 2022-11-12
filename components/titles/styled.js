import styled from "styled-components";
import { SIZES } from "../../assets/styles";

export const ContainerTitle = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  border-radius: 20px;
  width: ${(props) => props.width};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 22px;
  @media ${SIZES.TABLET} {
    font-size: 18px;
  }
`;

export const Container = styled.div`
  max-width: 1290px;
  width: 100%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;
