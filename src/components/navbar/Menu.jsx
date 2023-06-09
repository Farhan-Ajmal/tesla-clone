import React, { useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Menu = ({ navItems, menuItems, setShowMenu, showMenu }) => {
  return (
    <>
      <div
        className={
          showMenu
            ? `fixed top-0 right-0  w-[20rem] h-screen px-8 py-10 z-50 bg-gray-100 text-black  ease-in-out duration-300`
            : "fixed right-[-100%] ease-in-out duration-300 h-screen"
        }
      >
        <div className="w-full flex justify-end">
          <RiCloseLine
            className="text-black cursor-pointer"
            size={25}
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="flex flex-col gap-6 my-4">
          {menuItems.map((item) => {
            return (
              <Link to={item.url} className="text-md font-semibold cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                {item.title}
              </Link>
            );
          })}
        </div>
        <div className="flex lg:hidden flex-col gap-6 my-4">
          {navItems.map((item) => {
            return (
              <p className="text-md font-semibold cursor-pointer">
                {item.title}
              </p>
            );
          })}
        </div>
      </div>
      {showMenu && (
        <div
          className={`fixed top-0  right-0 bottom-0 left-0 bg-gray-900 bg-opacity-30 z-10 ${
            showMenu && "backdrop-blur-sm"
          }`}
          onClick={() => setShowMenu(false)}
        />
      )}
    </>
  );
};

export default Menu;
