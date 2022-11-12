import styled from "styled-components";

export const ContainerLayout = styled.div`
  max-width: 1440px;
  padding: 30px;
  margin: 0 auto;
`;

export const Container = styled.div`
  background: ${(props) =>
    props.backgorund ? props.backgorund : "transparent"};
  margin: 20px 0px;
`;
