import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"


const Nav = () => {

//   const headerStyle = {
//     padding: "20px 0",
//     lineHeight: "1.5em",
//   }
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  
  const toggleState = () => {
    setNavbarOpen(false)
  }
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? 
        (
          <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} />
        ) 
        : 
        (
          <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }} />
        )
      }
      </button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`} onClick={toggleState}>
        <li>
         <Link to="/">Home</Link>
        </li>
        <li>
         <Link to="about">About</Link>
        </li>
      </ul>
        
       
    </nav>
  )
}

export default Nav