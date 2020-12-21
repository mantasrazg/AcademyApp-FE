import styled from "styled-components";

export const Button = styled.button`
  background: ${(props) => props.theme.secondary.background};
  color: ${(props) => props.theme.secondary.color};
  box-sizing: border-box;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 0.8rem 2rem;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme.secondary.hoverBackground};
  }
  &:focus {
    background: ${(props) => props.theme.secondary.hoverBackground};
  }
`;
