import React from 'react';
import headshot from '../images/headshot.jpg'

function About() {

    return (
      <div className="about">
          <img src={headshot} alt="headshot" className={"headshot--about"}></img>
          <p className="about--content">Enim mollit laborum aute fugiat consequat laboris proident commodo est. Elit enim eiusmod fugiat excepteur enim pariatur reprehenderit tempor consectetur consequat eu minim quis. Duis quis quis duis magna occaecat anim aute reprehenderit magna ipsum voluptate cupidatat. Velit eiusmod veniam cillum laborum qui qui velit. Quis ea commodo laboris proident. Dolore consequat ea laborum excepteur.</p>
      </div>
    )
}

export default About;