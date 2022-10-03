import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import { useState, useEffect } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState([]);

  const url = `https://fakestoreapi.com/products/${id}`;

  const detail = url => {
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setProduct(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    detail(url);
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? <p>loading...</p> : <Product product={product} />}
    </div>
  );
};

export default ProductDetail;
