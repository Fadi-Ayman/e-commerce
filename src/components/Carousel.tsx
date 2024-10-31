import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/swiper.css";
import React from "react";

type CarouselProps = {
  children: React.ReactNode;
  breakpoints: {
    0: {
      slidesPerView: number;
      spaceBetween: number;
    };
    400: {
      slidesPerView: number;
      spaceBetween: number;
    };
    500: {
      slidesPerView: number;
      spaceBetween: number;
    };
    900: {
      slidesPerView: number;
      spaceBetween: number;
    };
    1200: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
  width?: string;
  display?: "none"|"flex";
};

export default function Carousel({
  children,
  breakpoints,
  width = "100%",
  display = "flex",
}: CarouselProps) {
  return (
    <Swiper
      breakpoints={breakpoints}
      freeMode={true}
      style={{ width: width, padding: "0.6rem 0.5rem",display:display }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {children}
    </Swiper>
  );
}
