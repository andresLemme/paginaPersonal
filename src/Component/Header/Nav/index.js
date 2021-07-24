import React from "react";
import './navStyle.scss'

export default function Nav() {
  return (
    <nav className="navContainer">
      <div className="logo">
        <a href="#">Andres Lemme</a>
      </div>
      <ul className="ul-link">
        <li>Home</li>
        <li>Sobre mi</li>
        <li>Skills</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
      <div className="socialBox">
        <ul className="ul-social-link">
          <li>Linkedin</li>
          <li>Github</li>
          <li>Twitter</li>
          <li>Web</li>
        </ul>
      </div>
    </nav>
  );
}
