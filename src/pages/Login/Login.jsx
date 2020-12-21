import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoginFormInputs from "../../utils/LoginFormInputs";
import { Section, Form, Notification } from "../../components";

function userLogin(data, context, history, error, setError, setNotification) {
  fetch("http://127.0.0.1:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        error = true;
        setNotification("error");
      } else {
        error = false;
      }
      return res.json();
    })
    .then((data) => {
      if (error) {
        setError("Error!");
      } else {
        context.setToken(data.token);
        history.push("/");
      }
    })
    .catch((error) => {
      setError("Error");
      setNotification("error");
    });
}

function Login() {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [error, setError] = useState();
  const [notification, setNotification] = useState();

  return (
    <>
      {error && (
        <Section>
          <Notification type={notification} message={error} />
        </Section>
      )}
      <Section>
        <Form
          inputs={LoginFormInputs}
          callbackFunc={(loginData) =>
            userLogin(
              loginData,
              auth,
              history,
              error,
              setError,
              setNotification
            )
          }
          buttonText="Login"
        />
      </Section>
    </>
  );
}

export default Login;
