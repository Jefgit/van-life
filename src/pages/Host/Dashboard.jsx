import React, {Suspense} from "react"
import { requireAuth } from "../../utils"
import { Link, useLoaderData, defer, Await } from "react-router-dom"
import { BsStarFill } from "react-icons/bs"
import { getHostVans } from "../../api"

export async function loader({request}){
    await requireAuth(request)
    return defer({hostVans: getHostVans()})
}

export default function Dashboard(){

    const vansPromise = useLoaderData()

    function renderHostVan(hostVan){
        const hostVanElements = hostVan.map( van => 
            <Link 
                className="hostvan--link" 
                key={van.id}  
                to={`vans/${van.id}`}
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
                <div className="listed--vans">
                    <h1 className="listvan--text">Your listed vans</h1>
                    <Link className="detail--link" to="vans">View All</Link>
                </div>
                
                    { hostVanElements }
            </>    
        )
        }
    return(
        <main className="dashboard">
            <section className="income--info">
                <h1 className="welcome--text">Welcome!</h1>
                <div className="income--history">
                    <h4 className="income-history-text">Income last <span className="income-history-days">30 days</span></h4>
                    <Link to="income" className="detail--link">Details</Link>
                </div>  
                <h2 className="income--amount">$2,260</h2>
            </section>
            <section className="review--score">
                <h2 className="review--text">Review score</h2>
                <p className="rate"><BsStarFill className="star"/><span className="user--rate">5.0</span>/5</p>
                <Link to="reviews" className="detail--link">Details</Link>
            </section>
            <section className="vanslist--container">
                <Suspense fallback={<h2>Loading Vans...</h2>}>
                    <Await resolve={vansPromise.hostVans}>
                        {renderHostVan}
                    </Await>
                </Suspense>
            </section>
        </main>
        
    )
}