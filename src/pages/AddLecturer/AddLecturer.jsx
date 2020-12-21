import React from "react";
import { Section, Form } from "../../components";
import AddLecturerFormInputs from "../../utils/AddLecturerFormInputs";

function lecturerData(data) {
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

function AddLecturer() {
  return (
    <Section>
      <Form
        inputs={AddLecturerFormInputs}
        callbackFunc={(inputValues) => lecturerData(inputValues)}
        buttonText="Add Lecturer"
      />
    </Section>
  );
}

export default AddLecturer;
