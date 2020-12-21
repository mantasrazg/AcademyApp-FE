import React, { useState, useEffect } from "react";
import { Section } from "../../components";

function Students() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/students")
      .then((res) => res.json())
      .then((data) => setStudentsList(data));
  });

  return (
    <Section>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Delete Student</th>
          </tr>
        </thead>
        <tbody>
          {studentsList &&
            studentsList.map((student) => (
              <tr key={student.id}>
                <td>
                  <span>{student.name + " " + student.surname}</span>
                </td>
                <td>
                  <span>Delete</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Section>
  );
}

export default Students;
