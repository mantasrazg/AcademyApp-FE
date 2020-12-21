import React from "react";
import { Section, Form } from "../../components";
import AddStudentFormInputs from "../../utils/AddStudentFormInputs";

function studentData(data) {
  fetch("http://127.0.0.1:8080/add-student", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function AddStudent() {
  return (
    <Section>
      <Form
        inputs={AddStudentFormInputs}
        callbackFunc={(loginData) => studentData(loginData)}
        buttonText="Add Student"
      />
    </Section>
  );
}

export default AddStudent;
