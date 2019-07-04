import React from "react";

const Button = (props) => {
  return (
    <a href="#" className={`button ${props.primary}`}>
      {props.text}
    </a>
  );
}

export default Button;