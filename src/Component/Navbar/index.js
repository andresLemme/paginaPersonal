import React from 'react'
import { FaLinkedin,FaGithub,FaTwitter,FaPager } from 'react-icons/fa'
import './navbar.scss'


export default function Navbar(){
  return(
   <div className="container-box">
      <nav className="navbar-box">
      <ul>
        <li>Home</li>
        <li>Sobre Mi</li>
        <li>Skills</li>
        <li>Proyectos</li>
        <li>Contacto</li>
      </ul>
      <div className="social-box">
      <a href="https://www.linkedin.com/in/andreslemme/" target="_blank" ><FaLinkedin/></a>
          <a href="https://github.com/andresLemme" target="_blank"><FaGithub/></a>
          <a href="https://twitter.com/aflemme" target="_blank"><FaTwitter/></a>
          <a href="http://www.teinvito.com.ar/" target="_blank"><FaPager/></a>

      </div>
    </nav>
   </div>
  )
}