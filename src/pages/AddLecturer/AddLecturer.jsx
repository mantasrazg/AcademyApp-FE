import React, { useContext } from "react";
import { Section, Form } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import AddLecturerFormInputs from "../../utils/AddLecturerFormInputs";

function lecturerData(data, auth) {
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

function AddLecturer() {
  const auth = useContext(AuthContext);

  return (
    <Section>
      <Form
        inputs={AddLecturerFormInputs}
        callbackFunc={(inputValues) => lecturerData(inputValues, auth)}
        buttonText="Add Lecturer"
      />
    </Section>
  );
}

export default AddLecturer;
