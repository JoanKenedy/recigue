import React from "react";
import "../components/barra.css";

const Barra = () => {
  return (
    <div className="container-barra">
      <h2 data-aos="zoom-in" data-aos-duration="1000">
        ¿Tiene preguntas?
      </h2>
      <p data-aos="zoom-in" data-aos-duration="1000">
        ¡Póngase en contacto con nosotros hoy!
      </p>
      <a
        href="https://api.whatsapp.com/send?phone=525545147021"
        target="_blank"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        Contacto
      </a>
    </div>
  );
};

export default Barra;
