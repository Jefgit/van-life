import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./pages/Host/HostVans"
import Details from "./pages/Host/Details"
import Pricing from "./pages/Host/Pricing"
import Photos from "./pages/Host/Photos"
import HostVanDetail from "./pages/Host/HostVanDetail"


export default function App() {
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetail />} >
                <Route index element={<Details />}/>
                <Route path="pricing" element={<Pricing />}/>
                <Route path="photos" element={<Photos />}/>
              </Route>
              <Route path="reviews" element={<Reviews />} />    
            </Route> 
          </Route> 
        </Routes>
      </BrowserRouter>
    )
  }