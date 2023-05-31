import React from "react";
import Whatsapp from "../imagenes/whatsapp.png";
import Telefono from "../imagenes/telefono.png";
import "../components/botones.css";

const Botones = () => {
  return (
    <div className="botones">
      <a
        href="https://api.whatsapp.com/send?phone=525610224971"
        target="_blank"
      >
        <img src={Whatsapp} alt="" />
      </a>
      <a href="tel:5610224971" target="_blank">
        <img src={Telefono} alt="" />
      </a>
    </div>
  );
};

export default Botones;
