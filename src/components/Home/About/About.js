import React from 'react'
import {Link} from 'react-router-dom'
import './About.css'
const About = () => {
  return (
    <div className='About' id='about'>
        <div className='about-content'>
            <div className='about-img'>
                <img src='img/about.png' />
            </div>
            <div className='about-info'>
                <h3 className='about-header'>ABOUT Us</h3>
                <h1 className='about-title'> Cheap Prices With <br/> Quality Cars</h1>
                <h5 className='about-data'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero omnis sit alias ipsam odit earum.</h5>
                <Link className='about-btn' to='/'>Learn More</Link>
            </div>
        </div>
    </div>
  )
}

export default About