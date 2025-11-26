import React from 'react';
import networks from '../../assets/icons.svg';
import icon_1 from '../../assets/icon_1.svg';
import icon_2 from '../../assets/icon_2.svg';
import icon_3 from '../../assets/icon_3.svg';
import icon_4 from '../../assets/icon_4.svg';

const Footer = () => {
    return (
        <>
        <div className='max-w-[1224px] mx-auto px-[16px] xl:px-0 flex items-center justify-between mt-[50px] overflow-x-scroll xl:overflow-x-visible'>
            <div className='flex items-center gap-[20px]'> 
                <img src={icon_1} alt="icon_1" className='w-[40px]' />
                <p>Latest and Greatest Tech</p>
            </div>
            <div className='flex items-center gap-[20px]'> 
                <img src={icon_2} alt="icon_2" className='w-[40px]' />
                <p>Guarantee</p>
            </div>
            <div className='flex items-center gap-[20px]'> 
                <img src={icon_3} alt="icon_3" className='w-[50px]' />
                <p>Free Shipping over 1000$</p>
            </div>
            <div className='flex items-center gap-[20px]'> 
                <img src={icon_4} alt="icon_4" className='w-[38px]' />
                <p>24/7 Support</p>
            </div>
        </div>
        <div className='bg-[#021736] h-[287px] mt-[25px]'>
            <div className='max-w-[1224px] mx-auto px-[16px] xl:px-0 text-white py-[30px] flex items-start items-center justify-between'>
                <div className='flex flex-col gap-[8px]'>
                    <p>Company</p>
                    <a href="#" className='text-gray-500 capitalize'>about us</a>
                    <a href="#" className='text-gray-500 capitalize'>blog</a>
                    <a href="#" className='text-gray-500 capitalize'>returns</a>
                    <a href="#" className='text-gray-500 capitalize'>order status</a>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>Info</p>
                    <a href="#" className='text-gray-500 capitalize'>How it works?</a>
                    <a href="#" className='text-gray-500 capitalize'>our promises</a>
                    <a href="#" className='text-gray-500 capitalize'>FAQ</a>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>Contact us</p>
                    <a href="#" className='text-gray-500 capitalize'>123 Main Street, Anytown,USA</a>
                    <a href="#" className='text-gray-500 capitalize'>+1 (555) 123-4567</a>
                    <a href="#" className='text-gray-500 capitalize'>TechHeimSupport@gmail.com</a>
                </div>
                <div className='flex flex-col gap-[8px]'>
                    <p>Sign up for News and updates</p>
                    <div className='border border-gray-500 py-[10px] px-[15px] rounded-[5px] my-[10px]'>
                    <input type="email" className='outline-none' placeholder='E-mail Address' />
                    </div>
                    <img src={networks} className='w-[140px]' alt="networks" />
                </div>
            </div>
            <div className='max-w-[1224px] mx-auto px-[16px] xl:px-0 text-gray-400 pt-[20px] border-t border-gray-400 flex items-start items-center justify-between'>
                <p>&copy;2023 Tech Heim.</p>
                <div className='flex gap-[30px] capitalize'>
                    <a href="#">cookie settings</a>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms and Conditions </a>
                    <a href="#">Imprint </a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Footer;