import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PaymentMethods from "../../components/OneUseComponents/PaymentMethods";
import TotalAndSubTotalPrice from "../../components/OneUseComponents/TotalAndSubTotalPrice";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentCartPage } from "../../store/CartSlice";
import { RootState } from "../../store/store";
import toast from "react-hot-toast";
import CartSummaryButtons from "./CartSummaryButtons";

function CartSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const selectedPaymanetMethod = useSelector(
    (state: RootState) => state.Cart.paymentMethod
  )


  const handleCheckout = () => {
    if(!selectedPaymanetMethod) {
      toast.error("Please select a payment method")
      return
    }
    
    navigate("/cart/checkout");
    dispatch(setCurrentCartPage(1))
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        padding: { xs: "1rem", md: "1.2rem 1.5rem" },
        overflow: "hidden",
        border: "1.1px solid black",
        bgcolor: "grey.50",
        borderRadius: "5px",
        gap: "1rem",
      }}
    >
      {/* Cart Sammary Title */}
      <Typography
        component={"p"}
        fontWeight={"500"}
        sx={{
          textAlign: "start",
          width: "100%",
          fontSize: { xs: "18px", md: "22px" },
        }}
      >
        Cart Summary
      </Typography>

      {/* Data */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: {xs:"2rem",md:"2.5rem"},
        }}
      >
        
        <PaymentMethods />

        <TotalAndSubTotalPrice />

        <CartSummaryButtons handleCheckout={handleCheckout} />
      </Box>
    </Box>
  );
}

export default CartSummary;
