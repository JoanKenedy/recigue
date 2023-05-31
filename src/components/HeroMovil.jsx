import React from "react";
import "../components/heromovil.css";
import Foto from "../imagenes/slider-movil.jpg";

const HeroMovil = () => {
  return (
    <div className="hero">
      <img src={Foto} alt="" />
      <div className="container-text">
        <div className="text-hero">
          <h2>Reciclaje Guerrero</h2>
          <h3>27 años de experiencia nos respaldan</h3>
        </div>
      </div>
    </div>
  );
};

export default HeroMovil;
