import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Products from '../components/Products';
import Navbar from '../components/Navbar';
import '../scss/pages/Home.scss';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const initialUrl = 'https://fakestoreapi.com/products/';

  const product = url => {
    setLoading(true);
    axios
      .get(url)
      .then(res => {
        setProducts(res.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    product(initialUrl);
  }, []);

  return (
    <>
      <div>
        <Navbar />
        {loading ? <p>loading...</p> : <Products products={products} />}
      </div>
    </>
  );
};

export default Home;
