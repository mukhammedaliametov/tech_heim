import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroFitler = () => {
  const [category, setCategor] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => setCategor(res.data))
      .catch((err) => console.log(err, "Xatolik"));
  }, []);
  
  const categoryImages = {
    beauty: 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp',
  fragrances: 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp',
  furniture: 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp',
  groceries: 'https://cdn.dummyjson.com/product-images/groceries/apple/thumbnail.webp',
  'home-decoration': 'https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/thumbnail.webp',
  'kitchen-accessories': 'https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/thumbnail.webp',
  laptops: 'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
  'mens-shirts': 'https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/thumbnail.webp',
  };

  
  return <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 flex items-center overflow-x-scroll xl:overflow-x-visible gap-[10px] justify-between mb-[50px]">
    {category.slice(0, 7).map((item, index) => {
        return(
            <Link to={`/category/${item.slug}`} key={index} className="rounded-[8px] w-[170px] flex-shrink-0 border border-gray-100 shadow-md py-[10px] px-[15px] cursor-pointer">
                <img src={categoryImages[item.slug]} key={index} alt="img" />
                <p className="text-center mt-[5px] text-[14px]">{item.name}</p>
            </Link>
        )
    })}
  </div>;
};

export default HeroFitler;
