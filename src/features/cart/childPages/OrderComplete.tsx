import { Button, Paper, Typography } from "@mui/material";
import { theme } from "../../../styles/theme";
import OrderCompleteItem from "../../../components/OneUseComponents/OrderCompleteItem";
import Carousel from "../../../components/Carousel";
import { SwiperSlide } from "swiper/react";
import OrderCompleteOrderDetails from "../../../components/OneUseComponents/OrderCompleteOrderDetails";
import { Navigate, useNavigate } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect } from "react";
import { resetCartDataList } from "../../../store/CartSlice";


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
const currentPage = 2;

function OrderComplete() {
  const navigate = useNavigate();
  const cartList = useSelector((state: RootState) => state.Cart.cartList);
  const storeCurrentPage = useSelector(
    (state: RootState) => state.Cart.currentCartPage
  );
  const dispatch = useDispatch();

  // This page Data From server , because of order Id



  // Reset cart Data at last Page
  useEffect(() =>{
    dispatch(resetCartDataList());
  },[dispatch])



  
  if (storeCurrentPage !== currentPage) return <Navigate to="/cart" />;

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
        {cartList.map((product) => (
          <SwiperSlide
          key={product.id}
            style={{ width: "100%", backgroundColor: "transparent" }}
          >
            <OrderCompleteItem
              key={product.id}
              quantity={product.quantity}
              image={product.image}
              name={product.name}
            />
          </SwiperSlide>
        ))}
      </Carousel>

      {/* Order Details */}

      <OrderCompleteOrderDetails
        id={"23123"}
        createdAt={new Date().toDateString()}
        totalPrice={15324523}
        paymentMethod={"pay-on-delivery"}
      />

      {/* Orders History Button */}

      <Button
        variant="contained"
        onClick={() => navigate("/settings/orders")}
        sx={{
          width: "100%",
          maxWidth: "250px",
          backgroundColor: "black",
          padding: "0.6rem 0.3rem",
          textTransform: "capitalize",
          fontSize: "1rem",
          borderRadius: "50px",
          mt: { xs: "1rem", md: "2rem" },
        }}
      >
        Orders History
      </Button>
    </Paper>
  );
}

export default OrderComplete;
