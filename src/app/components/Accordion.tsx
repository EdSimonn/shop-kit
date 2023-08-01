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
    <div className="">
      {footerItems.map((item, index) => (
        <div key={index}>
          <div>
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
            <hr className="my-1 border-gray-200 sm:mx-auto dark:border-gray-700" />
          </div>
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
    </div>
  );
};

export default Accordion;
