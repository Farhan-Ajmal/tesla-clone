import React from "react";
import { useState } from "react";
import LogoSvg from "../../assets/icon";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Index = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useLocation()
  const homeRoute = router.pathname === "/"

  const navItems = [
    { id: 1, title: "Option 1" },
    { id: 2, title: "Option 2" },
    { id: 3, title: "Option 3" },
    { id: 4, title: "Option 4" },
    { id: 5, title: "Option 5" },
    { id: 6, title: "Option 6" },
    { id: 7, title: "Option 7" },
  ];

  const menuItems = [
    { id: 1, title: "Contact", url: "/contact" },
    { id: 2, title: "Menu Option B", url: "#" },
    { id: 3, title: "Menu Option C", url: "#" },
    { id: 4, title: "Menu Option D", url: "#" },
    { id: 5, title: "Menu Option E", url: "#" },
  ];
  return (
    <>
      {/* <div className=""> */}
      <div className={`${homeRoute ? "text-white" : "text-black"} fixed top-0 z-10 w-full max-w-full flex flex-row justify-between items-center mx-auto px-5 py-3 `}>
        <div className="cursor-pointer">
          <Link to="/">
          <LogoSvg width="6rem" logoColor={homeRoute ? "#fff" : "#000"}/>
          </Link>
        </div>
        <div className=" flex justify-between">
          <span className="hidden lg:flex flex-row gap-3 lg:gap-3 xl:gap-5">
            {navItems.map((item) => {
              return (
                <span className="mx-2 text-[1rem] font-semibold cursor-pointer">
                  {item.title}
                </span>
              );
            })}
          </span>
        </div>

        <div className="flex gap-5 text-[1rem] font-semibold">
          <div className="hidden lg:flex gap-5">
            <span className="cursor-pointer">Shop</span>
            <span className="cursor-pointer">Account</span>
          </div>
          <span
            className="cursor-pointer hidden lg:flex"
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </span>
          <span
            className="cursor-pointer lg:hidden flex"
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars size={20}/>
          </span>
        </div>
        <Menu menuItems={menuItems} navItems={navItems} showMenu={showMenu} setShowMenu={setShowMenu}/>
      </div>
    </>
  );
};

export default Index;
