import React from "react";
//import "./Contact.css";
import styled from "styled-components";

import { StyledButton } from "../styles/elements";

/* const style = { 
  width: '60%',
  margin: '16px auto',
  border: '1px solid #eee',
  boxShadow: '0 2px 3px #ccc',
  padding: '16px',
  textAlign: 'center',
} */

const StyledContactContainer = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;

  @media (min-width: 500px) {
    width: 450px;
  }
`;

function Contact(props) {
  return (
    <StyledContactContainer>
      <p>Name: {props.name}</p>
      <p>Project: {props.project}</p>
      <StyledButton>Contact {props.name}</StyledButton>
    </StyledContactContainer>
  );
}

export default Contact;
