import React from "react"
import {useParams, Link} from "react-router-dom"

export default function VanDetail(props){
    const params = useParams()
    let selectedVan = props.vans.find(van => van.id ===params.id)
     
    return(
        <div className="vanDetails--page"> 
            <div className="van--details">
                <Link to="/vans" className="back--link">&larr; Back to all vans</Link>
                <img className="selectedVan--image" src={selectedVan.imageUrl} alt=""/>
                <div className={`van--type ${selectedVan.type} selected`}>{selectedVan.type}</div>
                <h2>{selectedVan.name}</h2>
                <h3>${selectedVan.price}<span className="selected--day">/day</span></h3>
                <p>{selectedVan.description}</p>
                <Link className="btn--rentVan">Rent this van</Link>
            </div>
        </div>
        
    )
}