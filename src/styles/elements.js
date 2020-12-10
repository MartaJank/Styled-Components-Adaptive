import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background: ${(props) => (props.show ? "lightsalmon" : "lightgreen")};
    color: black;
  }
`;
