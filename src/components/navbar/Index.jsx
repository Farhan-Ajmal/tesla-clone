import React, { useEffect, useState } from "react";
import LogoSvg from "../../assets/icon";

const Index = () => {
  const navItems = [
    { id: 1, title: "Option 1" },
    { id: 2, title: "Option 2" },
    { id: 3, title: "Option 3" },
    { id: 4, title: "Option 4" },
    { id: 5, title: "Option 5" },
    { id: 6, title: "Option 6" },
    { id: 7, title: "Option 7" },
  ];
  const [scrollColor, setScrollColor] = useState("text-white");
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navbarHeight = 100; // adjust this value to the desired height

    if (scrollPosition > navbarHeight) {
      setScrollColor("black");
    } else {
      setScrollColor("white");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);
  return (
    <>
      {/* <div className=""> */}
        <div className={`fixed top-0 z-50 w-screen max-w-full flex flex-row justify-between items-center mx-auto px-5 py-3 ${scrollColor}`}>
          <div className="cursor-pointer">
            <LogoSvg width="6rem" className="text-black"/>
          </div>
          <div className=" flex justify-between">
            <span className="hidden lg:flex flex-row gap-3 lg:gap-3 xl:gap-5">
              {navItems.map((item) => {
                return <span className="mx-2 text-[1rem] font-semibold cursor-pointer">{item.title}</span>;
              })}
            </span>
            </div>

            <div className="flex gap-5 text-[1rem] font-semibold">
              <div className="hidden lg:flex gap-5">
                <span className="cursor-pointer">Shop</span>
                <span className="cursor-pointer">Account</span>
              </div>
              <span className="cursor-pointer">Menu</span>
            </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default Index;
