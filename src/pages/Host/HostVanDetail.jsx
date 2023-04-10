import React, { Suspense } from "react"
import { Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom"
import { getVan } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({params, request}){
    await requireAuth(request) 
    return defer({hostVans : getVan(params.id)})

}
export default function HostVanDetail(){
    const selectedVanPromise = useLoaderData()
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderHostVan(selectedVan){
        return(
            <div className="selvanhost--page">
                <div className="selvanhost--container">
                    <img className="selvanhost--image" src={selectedVan.imageUrl} alt="" />
                    <div className="selvanhost--details">
                        <i className={`van--type ${selectedVan.type}`}>{selectedVan.type}</i>
                        <h3>{selectedVan.name}</h3>
                        <p>${selectedVan.price}<span className="day">/day</span></p>
                    </div>
                </div>
                <nav className="vanhost--links">
                    <NavLink
                        to="."
                        end
                        style={({isActive}) => isActive ? activeStyle : null} 
                    >Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({isActive}) => isActive ? activeStyle : null} 
                    >Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({isActive}) => isActive ? activeStyle : null} 
                    >Photos
                    </NavLink>
                </nav>
                <Outlet context={{selectedVan}}/>
            </div>   
        )
    }

    return(
        <div className="hostvan--details">  
            <Link 
                to=".."
                relative="path" 
                className="back--link"
            >
                &larr; Back to all vans
            </Link>
            <Suspense fallback={<h2>Loading Van details...</h2>}>
                <Await resolve={selectedVanPromise.hostVans}>
                    {renderHostVan}
                </Await>
            </Suspense>
        </div>
        )
        
}