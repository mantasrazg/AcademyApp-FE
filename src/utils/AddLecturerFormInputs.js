const AddStudentFormInputs = [
  {
    id: "name",
    labelText: "First Name",
    type: "text",
    name: "name",
    minLength: 1,
    maxLength: 100,
    placeholder: "Name",
    required: true,
  },
  {
    id: "surname",
    labelText: "Last Name",
    type: "text",
    name: "surname",
    minLength: 1,
    maxLength: 100,
    placeholder: "Surname",
    required: true,
  },
  {
    id: "email",
    labelText: "Email",
    type: "email",
    name: "email",
    minLength: 1,
    maxLength: 100,
    placeholder: "email@email.com",
    required: true,
  },
];

export default AddStudentFormInputs;
