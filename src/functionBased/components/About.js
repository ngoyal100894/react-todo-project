import React from "react"
import { Link } from "react-router-dom"
import { Outlet } from "react-router-dom"

const About = () => {

  return (
   
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to= "about-app">About App</Link>
        </li>
        <li>
         <Link to="about-author">About Author</Link>
        </li>
        <Outlet />
      </ul>
    </div>
  )
}


export default About
