import React from 'react';
import hero_img from '../../assets/hero_img.png';

const HomeHero = () => {
    return (
        <div className='max-w-[1224px] mx-auto px-[16px] xl:px-0 flex flex-col-reverse md:flex-row items-center text-primary-black justify-between py-[60px]'>
            <div className='flex flex-col justify-between mt-[20px] md:mt-0 w-full'>
                <h1 className='text-[30px] md:text-[60px] font-[600]'>Tech Heim</h1>
                <p className='text-[22px] md:text-[30px] font-[600] my-[20px] md:my-[80px]'>"Join the <span className='text-primary-orange'>digital revolution</span>"</p>
                <div className='w-full md:w-[250px]'>
                  <button className='px-[60px] cursor-pointer hover:opacity-90 w-full py-[15px] bg-primary-orange text-white rounded-[8px]'>Explore More</button>
                </div>
            </div>
            <div className='w-full'>
                <img src={hero_img} alt="hero_img" />
            </div>
        </div>
    );
};

export default HomeHero;