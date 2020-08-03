import React from 'react';
import mobile from './../svg/undraw_mobile_marketing_iqbr.svg';


const About = () => {
    return(
        <div>
        <section id="about">
      <div className="container">
        <h3 className="title text-center">A propos de nous</h3>
        <div className="row">
          <div className="col-md-6 about">
            <p className="about-title">Creazione studio</p>
            {/* <ul>
              <li>Sint aliquam consequatur ex ex labore.</li>
              <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li>Aspernatur consectetur omnis numquam quaerat.</li>
              <li>Et vel ut quidem alias veritatis repudiandae ut fugit.</li>
              <li>Fugit ut maxime incidunt accusantium totam repellendus eum error. </li>
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            </ul> */}
            <p>CREAZIONE est un <strong>studio de création numérique et multimédia créé en 2018</strong> , dont le siège se 
                trouve à lomé, quartier adidoadin non loin de l'hôtel la concorde.
                Nous sommes spécialisé en Design et graphisme 2D & 3D, fourniture de matériels de 
                création graphique et informatique, en travaux d’imprimerie, créations de site web 
                et application mobile,et la production cinématographique. Nous donnons également des 
                formations dans les secteurs informatiques et multimédia.</p>
          </div>
            <div className="col-md-6">
              <img src={mobile} className="img-fluid" alt=""/>
            </div>
        </div>
      </div>
    </section>
    </div>
    )
    
}

export default About;