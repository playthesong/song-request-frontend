import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 1.2rem;
    color: #495057;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
