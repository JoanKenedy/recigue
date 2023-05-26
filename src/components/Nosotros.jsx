import React from "react";
import About from "../imagenes/chatarra-grua.jpg";
import "../components/nosotros.css";

const Nosotros = () => {
  return (
    <div className="container-nosotros">
      <div className="nosotros">
        <div className="item-nosotros">
          <h2>Conocénos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            exercitationem suscipit illum, minima quia dolore ea, ratione ipsam
            quisquam ut accusamus aspernatur et aliquid sapiente a sint unde
            ullam quibusdam, libero dignissimos. Debitis quod ut officia porro
            at praesentium voluptates voluptatem, ducimus, consequatur, quo
            dolores nostrum ipsa! Deleniti, a totam!
          </p>
        </div>
        <div className="item-nosotros">
          <img src={About} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
