import React from "react";
import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";
import brand5 from "../../assets/brand5.svg";
import brand6 from "../../assets/brand6.svg";
import banner from "../../assets/banner.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const TopBrands = () => {
  return (
    <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 my-[40px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] font-semibold">Top Brands</h2>
        <Link to="/products" className="flex items-center gap-[8px]">
          View all <FaAngleRight className="text-[14px]" />
        </Link>
      </div>
      <div className="flex items-center justify-between gap-[20px] overflow-x-scroll xl:overflow-x-visible">
        <img src={brand1} className="flex-shrink-0" alt="brand1" />
        <img src={brand2} className="flex-shrink-0" alt="brand2" />
        <img src={brand3} className="flex-shrink-0" alt="brand3" />
        <img src={brand4} className="flex-shrink-0" alt="brand4" />
        <img src={brand5} className="flex-shrink-0" alt="brand5" />
        <img src={brand6} className="flex-shrink-0" alt="brand6" />
      </div>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};

export default TopBrands;
