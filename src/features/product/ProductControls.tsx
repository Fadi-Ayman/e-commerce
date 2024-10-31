import { Box } from "@mui/material";
import QuantityInput from "../../components/QuantityInput";
import AddToCartButton from "../../components/OneTruthyLogicPlaceButtons/AddToCartButton";
import { useState } from "react";
import AddToWishListButton from "../../components/OneTruthyLogicPlaceButtons/AddToWishListButton";
import { CartItemType } from "../../Types/Types";

type ProductControlsProps = Omit<CartItemType, "quantity" | "subTotal">;

function ProductControls({
  id: productId,
  image: productImage,
  name: productName,
  price: productPrice,
}: ProductControlsProps) {
  const [quantity, setQuantity] = useState<number>(1);

  function handleSetQuantity(quantity: number) {
    setQuantity(quantity);
  }

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: { xs: "flex", sm: "grid" },
        flexDirection: "column",
        gridTemplateColumns: "repeat(6,1fr)",
        gridTemplateRows: "repeat(2,1fr)",
        padding: { xs: "0.8rem", lg: "1rem" },
        gap: "1rem",
        alignItems: "stretch",
      }}
    >
      <QuantityInput
        isInTable={false}
        gridColumn="1/3"
        gridRow="1/2"
        quantity={quantity}
        setQuantity={handleSetQuantity}
      />

      <AddToCartButton
        id={productId}
        image={productImage}
        name={productName}
        price={productPrice}
        quantity={quantity}
        gridRow="2/3"
        gridColumn="1/-1"
      />

      <AddToWishListButton
        id={productId}
        isInCard={false}
        gridColumn="3/-1"
        gridRow="1/2"
        image={productImage}
        name={productName}
        price={productPrice}
      />
    </Box>
  );
}

export default ProductControls;
