import styled from "styled-components";
import { COMPONENT_SIZES, SIZES } from "../../assets/styles";
import { COLORS } from "../../assets/styles";

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
  margin-bottom: 10px;
`

export const ContainerFilter = styled.div`
  
`

export const SidebarContainer = styled.div`
  position: fixed;
  top: ${COMPONENT_SIZES.MAP_FILTERS};
  right: -100%;
  height: calc(100vh - ${COMPONENT_SIZES.MAP_FILTERS});
  background: ${COLORS.WHITE};
  width: 350px;
  z-index: 10;
  transition: all ease-in-out .25s;
  padding: 15px;
  color: ${COLORS.TEXT};
  &.open {
    right: 0;
  }

  label, span.MuiTypography-root {
    color: ${COLORS.TEXT} !important;
    font-size: 13px;
    line-height: 1.1;
  }
  .MuiInputBase-input  {
    padding: 0 !important;
  }
  .MuiRadio-root {
    padding-top: 2px !important;
    padding-bottom: 2px !important;
  }
`