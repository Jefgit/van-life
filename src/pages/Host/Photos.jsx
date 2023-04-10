import React from "react"
import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({request}){
    await requireAuth(request)
    return null
}

export default function Photos(){
    const { selectedVan } = useOutletContext()

    return(
        <>
            {
                selectedVan === null ? (
                <h1>Loading...</h1>
                ) : (
                    <img className="vanhost--photo" src={selectedVan.imageUrl} alt="" />
                )
            }
            
        </>   
    )
}