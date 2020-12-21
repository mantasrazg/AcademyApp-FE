import React from "react";
import { Section, Form } from "../../components";
import AddCourseFormInputs from "../../utils/AddCourseFormInputs";

function courseData(data) {
  fetch("http://127.0.0.1:8080/add-course", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function AddCourse() {
  return (
    <Section>
      <Form
        inputs={AddCourseFormInputs}
        callbackFunc={(inputValues) => courseData(inputValues)}
        buttonText="Add Course"
      />
    </Section>
  );
}

export default AddCourse;
