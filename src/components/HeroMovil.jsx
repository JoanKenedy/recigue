import React from 'react';
import '../components/heromovil.css';
import Foto from '../imagenes/slider-movil.jpg';

const HeroMovil = () => {
  return (
    <div className='hero'>
        <img src={Foto} alt="" />
        <div className="container-text">
            <div className="text-hero">
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            
        </div>

    </div>
  )
}

export default HeroMovil