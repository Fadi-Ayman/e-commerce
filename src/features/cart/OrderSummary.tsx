import { Box, Typography } from "@mui/material";
import OrderSummaryItem from "../../components/OneUseComponents/OrderSummaryItem";
import TotalAndSubTotalPrice from "../../components/OneUseComponents/TotalAndSubTotalPrice";
import OrderSummaryList from "../../components/OneUseComponents/OrderSummaryList";

function OrderSummary() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: "1rem",
        overflow: "hidden",
        border: "1.1px solid black",
        bgcolor: "grey.50",
        borderRadius: "5px",
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
        }}
      >
        {/* Cart Summary Items */}
        <OrderSummaryList>
          <OrderSummaryItem image="/Card.png" name="Headphone" price={140} />
          <OrderSummaryItem image="/Card.png" name="Headphone" price={140} />
          <OrderSummaryItem image="/Card.png" name="Headphone" price={140} />
        </OrderSummaryList>

        {/* Total */}
        <TotalAndSubTotalPrice />
      </Box>
    </Box>
  );
}

export default OrderSummary;
