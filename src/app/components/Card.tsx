/** @format */

import React from "react";
import Image from "next/image";

export const BannerCard = ({ title, img, index }: any) => {
  return (
    <div
      key={index}
      className="max-w-screen-xl flex flex-col justify-center sm:flex-row sm:justify-between items-center gap-8 mx-auto px-6 pt-12 overflow-hidden"
    >
      <p className="md:text-7xl text-[50px] md:text-left text-center items-center leading-tight max-w-md font-poppins">
        {title}
      </p>
      <Image src={img} alt="ban" className="md:h-[600px] h-auto w-[50%]" />
    </div>
  );
};

export const CategoryCard = ({ index, img, name }: any) => {
  return (
    <div
      key={index}
      className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 max-w-screen-xl "
    >
      <div className="flex justify-center items-center max-h-max bg-[#dddbe7] pt-9">
        <Image
          src={img}
          alt="cat"
          className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 w-72"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
      <div className="absolute inset-0 flex translate-x-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-x-0">
        <h4 className="text-white">{name}</h4>
      </div>
    </div>
  );
};

// export const ProductCard = ({ index, img, name, price, title }: any) => {
//   return (
//     <div
//       key={index}
//       // className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 max-w-screen-xl "
//     >
//       <div className="bg-[#ffff] pt-9">
//         <Image
//           src={img}
//           alt="cat"
//           className="object-cover w-72"
//           // className="object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125 w-72"
//         />
//       </div>
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div> */}
//       {/* <div className="absolute inset-0 flex translate-x-[100%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-x-0"></div> */}
//       <h4 className="text-black">{name}</h4>
//     </div>
//   );
// };

export const ProductCard = ({ index, img, name, price, title }: any) => {
  return (
    <div
      key={index}
      className="rounded-[10px] py-5 sm:px-5 px-8 text-left bg-white"
    >
      <div className="bg-gray-300">
        <Image src={img} alt="cat" />
      </div>
      <h4 className="text-black">{name}</h4>
      <p className="">
        <span>$</span>
        {price}
      </p>
    </div>
  );
};

export const SoonCard = ({ img, name }: any) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-white/100 max-w-screen-xl ">
      <div className="max-w-[650px] text-left">
        <Image
          src={img}
          alt={name}
          className=" w-52 h-52 transition-transform duration-500 group-hover:rotate-3 bg-slate-200 py-2 px-2"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-white/100 group-hover:via-white/100 group-hover:to-white/100"></div>
      <div className="absolute inset-0 flex -translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h4 className="text-black text-xs">{name}</h4>
      </div>
    </div>
  );
};
