import { Button, Paper, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";
import OrderCompleteItem from "../../../components/OneUseComponents/OrderCompleteItem";
import Carousel from "../../../components/Carousel";
import { SwiperSlide } from "swiper/react";
import OrderCompleteOrderDetails from "../../../components/OneUseComponents/OrderCompleteOrderDetails";
import { useNavigate } from "react-router-dom";

const orederCompletebreakpoints = {
  0: {
    slidesPerView: 1.5,
    spaceBetween: 1,
  },
  400: {
    slidesPerView: 1.5,
    spaceBetween: 1,
  },
  500: {
    slidesPerView: 2.5,
    spaceBetween: 1,
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 1,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 1,
  },
};

function OrderComplete() {
  // Protect Route Needed

  const navigate = useNavigate()

  return (
    <Paper
      sx={{
        width: { xs: "90%", md: "640px" },
        maxWidth: "640px",
        boxShadow: "0px 0px 20px #bebebe, 20px 30px 20px #ffffff",
        mx: "auto",
        my: { xs: "2rem", md: "1.5rem" },
        padding: "3rem 1rem",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      {/* Thank you Message */}
      <Typography
        variant="h5"
        component={"h5"}
        sx={{
          textAlign: "center",
          color: theme.palette.grey[300],
          fontWeight: "500",
          padding: { xs: "0rem 2rem", sm: "0rem 6rem" },
        }}
      >
        Thank you! 🎉
      </Typography>

      {/* FeedBack Message  */}
      <Typography
        variant="h4"
        component={"h4"}
        sx={{
          textAlign: "center",
          color: "black",
          fontWeight: "500",
          padding: { xs: "0rem 2rem", sm: "0rem 7rem" },
        }}
      >
        Your order has been recieved
      </Typography>

      {/* Order Complete List */}
      <Carousel width="70%" breakpoints={orederCompletebreakpoints}>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={10} image="/Card.png" name="name" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={1} image="/Card.png" name="name" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={1} image="/Card.png" name="name" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={1} image="/Card.png" name="name" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={1} image="/Card.png" name="name" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", backgroundColor: "transparent" }}>
          <OrderCompleteItem quantity={1} image="/Card.png" name="name" />
        </SwiperSlide>
      </Carousel>

      {/* Order Details */}

      <OrderCompleteOrderDetails />

      {/* Orders History Button */}

      <Button
        variant="contained"
        onClick={()=>navigate("/settings/orders")}
        sx={{
          width: "100%",
          maxWidth: "250px",
          backgroundColor: "black",
          padding: "0.6rem 0.3rem",
          textTransform:"capitalize",
          fontSize:"1rem",
          borderRadius:"50px",
          mt:{xs:"1rem",md:"2rem"},
        }}
      >
        Orders History
      </Button>
    </Paper>
  );
}

export default OrderComplete;
