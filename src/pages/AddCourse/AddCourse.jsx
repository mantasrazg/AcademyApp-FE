import React, { useContext } from "react";
import { Section, Form } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import AddCourseFormInputs from "../../utils/AddCourseFormInputs";

function courseData(data, auth) {
  fetch("http://127.0.0.1:8080/add-course", {
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

function AddCourse() {
  const auth = useContext(AuthContext);

  return (
    <Section>
      <Form
        inputs={AddCourseFormInputs}
        callbackFunc={(inputValues) => courseData(inputValues, auth)}
        buttonText="Add Course"
      />
    </Section>
  );
}

export default AddCourse;
