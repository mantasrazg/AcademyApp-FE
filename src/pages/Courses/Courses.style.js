import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
`;

export const THead = styled.thead`
  background-color: ${(props) => props.theme.primary.background};
`;

export const TBody = styled.tbody``;

export const Row = styled.tr``;

export const HeadData = styled.th`
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid black;
`;

export const Data = styled.td`
  box-sizing: border-box;
  padding: 1rem;
  border: 1px solid black;
`;
