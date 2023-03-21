import React from "react";
import {Link} from "react-router-dom"
 
export default function Vans(props){
    
    const vansElements = props.vans.map( van => (
        
            <div key={van.id} className="van">
                <Link  className="vanDetails--link" to={`/vans/${van.id}`}>
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
        <main className="vanslist--content">
            <h1 className="vanslist--quote">Explore our van options</h1>
            <div className="vanslist--filter">
                <div className="filters">Simple</div>
                <div className="filters">Luxury</div>
                <div className="filters">Rugged</div>
                <div className="clear--filters">Clear Filters</div>
            </div>
            <div className="vans--listing">
                {vansElements}
            </div>
        </main>
    )
}