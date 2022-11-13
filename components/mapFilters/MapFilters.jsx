"use client"
import * as React from 'react';
import styled from "styled-components";
import Logo from "../logo/Logo";
import { IconButton, Autocomplete, TextField, RadioGroup, FormControlLabel, Radio, Typography } from '@mui/material';
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
        renderInput={(params) => <TextField {...params} label="Escribe una palabra" />}
      />
    </ContainerSearch>
  )
}

const RadioTypes = () => {
  return (
    <>
      <Typography variant="h5" component="h5" fontSize={12} fontWeight={'500'} marginBottom={0.5} marginTop={1}>
          Selecciona un tipo de resultado
        </Typography>
      <RadioGroup
          defaultValue="alerts"
          name="radio-buttons-group"
        >
          <FormControlLabel value="alerts" control={<Radio />} label="Mostrar alertas" />
          <FormControlLabel value="works" control={<Radio />} label="Mostrar Obras" />
      </RadioGroup>
    </>
  )
}

const SidebarFilters = ({ ...props }) => {
  return (
    <SidebarContainer {...props}>
      <Typography color={'#000'} variant="h5" component="h5" fontSize={14} fontWeight={'600'} marginBottom={1.5}>
        Busca y Filtra el contenido del Mapa
      </Typography>
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