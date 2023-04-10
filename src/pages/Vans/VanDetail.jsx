import React, {Suspense} from "react"
import { Link, useLocation, useLoaderData, defer, Await} from "react-router-dom"
import { getVan } from "../../api"

export function loader( {params} ){
    return defer({vanDetails : getVan(params.id)})
}

export default function VanDetail(){
    const selectedVanPromise = useLoaderData()
    const location = useLocation()

    const search = location.state?.search || ""
    const type = location.state?.type || "all"

    function renderVanDetais(selectedVan){
        return(
            <>
                <img className="selectedVan--image" src={selectedVan.imageUrl} alt=""/>
                <div className={`van--type ${selectedVan.type} selected`}>{selectedVan.type}</div>
                <h2>{selectedVan.name}</h2>
                <h3>${selectedVan.price}<span className="selected--day">/day</span></h3>
                <p>{selectedVan.description}</p>
                <Link className="btn--rentVan">Rent this van</Link>
            </>
        )
    }
    return(
        <div className="vanDetails--page"> 
            <div className="van--details">
                <Link 
                    to={`..${search}`} 
                    className="back--link"
                    relative="path"
                >&larr; Back to {type} vans
                </Link>
                <Suspense fallback={<h2>Loading van details...</h2>}>
                    <Await resolve={selectedVanPromise.vanDetails}>
                        {renderVanDetais}
                    </Await>
                </Suspense> 
            </div>
        </div>
    )
}