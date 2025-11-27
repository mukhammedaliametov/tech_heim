import React, { useState } from "react";
import Home from "./pages/home";
import MainLayout from "./layout";
import { Route, Routes } from "react-router-dom";
import Category from "./pages/category";
import Products from "./pages/products";
import Details from "./pages/details";
import Blog from "./pages/blog";
import FAQ from "./pages/faq";
import ContactUs from "./pages/contactus";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Details />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
