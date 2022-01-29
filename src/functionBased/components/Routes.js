import React from "react"
import Nav from "./Nav"

import TodoContainer from "./TodoContainer"
import About from "./About"
import AboutApp from "./AboutApp"
import AboutAuthor from "./AboutAuthor"
import {Routes, Route} from "react-router-dom"

const AllRoute = () => {

//   const headerStyle = {
//     padding: "20px 0",
//     lineHeight: "1.5em",
//   }
  
  return (
    <div>
        <Nav/>
        <Routes>
           <Route path = "/" element = { <TodoContainer />  } />
           <Route path = "about" element = { <About />  } >
               <Route path = 'about-app' element = { < AboutApp /> } />
               <Route path = 'about-author' element = { < AboutAuthor /> } />
            </Route>
           
        </Routes>        
    </div>
  )
}

export default AllRoute