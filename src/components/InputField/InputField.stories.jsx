import { storiesOf } from "@storybook/react";
import React from "react";
import InputField from "./InputField";
import GlobalStyle from "../../globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

storiesOf("InputField", module).add("Text InputField", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <InputField
      id="text"
      labelText="Text Input"
      type="text"
      name="text"
      minLength="1"
      maxLength="100"
      placeholder="Text"
      required
    />
  </ThemeProvider>
));

storiesOf("InputField", module).add("Email InputField", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <InputField
      id="email"
      labelText="Email Input"
      type="email"
      name="email"
      minLength="1"
      maxLength="100"
      placeholder="email@email.com"
      required
    />
  </ThemeProvider>
));

storiesOf("InputField", module).add("Number InputField", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <InputField
      id="number"
      labelText="Number Input"
      type="number"
      name="number"
      minLength="1"
      maxLength="100"
      placeholder="1"
      required
    />
  </ThemeProvider>
));

storiesOf("InputField", module).add("Password InputField", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <InputField
      id="password"
      labelText="Password Input"
      type="password"
      name="password"
      minLength="1"
      maxLength="100"
      placeholder="Password"
      required
    />
  </ThemeProvider>
));
