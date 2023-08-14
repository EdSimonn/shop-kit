/** @format */

import { MoveLeft, MoveRight } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  const handlePrev = () => {
    swiper.slidePrev();
  };
  const handleNext = () => {
    swiper.slideNext();
  };

  return (
    <div className="">
      <div
        className="border p-3 border-slate-950 w-fit hover:bg-slate-950 hover:text-white"
        onClick={handlePrev}
      >
        <MoveLeft />
      </div>
      <div
        className="border p-3 border-slate-950 w-fit hover:bg-slate-950 hover:text-white"
        onClick={handleNext}
      >
        <MoveRight />
      </div>
    </div>
  );
};
