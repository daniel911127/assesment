import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Button.scss';

const Button = ({ id }) => {
  return (
    <div className='button'>
      <Link to={`/Product/${id}`}>
        <button>go to detail</button>
      </Link>
    </div>
  );
};

export default Button;
