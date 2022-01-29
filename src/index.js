import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"

//component file
import TodoContainer from "./functionBased/components/TodoContainer"
import Routes from "./functionBased/components/Routes"

//stylesheet
import "./functionBased/App.css"


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);