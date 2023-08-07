/** @format */

import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="">
      <div
        className="border p-3 border-slate-950 w-fit"
        onClick={() => swiper.slidePrev()}
      >
        <MoveLeft />
      </div>
      <div
        className="border p-3 border-slate-950 w-fit"
        onClick={() => swiper.slideNext()}
      >
        <MoveRight />
      </div>
    </div>
  );
};
