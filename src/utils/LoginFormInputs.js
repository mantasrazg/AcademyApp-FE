const LoginFormInputs = [
  {
    id: "email",
    labelText: "Email",
    type: "email",
    name: "email",
    minLength: 6,
    maxLength: 100,
    placeholder: "email@email.com",
    required: true,
  },
  {
    id: "password",
    labelText: "Password",
    type: "password",
    name: "password",
    minLength: 8,
    maxLength: 100,
    placeholder: "Password",
    required: true,
  },
];

export default LoginFormInputs;
