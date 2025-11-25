import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import { FiHeart } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [nav, setNav] = useState();
  const handleClick = () => setNav(!nav);
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact Us",
      link: "/contactus",
    },
  ];
  return (
    <div className="sticky top-0 bg-white shadow-md h-[50px] md:h-[90px] flex items-center w-full text-primary- z-999">
      <div className="max-w-[1224px] mx-auto px-[16px] xl:px-0 w-full flex justify-between items-center">
        <div onClick={handleClick} className="block md:hidden text-[22px]">
            {nav ? <IoMdClose /> : <FiMenu /> }
        </div>
        <p className="block md:hidden text-[22px] text-primary-blue">Tech Heim</p>
        <Link to="/" className="hidden md:block">
          <img src={logo} alt="logo" />
        </Link>
        <nav className="hidden md:flex items-center gap-[40px]">
          {navItems.map((item, index) => (
            <NavLink className={({isActive}) => (`hover:text-primary-blue ${isActive ? 'text-primary-blue' : 'text-primary-black'}`)} key={index} to={item.link}>
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className='flex items-center gap-[18px]'>
          <FiHeart className="hidden md:block text-[20px] cursor-pointer" />
          <CiShoppingBasket className="text-[26px] cursor-pointer" />
          <FaRegUser className="text-[20px] cursor-pointer" />
        </div>
        <nav className={`absolute px-[16px] h-screen xl:px-0 top-[50px] flex flex-col gap-[10px] bg-white w-full py-[30px] -z-10 transition-all duration-500 ${nav ? 'left-0' : 'left-[-100%]'}`}>
          {navItems.map((item, index) => (
            <NavLink className={({isActive}) => (`border-b-2 border-amber-50 mb-[20px] pb-[20px] ${isActive ? 'text-primary-blue' : 'text-primary-black'}`)} key={index} to={item.link}>
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
