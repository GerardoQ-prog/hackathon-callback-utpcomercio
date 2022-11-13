import { createGlobalStyle } from "styled-components";
import { AuthProvider } from "../context/JWTAuthContext"; 
import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import CssBaseline from "@mui/material/CssBaseline";
import { useEffect } from "react";
import '../fake-db/index';
import * as uuid from "uuid"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const GlobalStyle = createGlobalStyle`

body,html {
  font-family: 'Montserrat', sans-serif !important;
  scroll-behavior: smooth;
  padding: 0;
  margin: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
`;

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    globalThis.localStorage.setItem("session_id", uuid.v4());
  }, []);

  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  );
}

export default MyApp;
