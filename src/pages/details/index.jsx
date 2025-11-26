import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";

const Details = () => {
  const [product, setProduct] = useState([]);
  const param = useParams();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${param.id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err, "Xatolik"));
  }, [param.id]);

  return (
    <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 text-[#1F2026] py-[40px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="w-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-xl border border-gray-400 w-[520px]"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <div className="mt-4 flex items-center gap-3">
            <span className="text-[28px] font-bold">${product.price}</span>
            <span className="text-green-600 font-semibold">
              -{product.discountPercentage}%
            </span>
          </div>
          <p className="text-yellow-500 mt-1 flex gap-[8px] items-center">
            <IoIosStar /> {product.rating} / 5
          </p>
          <p className="text-sm text-gray-500 mt-1">Brand: {product.brand}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>
          <p
            className={`mt-3 font-semibold ${
              product.availabilityStatus === "In Stock"
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.availabilityStatus}
          </p>
          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl text-lg cursor-pointer hover:opacity-80">
            Add to Cart
          </button>
          <div className="mt-6 p-4 border border-gray-400 rounded-xl">
            <p className="text-sm text-gray-700">
              Shipping: {product.shippingInformation}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Warranty: {product.warrantyInformation}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              Return Policy: {product.returnPolicy}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Reviews:</h2>
        <div className="grid gap-4">
          {product.reviews?.map((rev, i) => (
            <div
              key={i}
              className="p-4 border border-gray-400 rounded-xl bg-gray-50"
            >
              <p className="font-semibold">{rev.reviewerName}</p>
              <p className="text-yellow-500 flex gap-[5px] items-center">
                <IoIosStar /> {rev.rating}/5
              </p>
              <p className="mt-1 text-gray-700">{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
