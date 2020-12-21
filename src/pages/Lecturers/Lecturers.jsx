import React, { useState, useEffect } from "react";
import { Section } from "../../components";
import * as S from "./Lecturers.style";

function Lecturers() {
  const [lecturersList, setLecturersList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/lecturers")
      .then((res) => res.json())
      .then((data) => setLecturersList(data));
  });

  return (
    <Section>
      <S.Table>
        <S.THead>
          <S.Row>
            <S.HeadData>Student Name</S.HeadData>
            <S.HeadData>Delete Student</S.HeadData>
          </S.Row>
        </S.THead>
        <S.TBody>
          {lecturersList &&
            lecturersList.map((lecturer) => (
              <S.Row key={lecturer.id}>
                <S.Data>
                  <span>{lecturer.name + " " + lecturer.surname}</span>
                </S.Data>
                <S.Data>
                  <span>Delete</span>
                </S.Data>
              </S.Row>
            ))}
        </S.TBody>
      </S.Table>
    </Section>
  );
}

export default Lecturers;
