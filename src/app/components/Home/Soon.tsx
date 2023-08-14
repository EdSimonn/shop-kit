/**
 * eslint-disable react/no-unescaped-entities
 *
 * @format
 */

/** @format */

import { soon } from "@/helpers";
import React from "react";
import { SoonCard } from "../Card";

const Soon = () => {
  return (
    <div className="flex w-full justify-between items-center mx-auto p-6 md:px-8 lg:px-12 md:gap-8 gap-0 md:py-24 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3">
        {soon.map((soonest) => (
          // eslint-disable-next-line react/jsx-key
          <SoonCard key={soonest} {...soonest} />
        ))}
      </div>
      <div className="hidden md:block md:w-2/5">
        <h4 className="text-5xl mb-6 font-serif">Coming Soon</h4>
        <p className="font-serif tracking-wider text-sm items-start max-w-md mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
        <p className="flex justify-end max-w-md text-2xl font-serif">
          ___ #ShopKit
        </p>
      </div>
    </div>
  );
};

export default Soon;
