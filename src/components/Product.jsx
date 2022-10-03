import React from 'react';
import '../scss/components/Product.scss';

const Product = ({ product = {} }) => {
  console.log(product);
  return (
    <div className='container-d'>
      <div className='detail'>
        <div className='card-detail'>
          <img src={product.image} alt='' />
        </div>
        <div className='detail-body'>
          <p>category:{product.category}</p>
          <p>{product.title}</p>
          <p>description: {product.description}</p>
          <p>${product.price}</p>
          <p>
            rate: {product.rating.rate} count: {product.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
