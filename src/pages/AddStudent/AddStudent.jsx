import React, { useContext } from "react";
import { Section, Form } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import AddStudentFormInputs from "../../utils/AddStudentFormInputs";

function studentData(data, auth) {
  fetch("http://127.0.0.1:8080/add-student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth.token}`,
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function AddStudent() {
  const auth = useContext(AuthContext);

  return (
    <Section>
      <Form
        inputs={AddStudentFormInputs}
        callbackFunc={(loginData) => studentData(loginData, auth)}
        buttonText="Add Student"
      />
    </Section>
  );
}

export default AddStudent;
