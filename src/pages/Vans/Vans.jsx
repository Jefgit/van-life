import React, { Suspense } from "react"
import {
    Link, 
    useSearchParams, 
    useLoaderData,
    defer,
    Await
    } from "react-router-dom"
import { getVans } from "../../api"

export function loader(){
    return defer({vans : getVans()})
}
 
export default function Vans(){

    const vansPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    
    function handleFilterChange(key, value){
        setSearchParams(prevParams => {
            if(value === null){
                prevParams.delete(key)
            } else{
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    function renderVansElements(vans){
        const filterVans = vans.filter( vans => typeFilter ? (vans.type === typeFilter) : vans)

        const vansElements = filterVans.map( van => (
            <div key={van.id} className="van">
                <Link  
                    className="vanDetails--link" 
                    to={van.id}
                    state={{search:`?${searchParams.toString()}`, type:typeFilter}}
                >
                    <div className="van--info">
                        <img className="van--image" src={van.imageUrl} alt="" />
                        <p className="description">
                            <span className="van--name">{van.name}</span> 
                            <span className="van--price">${van.price}</span>
                        </p>
                        <p className="day">/day</p>
                    </div>
                    <div className={`van--type ${van.type}`}>{van.type}</div>
                </Link>
            </div>
        ))
        return(
            <>
                <div className="vanslist--filter">
                    <button 
                        onClick={() => handleFilterChange("type", "simple")} 
                        className={`filters simple ${typeFilter === "simple"? "selected" : ""}`}
                        >Simple
                    </button>
                    <button 
                        onClick={() => handleFilterChange("type" , "luxury")} 
                        className={`filters luxury ${typeFilter === "luxury"? "selected" : ""}`}
                        >Luxury
                    </button>
                    <button 
                        onClick={() => handleFilterChange("type" ,"rugged")} 
                        className={`filters rugged ${typeFilter === "rugged"? "selected" : ""}`}
                        >Rugged
                    </button>
                    {
                        typeFilter === null ? 
                        "" :
                        <button 
                            onClick={() => handleFilterChange("type",null)} 
                            className="clear--filters"
                            >Clear Filters
                        </button> 
                    }
                    
                </div>
                <div className="vans--listing">
                    {vansElements}
                </div>
            </>
        )
    }

    return(
        <main className="vanslist--content">
            <h1 className="vanslist--quote">Explore our van options</h1>
            <Suspense fallback={<h2>Loading Vans...</h2>}>
                <Await resolve={vansPromise.vans}>
                    {renderVansElements}
                </Await>
            </Suspense>
        </main>
    )
}