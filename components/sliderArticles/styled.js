import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export const ContainerArticle = styled.div`
  background: ${COLORS.WHITE_2};
  display: flex;
  border-radius: 10px;
  padding: 20px 0px;
  height: 100px;
  margin: 0px 20px;
  align-items: center;
  div {
    margin: 0px 10px;
    a {
      font-size: 12px;
    }
  }
`;
