import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import CustomNavItems from "./customNavItems";
import { Link } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <Disclosure as="nav" className="bg-white-100">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 dark-black hover:cursor-pointer">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-7 group-data-open:hidden stroke-2"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block "
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to={"/"}>
              <div className="flex shrink-0 items-center">
                <img
                  alt="Lo Tech Hub"
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
                <p className="text-xl ml-2">LoTechHub</p>
              </div>
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <CustomNavItems linkClass="rounded-md px-3 py-2 text-sm font-medium" />
              </div>
            </div>

            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="cursor-pointer relative flex rounded-full text-sm">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <Cog8ToothIcon className="w-7 h-7 dark-black" />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                  >
                    Theme Mode
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <CustomNavItems linkClass="block rounded-md px-3 py-2 text-base font-medium" />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default CustomNavBar;
