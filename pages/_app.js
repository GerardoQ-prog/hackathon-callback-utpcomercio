import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const GlobalStyle = createGlobalStyle`

  body,html {
    font-family: 'Inter', sans-serif !important;
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

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
