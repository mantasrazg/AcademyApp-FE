import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { AuthProvider } from "./context/AuthContextƒ";
import "normalize.css";
import GlobalStyle from "./globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
