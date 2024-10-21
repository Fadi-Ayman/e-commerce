import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";
import PaymentMethods from "../../components/OneUseComponents/PaymentMethods";
import TotalAndSubTotalPrice from "../../components/OneUseComponents/TotalAndSubTotalPrice";
import { useDispatch } from "react-redux";
import { setCurrentCartPage } from "../../store/CartSlice";

function CartSummary() {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleCheckout = () => {
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

        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.grey[700],
            padding: "0.5rem 1.5rem",
            minWidth: "100%",
            fontSize: "1rem",
            textTransform: "capitalize",
          }}
          onClick={handleCheckout}
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
}

export default CartSummary;
