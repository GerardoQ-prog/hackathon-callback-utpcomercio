import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { COLORS } from "../../assets/styles";
import { InputText } from "../input";
import CustomSelect from "../select";
import TextStyle from "../textStyle";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { ButtonPrimary } from "../button";
import { parseCookies } from "nookies";
import { createProblem } from "../../services/map";
import { useRouter } from "next/router";
import { useForm } from "../../hooks/useForm";

const FormProblem = () => {
  const [address, setAddress] = React.useState("");
  const [latLong, setLatLong] = React.useState(null);
  const [namePlace, setNamePlace] = React.useState("");
  const [files, setFiles] = React.useState([]);

  const { form, onChange } = useForm({
    description: "",
  });

  const router = useRouter();
  const cookies = parseCookies();
  const user = cookies.user ? JSON.parse(cookies.user) : null;

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then(async (results) => {
        const latLong = await getLatLng(results[0]);
        setNamePlace(results[0].formatted_address);
        setLatLong(latLong);
      })
      .catch((error) => console.error("Error", error));
  };

  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });

  const onLoadImage = async (e) => {
    const filesNew = e.target.files;
    console.log("files", filesNew[0]);
    const result = await toBase64(filesNew[0]);
    const formatResult = result
      .replace("data:image/png;base64,", "")
      .replace("data:image/jpeg;base64,", "");
    setFiles([
      ...files,
      {
        content: formatResult,
        mimetype: filesNew[0].type,
        name: filesNew[0].name,
      },
    ]);
  };

  const createNewProblem = async () => {
    const request = {
      category: {
        id: 1,
        category: "Obra",
      },
      description: form.description,
      location: {
        lat: latLong.lat,
        long: latLong.lng,
      },
      files,
      postAnonymously: false,
      userId: user?.id,
    };

    await createProblem(request);
    router.push("/mapa");
  };

  return (
    <div>
      <TextStyle
        bold={900}
        type="h1"
        color={COLORS.BLUE}
        margin="10px 0px 20px 0px"
      >
        Nuevo Problema
      </TextStyle>
      <InputText
        placeholder="Detalle del problema"
        value={form.description}
        name="description"
        onChange={onChange}
      />
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Colocar dirección",
                className: "location-search-input",
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {namePlace !== "" && (
        <TextStyle bold={400} color={COLORS.RED} type="h3" margin="10px 0px">
          Seleccionaste: {namePlace}
        </TextStyle>
      )}
      <Button
        variant="contained"
        component="label"
        style={{
          background: "transparent",
          color: COLORS.RED_2,
          borderRadius: "5px",
          padding: "0px 3%",
          outline: "none",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "initial",
          width: "100%",
          border: `1px solid ${COLORS.RED_2}`,
          margin: "10px 0px",
        }}
      >
        <p>Ingresar foto</p>
        <input
          type="file"
          hidden
          onChange={onLoadImage}
          accept="image/png, image/gif, image/jpeg"
        />
      </Button>
      {files.length > 0 &&
        files.map((item, index) => {
          return (
            <TextStyle
              bold={400}
              color={COLORS.RED}
              type="h3"
              margin="10px 0px"
              key={index}
            >
              {item.name}
            </TextStyle>
          );
        })}
      <ButtonPrimary
        background={COLORS.RED_2}
        color={COLORS.WHITE}
        onClick={createNewProblem}
      >
        Crear
      </ButtonPrimary>
    </div>
  );
};

export default FormProblem;
