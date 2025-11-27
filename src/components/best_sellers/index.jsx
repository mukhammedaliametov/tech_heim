import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Card from "../card";
import banner1 from '../../assets/products_banner1.png';
import banner2 from '../../assets/products_banner2.png';

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=8")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err, "Xatolik"));
  }, []);
  return (
    <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 mt-[30px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">Best sellers</h2>
        <Link to="/products" className="flex items-center gap-[8px]">
          View all <FaAngleRight className="text-[14px]" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-[15px] my-[20px]">
        {products.slice(4, 8).map((item) => {
          return (
            <Card
              thumbnail={item.thumbnail}
              key={item.id}
              link={`/product/${item.id}`}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
