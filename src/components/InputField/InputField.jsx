import React from "react";
import * as S from "./InputField.style";

function InputField({
  id,
  labelText,
  type,
  name,
  minLength,
  maxLength,
  handleChange,
  placeholder,
  required,
}) {
  return (
    <S.InputWrapper>
      <S.InputLabel htmlFor={id}>{labelText}</S.InputLabel>
      <S.InputField
        type={type}
        name={name}
        id={id}
        minLength={minLength}
        maxLength={maxLength}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
      />
    </S.InputWrapper>
  );
}

export default InputField;
