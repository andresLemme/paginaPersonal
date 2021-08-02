import React from "react";
import "./about.scss";

export default function About() {
  return (
    <section className="container-main about-container">
      <div className="block-division">
        <div className="block-left">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D03AQF-raMfGj5OqA/profile-displayphoto-shrink_800_800/0/1518585170510?e=1632960000&v=beta&t=J0hAAKWLrunPnfmmVNvulbr1e8v-CgYzpUumXh7pFbg"
            alt="Andres Lemme"
          />
        </div>
        <div className="block-right">
          <h2>Sobre mi</h2>
          <p>Actualmente me desarrollo como QA Tester Analyst en el equipo Avanade de Accenture. He formado parte de diferentes proyectos para grandes clientes trabajando principalmente con metodologías ÁGILES (aprendiendo constantemente sobre ellas).</p>
          <p>Comencé como Diseñador Gráfico llevando adelante tareas diseño, impresión, SEO & Online Marketing y luego me convertí en Frontend Developer usando principalmente HTML, CSS, JAvascript, Jquery Framework.</p>
          <p>Como emprendedor desarrolle www.teinvito.com.ar. Un proyecto de invitaciones digitales
para eventos en el que me encargo de todas las tareas del mismo. Manejo de redes sociales, diseño de Flyer, Google ADS, Google Analytic, desarrollo de templete en HTML.</p>
          <p>Ahora me encuentro capacitandome y actualizando mis conocimientos en Desarrollo Frontend, haciendo hincapié en tecnologías como “React” y “Node”. Esto permitirá seguir avanzando y afianzando mis habilidades para alcanzar nuevos desafíos laborales.</p>
          <p>Soy una persona apasionado e inquieto de conocimientos en todas las áreas que estén relacionadas al diseño y el desarrollo.</p>
        </div>
      </div>
    </section>
  );
}
