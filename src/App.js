import './App.css';
import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About />} />
        <Route path='Product/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
