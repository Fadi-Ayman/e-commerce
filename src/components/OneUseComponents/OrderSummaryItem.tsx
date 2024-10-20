import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import QuantityInput from "../QuantityInput";
import { useState } from "react";

type OrderSummaryItemProps = {
  name: string;
  image: string;
  price: number;
};

function OrderSummaryItem({ name, price, image }: OrderSummaryItemProps) {
  const [quantity, setQuantity] = useState<number>(1);

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
            gap: "0.5rem",
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
            <Typography>{name}</Typography>

            <QuantityInput quantity={quantity} setQuantity={setQuantity} />
          </Box>
        </Box>

        {/* Product Price */}

        <Typography sx={{ textAlign: "end", width: "50%" }}>
          {formateCurrency(price)}
        </Typography>
      </Box>

      <Divider />
    </>
  );
}

export default OrderSummaryItem;
