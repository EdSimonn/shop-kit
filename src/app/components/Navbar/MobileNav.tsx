/** @format */
"use client";

import {
  Heart,
  Menu,
  Search,
  ShoppingCart,
  UserCircle,
  UserCircle2,
  X,
} from "lucide-react";
import React, { useState } from "react";
import Drawer from "../Drawer";

export const MobileNav = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <div className="lg:hidden">
      <nav className="border-b border-gray-200">
        <div className="flex w-full md:flex md:w-auto items-center justify-between mx-auto p-3 px-6">
          <div className="">
            <ul className="flex py-2 gap-x-6 text-sm md:flex-row md:border-0 ">
              <li onClick={handleDrawerOpen}>
                <Menu />
                <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                  <div>
                    <div className="py-4 overflow-y-auto">
                      <ul className="space-y-2 font-medium"></ul>
                    </div>
                  </div>
                </Drawer>
              </li>
              <li>
                <Search strokeWidth={1.25} />
              </li>
            </ul>
          </div>

          <a href="#">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              SHOP KIT
            </span>
          </a>

          <div className="">
            <ul className="flex py-2 gap-x-8 text-sm md:flex-row md:border-0 ">
              <li>
                <UserCircle strokeWidth={1.25} />
              </li>
              <li>
                <ShoppingCart strokeWidth={1.25} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
