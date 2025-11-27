import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SaleProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=20")
      .then((res) => {
        const filtered = res.data.products.filter(
          (p) => p.discountPercentage > 0
        );
        setProducts(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="hidden md:block max-w-[1224px] mx-auto bg-[#003f89] py-[10px] px-[20px] rounded-xl mt-6">
      <div className="flex gap-3 overflow-x-auto xl:overflow-x-visible mx-[40px] md:mx-[80px] lg:mx-[110px]">
        {products.slice(15, 20).map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="bg-white rounded-xl w-full shadow-sm px-[8px] py-[8px]">
            <span className="bg-orange-200 text-orange-600 text-[12px] font-bold px-2 py-1 rounded-md">
              -{Math.round(item.discountPercentage)}%
            </span>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-[150px] h-[150px] object-contain mx-auto my-2"
            />
            <h3 className="text-[13px] font-semibold mb-1 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-gray-400 line-through text-[13px]">
              ${item.price}
            </p>
            <p className="text-gray-800 font-bold text-[14px]">
              $
              {(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SaleProducts;
