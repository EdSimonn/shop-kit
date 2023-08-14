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
    <>
      <div className="bg-[#dddbe7]">
        <div className="relative">
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
      </div>
      <div className="mx-auto lg:px-12 p-4 px-8 md:py-24 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {category.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </>
  );
};
