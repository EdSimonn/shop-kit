/** @format */

import React from "react";
import Image from "next/image";

export const BannerCard = ({ title, img, index }: any) => {
  return (
    <div
      key={index}
      className="max-w-screen-xl flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-8 mx-auto p-3 px-6 pt-12 overflow-hidden"
    >
      <p className="md:text-7xl text-[50px] md:text-left text-center items-center leading-tight max-w-md font-poppins">
        {title}
      </p>
      <Image src={img} alt="ban" className="h-auto w-[80%]" />
    </div>
  );
};

export const CategoryCard = ({ index, img, name }: any) => {
  return (
    <div key={index} className="max-w-screen-xl ">
      <div className="flex justify-center items-center h-auto bg-gray-600 ">
        <Image src={img} alt="cat" className="pt-6 h-48 md:h-72 w-96" />
      </div>
      <h4 className="mt-1 font-normal text-2xl">{name}</h4>
    </div>
  );
};

export const ProductCard = () => {
  return <div>ProductCard</div>;
};
