/** @format */

import { Heart, ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";

export const DesktopNav = () => {
  return (
    <div className="hidden lg:block">
      <nav className="border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3 px-8">
          <Link href="#" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              SHOP KIT
            </span>
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col text-sm mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
              <Link href="/cart" className="flex py-2 gap-2">
                <ShoppingCart strokeWidth={1.35} />
                <span>Shopping Cart</span>
                <p className="inline-flex items-center justify-center w-3 h-3 p-3 text-sm font-medium text-blue-800 bg-pink-100 rounded-full">
                  0
                </p>
              </Link>
              <Link href="/wishlist" className="flex py-2 gap-2">
                <Heart strokeWidth={1.35} />
                <span>My Wish List</span>
              </Link>
              <Link href="">
                <div className="block py-2">Sign in or Create an Account</div>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// <!-- drawer init and toggle -->
// <div class="text-center">
//    <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true" aria-controls="drawer-backdrop">
//    Show drawer with backdrop
//    </button>
// </div>
