/** @format */

// /** @format */
// "use client";

// import React, { useRef } from "react";
// import { ProductCard } from "../Card";
// import { products } from "@/helpers";
// import "swiper/swiper-bundle.min.css";

// export const Featured = () => {
//   return (
//     <div className="mx-auto p-3 lg:px-12 bg-[#dddbe7]">
//       <div className="p-4 px-8 py-24 ">
//         {/* {products.map((product, index) => (
//           <ProductCard key={index} {...product} />
//         ))} */}
//       </div>
//     </div>
//   );
// };

/** @format */
"use client";

import React, { useRef } from "react";
import { ProductCard } from "../Card";
import { products } from "@/helpers";
import { Navigation, Autoplay } from "swiper";
import SwiperCore, { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { SwiperNavButtons } from "../SwiperNavButtons";
import "swiper/swiper-bundle.min.css";

// SwiperCore.use([Navigation]);

export const Featured = () => {
  return (
    <div className="mx-auto p-3 lg:px-12 bg-[#dddbe7]">
      <div className="p-4 px-8 py-24 ">
        {/* {products.map((product, index) => (
          // eslint-disable-next-line react/jsx-key
          <ProductCard key={index} {...product} />
        ))} */}
      </div>
    </div>
  );
};
