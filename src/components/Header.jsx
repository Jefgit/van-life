import React from "react"
import { Link, NavLink } from "react-router-dom"
import Icon from "../assets/Icon.svg"

export default function Header(){
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}
    return(
        <header className="header--vanlife">
          <Link className="vanlife--logo" to="/">#VanLife</Link>
          <nav className="nav--vanlife">
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""} 
              to="host"
            >
              Host
            </NavLink>
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""}  
              to="about"
            >
              About
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? "link--active" : ""}  
                to="vans"
              >
                Vans
              </NavLink>
              <NavLink
                to="login"
              >
                <img src={Icon} alt="Profile Icon"  className="login--icon"/>
              </NavLink>
          </nav>
          <button onClick={fakeLogOut}>x</button>
        </header>
    )
}