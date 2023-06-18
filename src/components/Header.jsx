import React, {useState} from "react"
import { Link, NavLink } from "react-router-dom"
import Icon from "../assets/Icon.svg"

export default function Header(){
  const [showPanel, setShowPanel] = useState("hide-panel")
  const isLoggedIn = JSON.parse(localStorage.getItem('loggedin'))

  function fakeLogOut() {
    localStorage.removeItem("loggedin")
  }

  function onclickHandler() {
    setShowPanel(prevPanel => prevPanel === "" ? "hide-panel" : "")
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
          <div></div>
          <nav className={`nav--mobile  ${showPanel}`}>
            <div className="close" onClick={onclickHandler}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""} 
              to="host"
              onClick={onclickHandler}
            >
              Host
            </NavLink>
            <NavLink 
              className={({isActive}) => isActive ? "link--active" : ""}  
              to="about"
              onClick={onclickHandler}
            >
              About
            </NavLink>
            <NavLink 
                className={({isActive}) => isActive ? "link--active" : ""}  
                to="vans"
                onClick={onclickHandler}
              >
                Vans
              </NavLink>
              <NavLink
                to="login"
                onClick={onclickHandler}
              >
                <img src={Icon} alt="Profile Icon"  className="login--icon-mobile"/>
              </NavLink>
              {isLoggedIn && <button className="btn-out" onClick={fakeLogOut} >Logout</button>}
          </nav>
          <div className="bars-container" onClick={onclickHandler} >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </header>
    )
}