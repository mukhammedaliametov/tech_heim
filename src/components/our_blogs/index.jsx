import React from "react";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const OurBlogs = () => {
  return (
    <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0">
      <div className="flex items-center justify-between mb-[20px]">
        <h2 className="text-[24px] font-semibold">Our blogs</h2>
        <Link to="/blog" className="flex items-center gap-[8px]">
          View all <FaAngleRight className="text-[14px]" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px]">
        <div className="shadow-lg shadow-[#7171711F] border row-span-1 md:row-span-2 col-span-1 border-gray-400 rounded-[8px] overflow-hidden">
          <img src={blog1} alt="blog1" />
          <div className="p-[10px]">
            <div className="text-[14px] flex items-center justify-between opacity-70">
              <p>August, 8, 2023</p>
              <p>3 min read</p>
            </div>
            <h2 className="mb-[3px] font-semibold">Meta Platforms plans to release free software that...</h2>
            <p>
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers{" "}
            </p>
          </div>
        </div>
        <div className="shadow-lg shadow-[#7171711F] border col-span-1 md:col-span-2 row-span-1 flex flex-col md:flex-row border-gray-400 rounded-[8px] overflow-hidden">
          <img src={blog2} alt="blog2" />
          <div className="p-[10px]">
            <h2 className="mb-[3px] font-semibold">Meta Platforms plans to release free software that...</h2>
            <p>
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers{" "}
            </p>
            <div className="text-[14px] flex items-center justify-between opacity-60 pt-[3px]">
              <p>August, 8, 2023</p>
            </div>
          </div>
        </div>
        <div className="shadow-lg col-span-2 shadow-[#7171711F] border hidden md:flex border-gray-400 rounded-[8px] overflow-hidden">
          <img src={blog2} alt="blog2" />
          <div className="p-[10px]">
            <h2 className="mb-[3px] font-semibold">Meta Platforms plans to release free software that...</h2>
            <p>
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers{" "}
            </p>
            <div className="text-[14px] flex items-center justify-between opacity-60 pt-[3px]">
              <p>August, 8, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
