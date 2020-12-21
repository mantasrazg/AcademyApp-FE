import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoginFormInputs from "../../utils/LoginFormInputs";
import { Section, Form } from "../../components";

function userLogin(data, context, history) {
  fetch("http://127.0.0.1:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.token) {
        context.setToken(data.token);
        history.push("/");
      }
    });
}

function Login() {
  const history = useHistory();
  const authContext = useContext(AuthContext);

  return (
    <Section>
      <Form
        inputs={LoginFormInputs}
        callbackFunc={(loginData) => userLogin(loginData, authContext, history)}
        buttonText="Login"
      />
    </Section>
  );
}

export default Login;
