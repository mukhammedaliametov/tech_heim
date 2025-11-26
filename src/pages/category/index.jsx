import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../components/card";

const Category = () => {
  const [products, setProducts] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${slug}`)
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err, "Xatolik"));
  }, [slug]);
  return (
    <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 py-[20px]">
      <h1 className="text-2xl font-bold mb-4 capitalize">
        {slug.split("-").join(" ")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((item) => {
          return (
            <Card
              key={item.id}
              thumbnail={item.thumbnail}
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

export default Category;
