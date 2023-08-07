/** @format */
"use client";

import React from "react";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { bannerData, category } from "@/helpers";
import { BannerCard, CategoryCard } from "../Card";
import { SwiperNavButtons } from "../SwiperNavButtons";

export const Banner = ({}) => {
  const sliderSettings: SwiperOptions = {
    modules: [Navigation, Autoplay],
    spaceBetween: 10,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  };

  return (
    <div>
      <div className="bg-[#ffedff] relative">
        <Swiper {...sliderSettings}>
          {bannerData.map((bannerData, index) => (
            // eslint-disable-next-line react/jsx-key
            <SwiperSlide>
              <BannerCard key={index} {...bannerData} />
            </SwiperSlide>
          ))}
          <div className="absolute bottom-0 right-0 p-6 z-10 pointer-events-auto">
            <SwiperNavButtons />
          </div>
        </Swiper>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 p-4 px-8 py-24 ">
        {category.map((cat, index) => (
          <CategoryCard key={index} {...cat} />
        ))}
      </div>
    </div>
  );
};
