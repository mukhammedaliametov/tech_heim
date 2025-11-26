import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/card";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err, "Qate"));
  }, []);
  return (
    <div className="max-w-[1224px] mx-auto px-[16px] ">
      <div className="flex items-center justify-between my-[20px]">
        <h2 className="text-[24px] font-semibold">Products</h2>
        <p className="opacity-50 text-[14px]">total: {products.length} products</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[20px]">
        {products.map((item, index) => {
          return (
              <Card thumbnail={item.thumbnail}
              link={`/product/${item.id}`}
                title={item.title}
                key={index}
                price={item.price}
                rating={item.rating} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
