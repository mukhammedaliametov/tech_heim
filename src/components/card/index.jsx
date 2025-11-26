import React from "react";
import { FaStar } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link to={props.link} className="relative w-full shadow-sm rounded-[14px] bg-white p-[12px]">
      <div className="w-full flex items-center justify-center">
        <img
          src={props.thumbnail}
          alt={props.title}
          className="w-[210px] h-[210px]"
        />
        <GoHeart className="absolute top-0 left-0 m-[15px] text-[20px] text-[20px] cursor-pointer" />
      </div>
      <p className="mt-[6px] text-[#1F2026] mb-[40px] text-[16px] font-[500]">{props.title}</p>
      <div className="flex items-center justify-between mt-[4px]">
        <p className="text-[15px] text-[#1F2026] font-medium ">
          ${props.price}
        </p>
        <div className="flex items-center text-[15px] gap-[4px] text-primary-blue">
          <FaStar className="text-primary cursor-pointer" />
          <span className="text-[#1F2026]">{props.rating}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
