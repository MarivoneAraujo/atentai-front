import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#E5E5E5",
};

export const darkTheme = {
  background: "#202020",
};

export const GlobalStyles = createGlobalStyle`

body{
  background-color:${(props) => props.theme.background};
}

`;
