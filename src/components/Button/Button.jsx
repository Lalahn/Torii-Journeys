import React from "react";
import "./Button.css";

const Button = ({ text, onClick, type }) => {
  return (
    <button
      className="button"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
