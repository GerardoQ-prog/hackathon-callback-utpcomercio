"use client";
import * as React from "react";
import Logo from "../logo/Logo";
import {
  IconButton,
  Autocomplete,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { COLORS } from "../../assets/styles";
import {
  ContainerFilters,
  ContainerFilter,
  ContainerSearch,
  SidebarContainer,
} from "./styled";
import { searchPlaces } from "../../services/search";

const Search = ({ onSearch = () => {} }) => {
  const [placeSelected, setPlaceSelected] = React.useState(null);
  const [results, setResults] = React.useState([]);

  let debounce = null;

  const search = async (ev) => {
    if (debounce) clearTimeout(debounce);
    const text = ev.target.value;
    if (!text || text.length < 5) return;
    debounce = setTimeout(async () => {
      const places = await searchPlaces({ text: text });
      setResults(places);
    }, 700);
  };

  return (
    <ContainerSearch>
      <Autocomplete
        disablePortal
        id="combo-box-places"
        options={results}
        sx={{ width: "100%" }}
        onInputChange={search}
        filterOptions={(x) => x}
        value={placeSelected}
        onChange={(event, newValue) => {
          setPlaceSelected(newValue);
          newValue && onSearch(newValue);
        }}
        autoComplete
        includeInputInList
        filterSelectedOptions
        getOptionLabel={(option) =>
          typeof option === "string"
            ? option
            : option.place_name_es || option.place_name
        }
        renderInput={(params) => (
          <TextField {...params} label="Escribe una palabra" />
        )}
      />
    </ContainerSearch>
  );
};

const RadioTypes = () => {
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        fontSize={12}
        fontWeight={"500"}
        marginBottom={0.5}
        marginTop={1}
      >
        Selecciona un tipo de resultado
      </Typography>
      <RadioGroup defaultValue="alerts" name="radio-buttons-group">
        <FormControlLabel
          value="alerts"
          control={<Radio />}
          label="Mostrar alertas"
        />
        <FormControlLabel
          value="works"
          control={<Radio />}
          label="Mostrar Obras"
        />
      </RadioGroup>
    </>
  );
};

const SidebarFilters = ({ onSearch = () => {}, ...props }) => {
  return (
    <SidebarContainer {...props}>
      <Typography
        color={"#000"}
        variant="h5"
        component="h5"
        fontSize={14}
        fontWeight={"600"}
        marginBottom={1.5}
      >
        Busca y Filtra el contenido del Mapa
      </Typography>
      <Search onSearch={onSearch} />
      <RadioTypes />
    </SidebarContainer>
  );
};

const Filters = ({ onMapSearch = () => {} }) => {
  const [menu, toggleMenu] = React.useState(false);

  return (
    <ContainerFilter>
      <IconButton onClick={() => toggleMenu(!menu)}>
        <MenuIcon htmlColor={COLORS.WHITE} />
      </IconButton>
      <SidebarFilters onSearch={onMapSearch} className={menu && "open"} />
    </ContainerFilter>
  );
};

const MapFilters = ({ onMapSearch = () => {} }) => {
  return (
    <ContainerFilters>
      <Filters onMapSearch={onMapSearch} />
    </ContainerFilters>
  );
};

export default MapFilters;
