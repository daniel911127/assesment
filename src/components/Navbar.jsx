import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import '../scss/components/Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='home'>
        <Link to='/' className='link'>
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
      <div className='title'>
        <h1>STORE</h1>
      </div>
      <div className='about'>
        <Link to='/About' className='link'>
          <FontAwesomeIcon icon={faAddressCard} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
