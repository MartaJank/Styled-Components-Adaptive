import React from "react";
import "./Contact.css";


/* const style = { 
  width: '60%',
  margin: '16px auto',
  border: '1px solid #eee',
  boxShadow: '0 2px 3px #ccc',
  padding: '16px',
  textAlign: 'center',
} */

function Contact(props) {
  return (
    <div className="Contact">
      <p>Name: {props.name}</p>
      <p>Project: {props.project}</p>
      <button>Contact {props.name}</button>
    </div>
  );
}

export default Contact;
