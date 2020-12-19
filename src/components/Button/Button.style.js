import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => (props.color === "primary" ? "#eee" : "#555")};
  color: ${(props) => (props.color === "primary" ? "#000" : "#fff")};
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0.5em 2em;
  cursor: pointer;
  &:hover {
    background: ${(props) => (props.color === "primary" ? "#999" : "#999")};
  }
  &:focus {
    background: ${(props) => (props.color === "primary" ? "#eee" : "#999")};
  }
`;
