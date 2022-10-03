import React from 'react';
import '../scss/components/Products.scss';
import Button from './Button';

const Products = ({ products = {} }) => {
  console.log(products);
  return (
    <div className='container'>
      {products.map((item, index) => (
        <div key={index} className='product'>
          <div className='card'>
            <img src={item.image} alt='' />
          </div>
          <div className='card-body'>
            <h2 className='card-title'>{item.title}</h2>
            <Button id={item.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
