import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/productPageSwipper.css";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import { Swiper as SwiperType } from "swiper"; // Import Swiper type

type NavigationCarouselProps = {
  images: string[];
  activeIndex: number;
  handleImageChange: React.Dispatch<React.SetStateAction<number>>;
};

export default function NavigationCarousel({
  images,
  activeIndex = 0,
  handleImageChange,
}: NavigationCarouselProps) {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const onSlideChange = (swiper: SwiperType) => {
    handleImageChange(swiper.activeIndex);
  };

  return (
    <Swiper
      ref={swiperRef}
      style={{
        width: "100%",
        height: "100%",
        gridColumn: "1/-1",
        gridRow: "1/4",
        borderRadius: "10px",
        overflow: "hidden",
      }}
      navigation={true}
      modules={[Navigation]}
      onSlideChange={onSlideChange}
    >
      {images.map((image, index) => (
        <SwiperSlide className="m-0" key={index}>
          <img
            src={image}
            alt={`Product Image ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "fill",
              display: "block",
            }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
