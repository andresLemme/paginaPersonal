import React from "react";
import "./navStyle.scss";
import { FaLinkedin,FaGithub, FaTwitter, FaPager } from "react-icons/fa";

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
          <li><a href="https://www.linkedin.com/in/andreslemme/" target="_blank" ><FaLinkedin/></a></li>
          <li><a href="https://github.com/andresLemme" target="_blank"><FaGithub/></a></li>
          <li><a href="https://twitter.com/aflemme" target="_blank"><FaTwitter/></a></li>
          <li><a href="http://www.teinvito.com.ar/" target="_blank"><FaPager/></a></li>
        </ul>
      </div>
    </nav>
  );
}
