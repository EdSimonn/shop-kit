/** @format */
"use client";

import { initialFooterItems } from "@/helpers";
import React, { useState } from "react";

const DesktopFooter = () => {
  const [footerItems] = useState(initialFooterItems);

  return (
    <div className="hidden md:block">
      <footer className="bg-white dark:bg-neutral-800 flex justify-center items-center sm:py-16 py-6">
        <div className="w-full flex gap-16 justify-center lg:flex-row flex-col max-w-screen-xl flex-wrap mx-auto p-3 px-6">
          <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap">
            {footerItems.map((item) => (
              <div key={item.title} className="flex flex-col">
                <h4 className=" text-white font-semibold">{item.title}</h4>
                <ul className="list-none mt-4">
                  {item.links.map((link, index) => (
                    <li
                      key={typeof link === "string" ? link : link.name}
                      className={`cursor-pointer text-gray-200 hover:text-white text-sm ${
                        index !== item.links.length - 1 ? "mb-4" : "mb-0"
                      }`}
                    >
                      {typeof link === "string" ? link : link.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex-[1] flex flex-col">
            <h4 className="text-white font-semibold">NEWSLETTER SIGN UP</h4>
            <p className="mt-4 text-sm text-gray-200 ">
              Sign up for exclusive updates, new arrivals and insider only
              discounts
            </p>
            <div className="flex gap-4 mt-4">
              <input
                placeholder="enter your email address"
                type="text"
                className="w-[60%] text-white p-2.5 outline-none border-[1px] border-gray-200 dark:bg-neutral-800"
              />
              <button className="py-2 px-6 bg-white">SUBMIT</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DesktopFooter;
