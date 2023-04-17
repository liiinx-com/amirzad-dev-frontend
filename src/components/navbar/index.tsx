"use client";

import { useState } from "react";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { Menu } from "./menu";
import { ThemeSwitch } from "./theme-switch";
import { Logo, IconWrapper } from "@/components";
import { useTheme } from "@/contexts/theme/theme-context";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  const {
    navbar: { className, logoClassName, sloganClassName },
  } = theme;

  return (
    <nav className={`relative ${className} shadow `} id="home">
      <div className="container px-6 py-4 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href={process.env.APP_URL}>
              <Logo
                text="Amir Zad"
                textClassName={logoClassName}
                sloganClassName={sloganClassName}
              />
            </a>

            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <IconWrapper icon={<CloseIcon />} />
                ) : (
                  <IconWrapper icon={<MenuIcon />} />
                )}
              </button>
            </div>
          </div>

          <div
            className={
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full " +
                  "absolute inset-x-0 z-20 w-full px-6 py-4  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
            }
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Menu />
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
              <button className="mx-4 text-gray-600 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none">
                <ThemeSwitch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
