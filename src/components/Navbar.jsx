import React, { useState } from "react";
import Logo from "../imagenes/logo-color.png";
import Hamburguer from "../imagenes/hamburger.png";

import "../components/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="menu-top">
        <p>
          <i class="fa-solid fa-location-dot"></i> Jilotepec Estado de México
        </p>
        <p>
          <div>
            <i class="fa-solid fa-phone"></i> 5527655796
          </div>
          <div>
            <i class="fa-solid fa-phone"></i> 5545147021
          </div>
        </p>
      </div>
      <div className="container-menu" id="navbar">
        <div className="container-logo">
          <img src={Logo} alt="" />
        </div>
        <nav className={`menu ${isOpen ? "open" : " "}`}>
          <i
            className="fa-solid fa-xmark"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
          <ul>
            <li>
              <a href="#navbar" onClick={() => setIsOpen(!isOpen)}>
                Inicio
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#nosotros" onClick={() => setIsOpen(!isOpen)}>
                Nosotros
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#servicios" onClick={() => setIsOpen(!isOpen)}>
                Servicios
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#galeria" onClick={() => setIsOpen(!isOpen)}>
                Galeria
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=525610224971"
                target="_blank"
                className="btn-header"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        <div className={`hamburguer ${isOpen ? "exit" : " "}`}>
          <img src={Hamburguer} alt="" onClick={() => setIsOpen(!isOpen)} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
