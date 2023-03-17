import React from 'react'
import {Link} from 'react-router-dom'

export default  function Home(){
    return(
        <main className='content--home'>
            <h1 className="home--quote">You got the travel plans, we got the travel vans.</h1>
            <p className='home--description'>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <Link className='btn--find'>Find your van</Link>
        </main>
        
    )
}