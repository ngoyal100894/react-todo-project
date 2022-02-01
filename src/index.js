import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"



//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import Routes from "./functionBased/components/Routes"

//stylesheet
import "./functionBased/App.css"


ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Routes /> 
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);