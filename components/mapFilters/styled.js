import styled from "styled-components";
import { COMPONENT_SIZES } from "../../assets/styles";

export const ContainerFilters = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${COMPONENT_SIZES.MAP_FILTERS};
  z-index: 100;
  background: rgba(0,0,0,.1);
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
`

export const ContainerSearch = styled.div`
  max-width: 500px;
`

export const ContainerFilter = styled.div`
  
`