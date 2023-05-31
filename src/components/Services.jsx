import React from "react";
import "../components/services.css";
import Pesa from "../imagenes/grua.png";
import Industria from "../imagenes/industria.png";
import Camion from "../imagenes/camion.png";

const Services = () => {
  return (
    <div className="container-services" id="servicios">
      <h2 className="subTitle">Servicios</h2>
      <div className="services">
        <div
          className="item-services"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img src={Pesa} alt="" />
          <h2>Compra en patio</h2>
          <p>
            Lo que nos distingue es la honestidad y seriedad. Trae tus
            materiales a nuestro patio , pesamos y pagamos lo justo .
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525610224971"
            target="_blank"
          >
            Contacto
          </a>
        </div>
        <div
          className="item-services"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img src={Industria} alt="" />
          <h2>Recolección en Industrias</h2>
          <p>
            Llámanos y agendamos la recolección a tu empresa o negocio. Somos
            profesionales que trabajamos con seriedad para el cumplimiento de
            las tareas encomendadas.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525610224971"
            target="_blank"
          >
            Contacto
          </a>
        </div>
        <div
          className="item-services"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={Camion} alt="" />
          <h2>Recolección a domicilio</h2>
          <p>
            Si eres particular y tienes mucho material , contáctanos y con gusto
            vamos hasta tu domicilio y hacemos la recolección.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525610224971"
            target="_blank"
          >
            Contacto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
