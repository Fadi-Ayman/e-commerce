import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { shippingPrice } from "../../utils/constants";
import { useLocation } from "react-router-dom";

function TotalAndSubTotalPrice() {
  const pathname = useLocation().pathname;
  const cartList = useSelector((state: RootState) => state.Cart.cartList);
  
  
  const subTotal = cartList.reduce((total, product) => total + product.subTotal, 0);
  const totalPrice = subTotal + shippingPrice;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
        position:"sticky",
        bottom:"0",
        bgcolor:"grey.50",
        zIndex:"9999",
        padding:pathname === "/cart/checkout" ? "1rem": "0rem"
      }}
    >

      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component={"span"}
          fontWeight={"400"}
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            display: "block",
          }}
        >
          Subtotal
          <span style={{ marginLeft: "0.4rem",color:"grey",fontSize:"12px" ,verticalAlign:"middle"}}> +shipping</span>
        </Typography>

        <Typography
          component={"span"}
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            display: "block",
          }}
        >
          {formateCurrency(subTotal)}
        </Typography>
      </Box>

      <Divider />

      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component={"span"}
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            display: "block",
          }}
        >
          Total
        </Typography>

        <Typography
          component={"span"}
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            display: "block",
          }}
        >
          {formateCurrency(totalPrice)}
        </Typography>
      </Box>
    </Box>
  );
}

export default TotalAndSubTotalPrice;
