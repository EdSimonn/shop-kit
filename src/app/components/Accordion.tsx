/** @format */

"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { initialAccordionItems } from "@/helpers";

const Accordion: React.FC = () => {
  const [accordionItems, setAccordionItems] = useState(initialAccordionItems);

  const handleAccordionToggle = (index: number) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item, i) => ({
        ...item,
        isActive: i === index ? !item.isActive : false,
      }))
    );
  };

  return (
    <div className="-space-y-1">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="rounded-none border border-l-0 border-r-0 border-t-0 border-neutral-200 dark:bg-neutral-800"
        >
          <div className="border-bottom">
            <button
              className={`group relative flex w-full items-center font-semibold border-0 bg-white px-5 py-4 text-left text-xs dark:bg-neutral-800 dark:text-white ${
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
            </button>
          </div>
          <div className="w-full border border-dotted"></div>
          <div className={`${item.isActive ? "visible" : "hidden"} border-0 `}>
            <ul className="mt-4 px-5">
              {item.links.map((link, index) => (
                <li
                  key={index}
                  className={`${
                    index !== item.length - 1 ? `mb-2` : `mb-0`
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
