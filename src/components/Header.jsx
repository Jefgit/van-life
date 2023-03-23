import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header(){
    return(
        <header className="header--vanlife">
          <Link className="vanlife--logo" to="/">#VanLife</Link>
          <nav className="nav--vanlife">
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""} 
              to="/host"
            >
              Host
            </NavLink>
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""}  
              to="/about"
            >
              About
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? "link--active" : ""}  
                to="vans"
              >
                Vans
              </NavLink>
          </nav>
        </header>
    )
}