import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 100%;
`;

export const InputLabel = styled.label`
  width: 100%;
  font-size: 1rem;
  color: ${(props) => props.theme.primary.color};
`;

export const InputField = styled.input`
  box-sizing: border-box;
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.8rem;
  font-size: 1rem;
  color: ${(props) => props.theme.primary.color};
  outline: none;
`;
