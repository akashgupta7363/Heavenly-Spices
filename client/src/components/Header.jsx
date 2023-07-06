import React, { useState } from 'react';
import logo from '../assets/img/logo.png';
import { motion } from 'framer-motion';
import avatar from '../assets/img/avatar.png';
import { MdAdd, MdLogout } from 'react-icons/md';
import { FaShoppingBasket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenu, setIsMenu] = useState(false);
  const loginHandler = () => {
    setIsMenu(!isMenu);
  };
  const logoutHandler = () => {};
  return (
    <header
      className="fixed z-50 w-screen 
     p-6 px-16 "
    >
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 object-cover" />
          <p className="text-headingColor text-lg font-bold">
            Heavenly <br /> Spices
          </p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8 ml-auto "
          >
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
          </motion.ul>
          <div className="relative flex justify-center items-center">
            <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg  flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>{' '}
            </div>
          </div>
          <div className="relative">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={avatar}
              onClick={loginHandler}
              alt="avatar"
              className="h-10 w-10 min-h-[40px] min-w-[40px] drop-shadow-xl"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-white rounded-lg shadow-xl absolute flex flex-col top-12 right-2"
              >
                <Link to="/createitem">
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
                    New Item <MdAdd />
                  </p>
                </Link>
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base ">
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* mobile version */}

      <div className="flex items-center justify-between md:hidden w-full h-full ">
        <div
          className="relative flex items-center justify-center"
          // onClick={showCart}
        >
          <FaShoppingBasket className="text-textColor text-2xl  cursor-pointer" />
          {
            <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          }
        </div>

        <Link to={'/'} className="flex items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            alt="userprofile"
            onClick={loginHandler}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {
                <Link to={'/createItem'}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              }

              <ul className="flex flex-col ">
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Home
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Menu
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  About Us
                </li>
                <li
                  className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                  onClick={() => setIsMenu(false)}
                >
                  Service
                </li>
              </ul>

              <p
                className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={logoutHandler}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
