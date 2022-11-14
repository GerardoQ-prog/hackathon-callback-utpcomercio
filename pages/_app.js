import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import CssBaseline from "@mui/material/CssBaseline";

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
  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
