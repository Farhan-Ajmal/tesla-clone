import React, { useState, useEffect } from "react";
import LogoSvg from "../../assets/icon";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useLocation();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldScrolled = scrollTop > 50;
      setScrolled(shouldScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const homeRoute = router.pathname === "/";
  const darkBgRoute =
    router.pathname === "/services" || router.pathname === "/padestal-energy" || router.pathname === "/charj-network";

  const navItems = [
    { id: 1, title: "Option 1", url: "#" },
    { id: 2, title: "Services", url: "/services" },
    { id: 3, title: "The Padestal Energy", url: "/padestal-energy" },
    { id: 4, title: "Option 4", url: "#" },
    { id: 5, title: "Option 5", url: "#" },
    { id: 6, title: "Option 6", url: "#" },
    { id: 7, title: "Option 7", url: "#" },
  ];

  const menuItems = [
    { id: 1, title: "Contact", url: "/contact" },
    { id: 2, title: "Menu Option B", url: "#" },
    { id: 3, title: "Menu Option C", url: "#" },
    { id: 4, title: "Contact Us", url: "/contactUs" },
    { id: 5, title: "FAQ's", url: "/faqs" },
  ];
  return (
    <>
      {/* <div className=""> */}
      <div
        className={`${scrolled
            ? "bg-white shadow-sm text-black"
            : "bg-transparent text-white"
        } fixed top-0 z-10 w-full max-w-full flex flex-row justify-between items-center transition-colors duration-300 mx-auto px-5 py-4 `}
      >
        <div className="cursor-pointer">
          <Link to="/">
            <LogoSvg
              width="6rem"
              logoColor={(homeRoute || darkBgRoute) && !scrolled ? "#fff" : "#000"}
            />
          </Link>
        </div>
        {/* <div className=" flex justify-between">
          <span className="hidden lg:flex flex-row gap-3 lg:gap-3 xl:gap-5">
            {navItems.map((item) => {
              return (
                <Link to={item.url} className="mx-1 text-[1rem] font-semibold cursor-pointer hover:bg-slate-100 px-3 py-1 rounded-md">
                  {item.title}
                </Link>
              );
            })}
          </span>
        </div> */}

        <div className="flex gap-5 text-[1rem] font-semibold">
          <div className="hidden lg:flex gap-5">
            <Link
              to="/padestal-energy"
              className={`${(homeRoute || darkBgRoute) && !scrolled ? "text-white" : "text-black"} cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              The Padestal Energy
            </Link>
            <Link
              to="/services"
              className={`${(homeRoute || darkBgRoute) && !scrolled ? "text-white" : "text-black"} cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              Services
            </Link>
            <Link to="charj-network"
              className={`${(homeRoute || darkBgRoute) && !scrolled ? "text-white" : "text-black"} cursor-pointer hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            >
              The Charge Network
            </Link>
          </div>
          <span
            className={`${(homeRoute || darkBgRoute) && !scrolled ? "text-white" : "text-black"} cursor-pointer hidden lg:flex hover:bg-slate-100 hover:text-gray-800 px-3 py-1 rounded-md`}
            onClick={() => setShowMenu(!showMenu)}
          >
            Menu
          </span>
          <span
            className={`${(homeRoute || darkBgRoute) && !scrolled ? "text-white" : "text-black"} cursor-pointer lg:hidden flex`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <FaBars size={20} className="my-3" />
          </span>
        </div>
        <Menu
          menuItems={menuItems}
          navItems={navItems}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      </div>
    </>
  );
};

export default Navbar;
