import React, { useState } from 'react';
import Home from './pages/home';
import MainLayout from './layout';
import { Route, Routes } from 'react-router-dom';
import Category from './pages/category';
import Products from './pages/products';
import Details from './pages/details';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/category/:slug' element={<Category />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<Details />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;