import { Button } from "@mui/material";

function CheckoutSubmitButton() {
  return (
    <Button
      variant="contained"
      sx={{ width: "100%", backgroundColor: "black", padding: "0.6rem 0.3rem" }}
      type="submit"
      form={"checkout-form"}
    >
      Place Order
    </Button>
  );
}

export default CheckoutSubmitButton;
