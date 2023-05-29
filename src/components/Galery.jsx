import React from 'react';
import Image1 from '../imagenes/img1.jpeg';
import Image2 from '../imagenes/img2.jpeg';
import Image3 from '../imagenes/img3.jpeg';
import Image4 from '../imagenes/img4.jpeg';
import Image5 from '../imagenes/img5.jpeg';
import Image6 from '../imagenes/img6.jpeg';
import Image7 from '../imagenes/img7.jpeg';
import Image8 from '../imagenes/img8.jpeg';
import '../components/galery.css';

const Galery = () => {
  return (
    <div className='galery'>
        <h2>Como hacemos nuestro trabajo</h2>
        <div className="container-galery">
            <div className="item-galery">
                <img src={Image1} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image2} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image3} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image4} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image5} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image6} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image7} alt="" />
            </div>
            <div className="item-galery">
                <img src={Image8} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Galery