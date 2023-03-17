import React from 'react'
import {Link} from 'react-router-dom'

export default  function About(){
    return(
        <main className='about--content'>
            <img className='about--image' src="./src/assets/aboutpic.jpg" alt="" />
            <div className='about--mission'>
                <h1 className='about--quote1'>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className='text--mission1'>
                    Our mission is to enliven your road trip with the perfect travel van rental. 
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </p>
                <p className='text--mission2'>
                    Our team is full of vanlife enthusiasts who know 
                    firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className='about--container'>
                    <p className='about--quote2'>Your destination is waiting.</p>
                    <p className='about--quote2'>Your van is ready.</p>
                    <Link to="vans" className='btn--explore'>Explore our vans</Link>
                </div>
            </div>
        </main>
    )
}