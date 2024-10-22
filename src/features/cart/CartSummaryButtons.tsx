import { Box, Button } from "@mui/material"
import { theme } from "../../styles/theme"
import { useDispatch } from "react-redux"
import { resetEntireCartData } from "../../store/CartSlice"


type CartSummaryButtonsProps = {
  handleCheckout : () => void 

}


function CartSummaryButtons({handleCheckout}:CartSummaryButtonsProps) {

  const dispatch = useDispatch()

  function handleResetCart() {
    dispatch(resetEntireCartData())
  }


  return (
    <Box sx={{ display: "flex", gap: "0.7rem" ,flexDirection:{xs:"column"}}}>
          
    <Button
      variant="contained"
      sx={{
        bgcolor: theme.palette.grey[700],
        padding: "0.5rem 1.5rem",
        minWidth: "100%",
        fontSize: "1rem",
        textTransform: "capitalize",
      }}
      onClick={handleResetCart}
    >
      Clear the cart
    </Button>
    
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

  )
}

export default CartSummaryButtons
