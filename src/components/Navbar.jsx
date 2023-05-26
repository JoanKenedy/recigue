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
          <i class="fa-solid fa-location-dot"></i> 770 East Linden Street New
          York{" "}
        </p>
        <p>
          <i class="fa-solid fa-phone"></i> 707 355-633-755
        </p>
      </div>
      <div className="container-menu">
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
              <a href="">Inicio</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Nosotros</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Servicios</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="" className="btn-header">
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
