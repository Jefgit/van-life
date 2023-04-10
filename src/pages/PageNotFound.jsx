import React from "react"
import { Link } from "react-router-dom"

export default function PageNotFound(){
    return(
        <main className="notfound-page">
            <h1 className="notfound--text">Sorry, the page you were looking for was not found.</h1>
            <Link to=".." className="return--link">Return Home</Link>
        </main>
        
    )
}