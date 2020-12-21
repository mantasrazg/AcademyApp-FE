import React, { useState, useEffect } from "react";
import { Section } from "../../components";

function Courses() {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/courses")
      .then((res) => res.json())
      .then((data) => setCoursesList(data));
  });

  return (
    <Section>
      <table>
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Course Description</th>
            <th>Lecturer</th>
          </tr>
        </thead>
        <tbody>
          {coursesList &&
            coursesList.map((course) => (
              <tr key={course.id}>
                <td>
                  <span>{course.name}</span>
                </td>
                <td>
                  <span>{course.description}</span>
                </td>
                <td>
                  <span>{course.lecturer_id}</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Section>
  );
}

export default Courses;
