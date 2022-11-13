import styled from "styled-components";
import { COMPONENT_SIZES } from "../../assets/styles";
import { COLORS } from "../../assets/styles";

export const ContainerFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${COMPONENT_SIZES.MAP_FILTERS};
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`