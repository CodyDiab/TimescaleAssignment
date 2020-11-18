import React from 'react';
import headshot from '../images/headshot.jpg'

function Home() {

    return (
     <div className="home">
        <div className="hero">
        <h2 className="sub-heading">My Journey</h2>
       </div>
       <img src={headshot} alt='headshot' className="headshot--home"></img>
    </div>
    )
}

export default Home;