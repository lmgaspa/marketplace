import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <Link to="/latest" style={{ textDecoration: 'none', color: 'white' }}>
            <button>
              Latest Collection
            </button>
          </Link>
        </div>
      </div >
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero