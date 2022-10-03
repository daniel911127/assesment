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
          <p></p>
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
