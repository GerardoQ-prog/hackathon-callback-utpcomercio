import styled from "styled-components";
import { SIZES } from "../../assets/styles";

export const ContainerLayout = styled.div`
  max-width: 1440px;
  padding: 30px;
  margin: 0 auto;
  @media ${SIZES.TABLET} {
    padding: 30px 10px;
  }
`;

export const Container = styled.div`
  background: ${(props) =>
    props.backgorund ? props.backgorund : "transparent"};
  margin: ${(props) => props.margin || "20px 0px"};
`;
