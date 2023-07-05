import React from 'react';
import logo from '../';

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-300 p-6 px-16 ">
      <div className="hidden md:flex w-full h-full">
        <div className="flex items-center gap-2">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="flex md:hidden w-full h-full bg-blue-500 p-4"> </div>
    </div>
  );
};

export default Header;
