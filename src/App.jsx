import React from 'react';
import Home from './pages/home';
import MainLayout from './layout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;