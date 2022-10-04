import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/components/Button.scss';
import { useState } from 'react';
import Countdown from 'react-countdown';

const Button = ({ id }) => {
  let [activo, setActivo] = useState(false);

  let count;

  id % 2 === 0
    ? (count = (
        <Countdown
          date={Date.now() + 60000}
          onComplete={() => {
            setActivo(true);
          }}
        />
      ))
    : (count = (
        <Countdown
          date={Date.now() + 180000}
          onComplete={() => {
            setActivo(true);
          }}
        />
      ));

  return (
    <div className='button'>
      <Link to={`/Product/${id}`}>
        <button id='button' disabled={activo}>
          go to detail
        </button>
      </Link>
      <p>{count}</p>
    </div>
  );
};

export default Button;
