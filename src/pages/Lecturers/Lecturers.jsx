import React, { useState, useEffect } from "react";
import { Section } from "../../components";

function Lecturers() {
  const [lecturersList, setLecturersList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/lecturers")
      .then((res) => res.json())
      .then((data) => setLecturersList(data));
  });

  return (
    <Section>
      <table>
        <thead>
          <tr>
            <th>Lecturer Name</th>
            <th>Delete Student</th>
          </tr>
        </thead>
        <tbody>
          {lecturersList &&
            lecturersList.map((lecturer) => (
              <tr key={lecturer.id}>
                <td>
                  <span>{lecturer.name + " " + lecturer.surname}</span>
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

export default Lecturers;
