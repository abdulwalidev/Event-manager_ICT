import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router } from "react-router-dom"; // Change here
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
