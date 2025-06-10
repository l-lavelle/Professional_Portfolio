import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CustomNavItems from "./customNavItems";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { CustomDivider } from "../globalComponents";

const CustomNavBar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [closed, setClosed] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20`}
      style={{
        backgroundColor: `${scrolled ? "rgba(0, 0, 0, 0.90)" : "#0f1114"}`,
      }}
    >
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <div className="relative inline-flex items-center justify-center rounded-md p-2 dark-black hover:cursor-pointer">
              <Bars3Icon
                className={`size-7 stroke-2 stroke-off-white ${
                  closed ? "block" : "hidden"
                }`}
                onClick={() => {
                  setClosed(false);
                }}
              />
              <XMarkIcon
                className={`size-6 stroke-off-white ${
                  closed ? "hidden" : "block"
                }`}
                onClick={() => {
                  setClosed(true);
                }}
              />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={"/"}>
              <div className="flex shrink-0 items-center">
                <img
                  alt="Lo Tech Hub"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
                <p className="text-off-white text-xl ml-2">LoTechHub</p>
              </div>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <CustomNavItems linkClass="rounded-md px-3 py-2 text-sm font-medium" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`sm:hidden absolute bg-nav-bar w-full 
          ${closed ? "hidden" : "block"} `}
      >
        <CustomDivider color={"light-black"} margin={"1"} />
        <div className="space-y-1 px-2 pt-2 pb-3">
          <CustomNavItems
            linkClass="block rounded-md px-3 py-2 text-base font-medium"
            onClick={setClosed}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomNavBar;
