import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

const isAdmin=true;
//const isAdmin=false;


ReactDOM.render(<App isAdmin={isAdmin} />, document.getElementById("root"));