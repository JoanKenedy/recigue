import React from "react";
import "../components/services.css";
import Pesa from "../imagenes/gineco.png";
import Industria from "../imagenes/obstetrics.png";

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
          <h2>Ginecología</h2>
          <p>
            La ginecología es una especialidad de la medicina que se centra en
            el estudio del sistema reproductor femenino. Los profesionales que
            se ocupan de esta especialidad se conocen como ginecólogos, que son
            los especialistas que atienden todas las patologías relacionadas con
            los órganos femeninos como el útero, la vagina y los ovarios, y
            también de la prevención de enfermedades futuras.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525527655796"
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
          <h2>Obstetricia</h2>
          <p>
            La función del obstetra es muy amplia y se convierte en esencial
            durante el embarazo, ya que es el profesional encargado de acompañar
            a la mujer durante la gestación, el parto y el puerperio, tanto en
            gestaciones normales como en las que presentan alguna complicación.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=525527655796"
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
