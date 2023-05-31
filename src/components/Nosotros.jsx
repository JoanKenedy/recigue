import React from "react";
import About from "../imagenes/chatarra-grua.jpg";
import "../components/nosotros.css";

const Nosotros = () => {
  return (
    <div className="container-nosotros" id="nosotros">
      <div className="nosotros">
        <div
          className="item-nosotros"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <h2>Conocénos</h2>
          <p>
            Somos una empresa 100% mexicana dedicada a la recolección de
            materiales industriales y de oficina para el reciclaje, tomando en
            cuenta el cuidado del medio ambiente y tiene el compromiso de ser
            una empresa sustentable y de brindar a sus clientes la opción de
            cuidar la naturaleza. Nuestra misión es brindar a nuestros clientes
            un programa de reciclaje que proporcione un manejo responsable del
            material y/o desecho industrial que estos producen, para que
            provoque un impacto ambiental positivo y se derive de beneficios
            para la sociedad.
          </p>
          <p>
            Contamos con más de 27 años de experiencia, tiempo que nos ha
            permitido mantener innovaciones acordes a las exigencias de estos
            tiempos, desarrollando una infraestructura para dar el mejor
            servicio .
          </p>
        </div>
        <div
          className="item-nosotros"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img src={About} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
