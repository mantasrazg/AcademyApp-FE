import React, { useState, useEffect, useContext } from "react";
import { Section } from "../../components";
import { AuthContext } from "../../context/AuthContext";
import * as S from "./Students.style";

function Students() {
  const [studentsList, setStudentsList] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/students", {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStudentsList(data));
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
          {studentsList &&
            studentsList.map((student) => (
              <S.Row key={student.id}>
                <S.Data>
                  <span>{student.name + " " + student.surname}</span>
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

export default Students;
