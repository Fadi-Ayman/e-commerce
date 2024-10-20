import { Box } from "@mui/material";
import OrderSummary from "../OrderSummary.tsx";
import CheckoutForm from "../CheckoutForm.tsx";
import CheckoutSubmitButton from "../../../components/OneUseComponents/CheckoutSubmitButton.tsx";

function Checkout() {

  return (
    <Box
      sx={{
        width: { xs: "98%", md: "85%" },
        height: "100%",
        display: "grid",
        mx: "auto",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1.6fr 1.3fr",
          lg: "1.6fr 1fr",
        },
        columnGap:"2rem",
        rowGap: "1.5rem",
        padding: "1rem",
        my:"1rem",
      }}
    >

      <CheckoutForm />

      <OrderSummary />

      <CheckoutSubmitButton />
      
    </Box>
  );
}

export default Checkout;
