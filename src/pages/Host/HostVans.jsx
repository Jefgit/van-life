import React from "react"
import {Link} from "react-router-dom"

export default function HostVans(){
    const [hostVan, setHostVan] = React.useState([])

    React.useEffect( () => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setHostVan(data.vans))
    }, [])
    

    const hostVanElements = hostVan.map( van => 
        <Link key={van.id} className="hostvan--link" to={`/host/vans/${van.id}`}>
            <img className="hostvans--image" src={van.imageUrl} alt="" />
            <div>
                <h3>{van.name}</h3>
                <p className="vanhost-price">${van.price}/day</p>
            </div>
        </Link>
    )
    return(
        <div className="vanslist--container">
            <h1 className="listvan--text">Your listed vans</h1>
            {
                hostVan.length == 0 ? (
                    <h1>Loading....</h1>
                ) : (
                    hostVanElements
                )   
            }
        </div>
    )
}