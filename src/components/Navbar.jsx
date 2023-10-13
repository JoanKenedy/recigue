import React, { useState } from "react";
import Logo from "../imagenes/logo-gineco.png";
import Hamburguer from "../imagenes/hamburger.png";

import "../components/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="menu-top">
        <p>
          <i class="fa-solid fa-location-dot"></i> Calz. Acoxpa 430, Coapa,
          Ex-Hacienda Coapa, Tlalpan, CP 14308 CDMX
        </p>
        <p>
          <div>
            <a href="tel:5613147657" target="_blank">
              <i class="fa-solid fa-phone"></i> 5613147657
            </a>
          </div>
          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=5613147657"
              target="_blank"
            >
              <i className="fa-brands fa-square-whatsapp"></i> +525613147657
            </a>
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
                Conóceme
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#servicios" onClick={() => setIsOpen(!isOpen)}>
                Promociones
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#galeria" onClick={() => setIsOpen(!isOpen)}>
                Servicios
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
