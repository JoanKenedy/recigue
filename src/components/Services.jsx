import React from "react";
import "../components/services.css";
import Pesa from "../imagenes/grua.png";
import Industria from "../imagenes/industria.png";
import Camion from "../imagenes/camion.png";

const Services = () => {
  return (
    <div className="container-services">
      <h2 className="subTitle">Servicios</h2>
      <div className="services">
        <div className="item-services">
          <img src={Pesa} alt="" />
          <h2>Compra en patio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="">Contacto</a>
        </div>
        <div className="item-services">
          <img src={Industria} alt="" />
          <h2>Recolección en Industrias</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="">Contacto</a>
        </div>
        <div className="item-services">
          <img src={Camion} alt="" />
          <h2>Recolección a domicilio</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="">Contacto</a>
        </div>
      </div>
    </div>
  );
};

export default Services;
