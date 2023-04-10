import React from "react"
import { 
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
} from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Login, { loginLoader, action as loginAction } from "./pages/Login"
import PageNotFound from "./pages/PageNotFound"
import Error from "./pages/Error"
import Vans, { loader as vansLoader } from "./pages/Vans/Vans"
import VanDetail, { loader as vansDetailLoader } from "./pages/Vans/VanDetail"
import Layout from "./components/Layout"
import Dashboard, { loader as dashboardLoader } from "./pages/Host/Dashboard"
import Income, { loader as incomeLoader } from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostLayout, {loader as hostLoader} from "./components/HostLayout"
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans"
import Details from "./pages/Host/Details"
import Pricing from "./pages/Host/Pricing"
import Photos from "./pages/Host/Photos"
import HostVanDetail, { loader as hostVanDetailsLoader } from "./pages/Host/HostVanDetail"
import { requireAuth } from "./utils"


export default function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route 
      path="/" 
      element={<Layout />}
      loader={async () =>{
        return null
      }}
    >
      <Route 
        index 
        element={<Home />} 
        loader={async () =>{
          return null
        }}
      />
      <Route 
        path="login" 
        element={<Login />} 
        loader={loginLoader}
        action={loginAction}
      />
      <Route 
        path="about" 
        element={<About />} 
        loader={async () =>{
          return null
        }}
      />
      <Route 
        path="vans" 
        element={<Vans />} 
        loader={vansLoader} 
        errorElement={<Error />}
      />
      <Route 
        path="vans/:id" 
        element={<VanDetail />} 
        loader={vansDetailLoader}
        errorElement={<Error />}
      />
      <Route 
        path="host" 
        element={<HostLayout />} 
        loader={hostLoader}
      >
        <Route 
          index 
          element={<Dashboard />} 
          loader={dashboardLoader}
          errorElement={<Error />}
        />
        <Route 
          path="income" 
          element={<Income />} 
          loader={incomeLoader}
        />
        <Route 
          path="vans" 
          element={<HostVans />} 
          loader={hostVansLoader}
          errorElement={<Error />}
        />
        <Route 
          path="vans/:id" 
          element={<HostVanDetail />} 
          loader={hostVanDetailsLoader}
          errorElement={<Error />}
        >
          <Route 
            index element={<Details />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route 
            path="pricing" 
            element={<Pricing />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route 
            path="photos" 
            element={<Photos />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
        <Route 
          path="reviews" 
          element={<Reviews />} 
          loader={async ({request}) => await requireAuth(request)}
        />    
      </Route> 
      <Route 
        path="*" 
        element={<PageNotFound />} 
        loader={async () =>{
          return null
        }}
      />
    </Route> 
  ))
    return(
      <RouterProvider router={router} />
    )
  }