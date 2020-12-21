import styled from "styled-components";

export const NotificationBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 0.8rem;
  color: ${(props) => props.theme.primary.color};
  background-color: ${(props) =>
    props.type === "error" ? "rgb(255, 104, 87)" : "rgb(162, 222, 153)"};
`;

export const Notification = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
`;
