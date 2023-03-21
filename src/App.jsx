import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"


export default function App() {
    const [vans, setVans] = React.useState([])
  
      React.useEffect(() => {
        fetch("/api/vans")
          .then( res => res.json())
          .then(data => setVans(data.vans))
  },[])
  
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
          <Route path="/vans" element={<Vans vans={vans}/>} />
          <Route path="/vans/:id" element={<VanDetail vans={vans}/>} />
        </Routes>
        <footer className="footer--vanlife">
          <p className="copyright--text">Ⓒ 2022 #VANLIFE</p>
        </footer>
      </BrowserRouter>
    )
  }