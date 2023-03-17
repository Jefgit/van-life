import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"

export default function App() {
  return(
    <BrowserRouter>
      <header className="header--vanlife">
        <Link className="vanlife--logo" to="/">#VanLife</Link>
        <nav className="nav--vanlife">
          <Link className="link--about" to="/about">About</Link>
          <Link className="link--vans" to="vans">Vans</Link>
        </nav>
      </header>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
      
    </BrowserRouter>
  )
}

