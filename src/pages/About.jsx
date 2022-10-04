import React from 'react';
import Navbar from '../components/Navbar';
import image from '../images/fotoPasaporte.jpeg';
import '../scss/pages/About.scss';

const About = () => {
  return (
    <div>
      <Navbar />
      <div className='container-a'>
        <div className='name'>
          <h1>Daniel Alejandro Moreno Miranda</h1>
          <img src={image} alt='' />
        </div>
        <div className='information'>
          <h2>DESCRIPCIÓN</h2>
          <p>
            Hola, me llamo daniel soy una persona que le gusta hacer deporte y
            la programación, tengo 30 años y una familia compuesta por mi esposa
            y mis dos niños.
          </p>
          <p>
            tome la decisión de unirme a este bootcamp principalmente por mis
            ganas de obtener conocimiento pero también para que con su ayuda
            pueda ayudar a la estabilidad de mi familia.
          </p>
          <p>Y creo que fue la mejor decisión que pude tomar !!!</p>
          <p>correo: daniel_9127@hotmail.com</p>
          <p>
            <a href='http://github.com/daniel911127'>github de daniel</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
