import React from "react";

export default function Vans(){
    return(
        <main className="vanslist--content">
            <h1 className="vanslist--quote">Explore our van options</h1>
            <div className="vanslist--filter">
                <div className="filters">Simple</div>
                <div className="filters">Luxury</div>
                <div className="filters">Rugged</div>
                <div className="clear--filters">Clear Filters</div>
            </div>
            <div className="vans--listing">
                <div className="van">
                    <div className="van--info">
                        <img className="van--image" src="./src/assets/van.png" alt="" />
                        <p className="description">
                            <span className="van--name">Modest Explorer</span> 
                            <span className="van--price">$60</span>
                        </p>
                        <p className="day">/day</p>
                    </div>
                    <div className="van--type">Simple</div>
                </div>
                <div className="van">
                    <div className="van--info">
                        <img className="van--image" src="./src/assets/van.png" alt="" />
                        <p className="description">
                            <span className="van--name">Modest Explorer</span> 
                            <span className="van--price">$60</span>
                        </p>
                        <p className="day">/day</p>
                    </div>
                    <div className="van--type">Simple</div>
                </div>
                <div className="van">
                    <div className="van--info">
                        <img className="van--image" src="./src/assets/van.png" alt="" />
                        <p className="description">
                            <span className="van--name">Modest Explorer</span> 
                            <span className="van--price">$60</span>
                        </p>
                        <p className="day">/day</p>
                    </div>
                    <div className="van--type">Simple</div>
                </div>
                <div className="van">
                    <div className="van--info">
                        <img className="van--image" src="./src/assets/van.png" alt="" />
                        <p className="description">
                            <span className="van--name">Modest Explorer</span> 
                            <span className="van--price">$60</span>
                        </p>
                        <p className="day">/day</p>
                    </div>
                    <div className="van--type">Simple</div>
                </div>
            </div>
        </main>
    )
}