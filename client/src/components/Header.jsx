import React from 'react';
import logo from '../assets/img/logo.png';
import avatar from '../assets/img/avatar.png';
import { FaShoppingBasket } from 'react-icons/fa';

const Header = () => {
  return (
    <header
      className="fixed z-50 w-screen 
     p-6 px-16 "
    >
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 object-cover" />
          <p className="text-headingColor text-lg font-bold">
            Heavenly <br /> Spices
          </p>
        </div>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8 ml-auto ">
            <li className="text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer">
              City
            </li>
            <li className="text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer">
              Services
            </li>
            <li className="text-base text-textColor duration-100 transition-all ease-in-out hover:text-headingColor cursor-pointer">
              About us
            </li>
          </ul>
          <div className="relative flex justify-center items-center">
            <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>{' '}
            </div>
          </div>
          <img
            src={avatar}
            alt="avatar"
            className="h-10 w-10 min-h-[40px] min-w-[40px] drop-shadow-xl"
          />
        </div>
      </div>

      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"> </div>
    </header>
  );
};

export default Header;
