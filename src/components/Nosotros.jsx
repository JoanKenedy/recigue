import React from "react";
import About from "../imagenes/drchavez.jpeg";
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
          <h2>Dra. Diana Chávez Pavón</h2>
          <h3>No. de cédula: 12169610</h3>
          <p>
            Egresada de la Facultad de Medicina (UNAM), realizando la
            Especialidad de Ginecología y Obstetricia en el Hospital General de
            México "Dr. Eduardo Liceaga", siendo en esta misma institución donde
            efectuó el Diplomado de Colposcopía y Patología del Tracto Inferior.
            Profesionista que se conduce según los principios éticos y
            humanistas que exigen el cuidado de la integridad física y mental de
            sus pacientes. Con especial interés en la SALUD DE LA MUJER,
            brindando atención médica especializada de manera integral,
            ofreciendo empatía y confianza a cada una de ellas, teniendo
            presente sus necesidades y así indicar el tratamiento ideal.
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
