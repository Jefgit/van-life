import React from "react"
import { useOutletContext } from "react-router-dom"
import { requireAuth } from "../../utils"

export async function loader({request}){
    await requireAuth(request)
    return null
}

export default function Pricing(){
    const { selectedVan } = useOutletContext()

    return(
        <>
            {
                selectedVan === null ? (
                <h1>Loading...</h1>
                ) : (
                    <h2>${selectedVan.price}<span className="day">/day</span></h2>
                )
            }
            
        </>   
    )
}