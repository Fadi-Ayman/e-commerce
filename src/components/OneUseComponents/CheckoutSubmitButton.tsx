import { Button } from "@mui/material";
import useOrders from "../../hooks/ordersHooks/useOrders";

function CheckoutSubmitButton() {
  const { addOrderLoading } = useOrders();

  return (
    <Button
      disabled={addOrderLoading}
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
