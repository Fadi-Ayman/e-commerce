import { Box, Typography } from "@mui/material";
import OrderSummaryItem from "../../components/OneUseComponents/OrderSummaryItem";
import TotalAndSubTotalPrice from "../../components/OneUseComponents/TotalAndSubTotalPrice";
import OrderSummaryList from "../../components/OneUseComponents/OrderSummaryList";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

function OrderSummary() {
  const cartList = useSelector((state: RootState) => state.Cart.cartList);

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        overflow: "auto",
        border: "1.1px solid black",
        bgcolor: "grey.50",
        borderRadius: "5px",
        maxHeight: { xs: "100%", md: "46rem" },
        scrollbarWidth: "thin",
        scrollbarColor: "grey transparent",
        // padding: "0rem 0rem 0rem 0rem",

        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey",
          borderRadius: "10px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
      }}
    >
      {/* Cart Sammary Title */}
      <Typography
        component={"p"}
        fontWeight={"500"}
        sx={{
          textAlign: "start",
          width: "100%",
          fontSize: { xs: "18px", md: "20px", lg: "25px" },
          position: "sticky",
          top: "0",
          padding: "0.8rem 1rem",
          zIndex: "99",
          bgcolor: "grey.50",
        }}
      >
        Order Summary
      </Typography>

      {/* Data */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "0rem 0.5rem 0.5rem 0.8rem",
            md: "0rem 1rem 1rem 1rem",
          },
        }}
      >
        {/* Cart Summary Items */}
        <OrderSummaryList>
          {cartList.map((item) => (
            <OrderSummaryItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              quantity={item.quantity}
              subTotal={item.subTotal}
            />
          ))}
        </OrderSummaryList>

        {/* Total */}
        <TotalAndSubTotalPrice />
      </Box>
    </Box>
  );
}

export default OrderSummary;
