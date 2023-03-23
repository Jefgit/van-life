import React from "react"
import {useParams, Link} from "react-router-dom"

export default function VanDetail(){
    const params = useParams()
    const [selectedVan, setSelectedVan] = React.useState(null)

    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setSelectedVan(data.vans))
    },[params.id])

    return(
        selectedVan === null ? <h1>Loading...</h1> :(
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
        </div>)
        
        
    )
}