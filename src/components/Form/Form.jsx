import React, { useState } from "react";
import * as S from "./Form.style";
import { InputField, Button } from "../";

function Form({ inputs, callbackFunc, buttonText }) {
  const [inputValues, setInputValues] = useState({});

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        callbackFunc(inputValues);
      }}
    >
      {inputs.map((input) => (
        <InputField
          key={input.id}
          id={input.id}
          labelText={input.labelText}
          type={input.type}
          name={input.name}
          minLength={input.minLength}
          maxLength={input.maxLength}
          placeholder={input.placeholder}
          required={input.required}
          handleChange={(e) =>
            setInputValues({ ...inputValues, [input.id]: e.target.value })
          }
        />
      ))}
      <Button>{buttonText}</Button>
    </S.Form>
  );
}

export default Form;
