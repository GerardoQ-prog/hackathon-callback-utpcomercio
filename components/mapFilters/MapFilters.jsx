"use client"
import * as React from 'react';
import styled from "styled-components";
import Logo from "../logo/Logo";
import { IconButton, Autocomplete, TextField, RadioGroup, FormControlLabel, Radio  } from '@mui/material';
import { Menu  as MenuIcon } from '@mui/icons-material';
import { COLORS } from "../../assets/styles";
import { ContainerFilters, ContainerFilter, ContainerSearch, SidebarContainer } from "./styled";

const Search = () => {
  return (
    <ContainerSearch>
      <Autocomplete
        disablePortal
        id="combo-box-places"
        options={[]}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label="Busca un lugar" />}
      />
    </ContainerSearch>
  )
}

const RadioTypes = () => {
  return (
    <RadioGroup
        defaultValue="alerts"
        name="radio-buttons-group"
      >
        <FormControlLabel value="alerts" control={<Radio />} label="Mostrar alertas" />
        <FormControlLabel value="works" control={<Radio />} label="Mostrar Obras" />
    </RadioGroup>
  )
}

const SidebarFilters = ({ ...props }) => {
  return (
    <SidebarContainer {...props}>
      <Search />
      <RadioTypes />
    </SidebarContainer> 
  )
}

const Filters = () => {
  const [ menu, toggleMenu ] = React.useState(false)

  return (
    <ContainerFilter>
      <IconButton onClick={() => toggleMenu(!menu) }>
        <MenuIcon htmlColor={COLORS.WHITE} />
      </IconButton>
      <SidebarFilters className={ menu && 'open' } />
    </ContainerFilter>
  )
}

const MapFilters = () => {
  return (
    <ContainerFilters>
      <Logo />
      <Filters />
    </ContainerFilters>
  )
}

export default MapFilters