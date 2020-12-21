const AddCourseFormInputs = [
  {
    id: "name",
    labelText: "Course Name",
    type: "text",
    name: "name",
    minLength: 1,
    maxLength: 100,
    placeholder: "Course Name",
    required: true,
  },
  {
    id: "description",
    labelText: "Course Description",
    type: "text",
    name: "description",
    minLength: 10,
    maxLength: 1000,
    placeholder: "Course description",
    required: true,
  },
];

export default AddCourseFormInputs;
