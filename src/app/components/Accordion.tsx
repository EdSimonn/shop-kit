/** @format */

"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { initialFooterItems } from "@/helpers";

const Accordion: React.FC = () => {
  const [footerItems, setFooterItems] = useState(initialFooterItems);

  const handleAccordionToggle = (index: number) => {
    setFooterItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isActive: i === index ? !item.isActive : false,
      }))
    );
  };

  return (
    <div className=" dark:bg-neutral-800">
      {footerItems.map((item, index) => (
        <div
          key={index}
          className="border-b border-neutral-200 dark:bg-neutral-800"
        >
          <div className="border-bottom">
            <div
              className={`group relative flex w-full items-center font-semibold bg-white px-5 py-4 text-left text-xs dark:bg-neutral-800 dark:text-white ${
                item.isActive ? "bg-white" : ""
              }`}
              onClick={() => handleAccordionToggle(index)}
            >
              {item.title}
              <span
                className={`-mr-1 ml-auto h-5 w-5 ${item.isActive ? "" : ""}`}
              >
                <ChevronDown
                  className={`transition duration-200 h-6 w-6 ${
                    item.isActive ? "rotate-[-180deg]" : ""
                  }`}
                />
              </span>
            </div>
          </div>
          <div className="w-full border-dashed" />
          <div className={`${item.isActive ? "visible" : "hidden"} border-0 `}>
            <ul className="mt-4 px-5">
              {item.links.map((link, index) => (
                <li
                  key={index}
                  className={`text-gray-200 hover:text-white cursor-pointer ${
                    index !== item.length - 1 ? `mb-3` : `mb-0`
                  } text-xs text-white`}
                >
                  {typeof link === "string" ? link : link.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <div className="flex flex-col px-5 py-5">
        <h4 className="text-white font-semibold text-sm">NEWSLETTER SIGN UP</h4>
        <p className="mt-4 text-sm text-gray-200 ">
          Sign up for exclusive updates, new arrivals and insider only discounts
        </p>
        <div className="flex gap-4 mt-4">
          <input
            placeholder="enter your email address"
            type="text"
            className="w-[60%] py-2 p-2.5 text-white outline-none border-[1px] border-gray-200 bg-neutral-800"
          />
          <button className="py-2 px-6 bg-white text-sm font-semibold">
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
