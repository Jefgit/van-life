import React, {Suspense} from "react"
import {Link, useLoaderData, Await, defer} from "react-router-dom"
import { getHostVans } from "../../api"
import { requireAuth } from "../../utils"

export async function loader({request}){
    await requireAuth(request)
    return defer({hostVans : getHostVans()})
}

export default function HostVans(){
    const vansPromise = useLoaderData()

    function renderHostVan(hostVan){
        console.log(hostVan)
        const hostVanElements = hostVan.map( van => 
            <Link 
                className="hostvan--link" 
                key={van.id}  
                to={van.id}
                >
                <img className="hostvans--image" src={van.imageUrl} alt="" />
                <div>
                    <h3>{van.name}</h3>
                    <p className="vanhost-price">${van.price}/day</p>
                </div>
            </Link>
        )
        return(
            <>
                <h1 className="listvan--text">Your listed vans</h1>
                    { hostVanElements }
            </>    
        )
    }
    
    return(
        <div className="vanslist--container">
            <Suspense fallback={<h2>Loading Vans...</h2>}>
                <Await resolve={vansPromise.hostVans}>
                    {renderHostVan}
                </Await>
            </Suspense>
        </div>
    )
}