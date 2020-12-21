import { storiesOf } from "@storybook/react";
import React from "react";
import Notification from "./Notification";
import GlobalStyle from "../../globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("Notification", module).add("Error Notification", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Notification type="error" message="Error message" />
  </ThemeProvider>
));

storiesOf("Notification", module).add("Success Notification", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Notification message="Success message" />
  </ThemeProvider>
));
