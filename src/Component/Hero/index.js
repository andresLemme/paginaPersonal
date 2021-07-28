import React from 'react'
import './hero.scss'

export default function Hero(){
  return(
    <section className="container-main">
      <div className="block-division">
        <div className="block-left">
        <h3>Hola,</h3>
          <h1>Soy Andrés Federico Lemme</h1>
          <p>Lic en Diseño Gráfico <br/> Tester Analyst and Frontend Dev</p>

        </div>
        <div className="block-right">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF-raMfGj5OqA/profile-displayphoto-shrink_800_800/0/1518585170510?e=1632960000&v=beta&t=J0hAAKWLrunPnfmmVNvulbr1e8v-CgYzpUumXh7pFbg" alt="Andres Lemme" />
        </div>
      </div>
    </section>
  )
}