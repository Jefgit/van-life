import React from "react"
import { Outlet, NavLink } from "react-router-dom"
import { requireAuth } from "../utils"

export async function loader({request}){
    await requireAuth(request)
    return null
}

export default function HostLayout(){
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    
    return(
        <>
            <nav className="host--navigation">
                <NavLink 
                    end
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="."
                >
                    Dashboard
                </NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="income"
                >
                    Income
                </NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="vans"
                >
                    Vans
                </NavLink>
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : null} 
                    to="reviews"
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}