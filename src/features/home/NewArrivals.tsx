import { Box, Typography } from "@mui/material";
import Carousel from "../../components/Carousel";
import { DummyProducts } from "../../utils/dummyData";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { productsCarouselMaxCount } from "../../utils/constants";

const productCarouselbreakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 15,
  },
  400: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  500: {
    slidesPerView: 2.5,
    spaceBetween: 20,
  },
  900: {
    slidesPerView: 3.5,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 5,
    spaceBetween: 40,
  },
};

function NewArrivals() {
  return (
    <Box
      component={"section"}
      sx={{
        width: { xs: "92%", sm: "93%", md: "94%", lg: "93%" },
        ml: "auto",
        position: "relative",
      }}
    >
      <Typography
        variant="h3"
        component={"h3"}
        fontSize={{ xs: "1.7rem", sm: "2rem", md: "2.5rem", lg: "2.8rem" }}
        sx={{
          position: "absolute",
          top: "0rem",
          left: "0rem",
          zIndex: "999",
          fontWeight: "500",
          mt: "0.2rem",
        }}
      >
        New Arrivals
      </Typography>

      <Carousel width="100%" breakpoints={productCarouselbreakpoints}>
        {DummyProducts.map((product, i) => {
          if (i >= productsCarouselMaxCount) return null;
          return (
            <SwiperSlide key={product.id}>
              <ProductCard
                isInSlider={true}
                id={product.id}
                tag={product.tag}
                discount={product.discount}
                image={product.image}
                name={product.name}
                price={product.price}
                ratingValue={product.ratingValue}
              />
            </SwiperSlide>
          );
        })}
      </Carousel>
    </Box>
  );
}

export default NewArrivals;
