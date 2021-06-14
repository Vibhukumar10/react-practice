import React from "react";
import ReactDOM from "react-dom";

const fName = "Vibhu";
const lName = "Kumar";

ReactDOM.render(
  <div>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {Math.floor(Math.random() * 11)}</p>
  </div>,
  document.getElementById("root")
);
