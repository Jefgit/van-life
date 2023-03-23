import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"

export default function HostVanDetail(){

    const [selectedVan, setVan] = React.useState(null)
    const params = useParams()
    React.useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    },[params.id])

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    const inActiveStyle = {
        fontWeight: "500",
        textDecoration: "none",
        color: "#4D4D4D"
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
            {
                selectedVan === null ? (
                    <h1>Loading</h1>
                ) : (
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
            
        </div>
        )
        
}