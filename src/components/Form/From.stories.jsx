import { storiesOf } from "@storybook/react";
import React from "react";
import Form from "./Form";
import GlobalStyle from "../../globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";
import LoginFormInputs from "../../utils/LoginFormInputs";
import AddStudentFormInputs from "../../utils/AddStudentFormInputs";

storiesOf("Form", module).add("Login Form", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Form inputs={LoginFormInputs} buttonText="Login" />
  </ThemeProvider>
));

storiesOf("Form", module).add("Add Student Form", () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Form inputs={AddStudentFormInputs} buttonText="Add Student" />
  </ThemeProvider>
));
