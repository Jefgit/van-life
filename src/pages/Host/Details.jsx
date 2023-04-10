import React from "react"
import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({request}){
    await requireAuth(request)
    return null
}
export default function Details(){
    const { selectedVan }= useOutletContext()
    return(
        <>
            {
                selectedVan === null  ? (
                <h1>Loading...</h1>
                ) : (
                    <div>
                        <p className="vanhost--info">Name: <span className="vanhost--details">{selectedVan.name}</span></p>
                        <p className="vanhost--info">Category: <span className="vanhost--details">{selectedVan.type}</span></p>
                        <p className="vanhost--info">Description: <span className="vanhost--details">{selectedVan.description}</span></p>
                        <p className="vanhost--info">Visibility: <span className="vanhost--details">Public</span> </p>
                    </div>
                    
                )
            }
            
        </>   
    )
}