"use client"

import styled from "styled-components";
import Logo from "../logo/Logo";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { COLORS } from "../../assets/styles";
import { ContainerFilters, ContainerFilter, ContainerSearch } from "./styled";

const Search = () => {
  return (
    <ContainerSearch>
      a
    </ContainerSearch>
  )
}

const Filters = () => {
  return (
    <ContainerFilter>
      <IconButton color={COLORS.WHITE} aria-label="filter">
        <MenuIcon htmlColor={COLORS.WHITE} color={COLORS.WHITE} />
      </IconButton>
    </ContainerFilter>
  )
}

const MapFilters = () => {
  return (
    <ContainerFilters>
      <Logo />
      <Search />
      <Filters />
    </ContainerFilters>
  )
}

export default MapFilters