import React, { useState, useEffect } from "react";
import { Section } from "../../components";
import * as S from "./Courses.style";

function Courses() {
  const [coursesList, setCoursesList] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/courses")
      .then((res) => res.json())
      .then((data) => setCoursesList(data));
  });

  return (
    <Section>
      <Section>
        <S.Table>
          <S.THead>
            <S.Row>
              <S.HeadData>Course Name</S.HeadData>
              <S.HeadData>Course Description</S.HeadData>
              <S.HeadData>Delete Course</S.HeadData>
            </S.Row>
          </S.THead>
          <S.TBody>
            {coursesList &&
              coursesList.map((course) => (
                <S.Row key={course.id}>
                  <S.Data>
                    <span>{course.name}</span>
                  </S.Data>
                  <S.Data>
                    <span>{course.description}</span>
                  </S.Data>
                  <S.Data>
                    <span>Delete</span>
                  </S.Data>
                </S.Row>
              ))}
          </S.TBody>
        </S.Table>
      </Section>
    </Section>
  );
}

export default Courses;
