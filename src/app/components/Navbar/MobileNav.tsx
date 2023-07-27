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
import Drawer from "../Drawer/Draweer";

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
                {/* <X /> */}
                <Drawer isOpen={isDrawerOpen} onClose={handleDrawerClose}>
                  <div>
                    <div className="py-4 overflow-y-auto">
                      <ul className="space-y-2 font-medium">
                        <li>
                          <span className="ml-3">Dashboard</span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 text-left whitespace-nowrap">
                            E-commerce
                          </span>
                          <ul
                            id="dropdown-example"
                            className="hidden py-2 space-y-2"
                          >
                            <li>
                              <a
                                href="#"
                                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                Products
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                              >
                                Billing
                              </a>
                            </li>
                            <li>Invoice</li>
                          </ul>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Kanban
                          </span>
                          <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                            Pro
                          </span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Inbox
                          </span>
                          <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                            3
                          </span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Users
                          </span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Products
                          </span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Sign In
                          </span>
                        </li>
                        <li>
                          <span className="flex-1 ml-3 whitespace-nowrap">
                            Sign Up
                          </span>
                        </li>
                      </ul>
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
