import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import QuantityInput from "../QuantityInput";
import { CartItemType } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { setQuantity } from "../../store/CartSlice";

type OrderSummaryItemProps = Omit<CartItemType, "price">;

function OrderSummaryItem({ id,name, image, quantity, subTotal }: OrderSummaryItemProps) {

  const dispatch = useDispatch()

  function handleSetQuantity(quantity: number) {
    dispatch(setQuantity({ id, quantity }))
  }



  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          padding: "1rem 0rem",
        }}
      >
        {/* Product Details */}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {/* Image */}

          <img
            style={{ width: "100px", height: "115px", objectFit: "fill" }}
            src={image}
            alt={name}
          />

          {/* Product Details (Name, Quantity) */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "start",
              justifyContent: "start",
            }}
          >
            <Typography sx={{ fontWeight: "500" }}>{name}</Typography>

            <QuantityInput quantity={quantity} setQuantity={handleSetQuantity} />
          </Box>
        </Box>

        {/* Product Price */}

        <Typography sx={{ textAlign: "end", width: "50%" ,fontWeight:"500"}}>
          {formateCurrency(subTotal)}
        </Typography>
      </Box>

      <Divider />
    </>
  );
}

export default OrderSummaryItem;
