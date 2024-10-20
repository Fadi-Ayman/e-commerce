import { Box } from "@mui/material";
import QuantityInput from "../../components/QuantityInput";
import AddToCartButton from "../../components/OneTruthyLogicPlaceButtons/AddToCartButton";
import { ProductType } from "../../Types/ProductTypes";
import { useState } from "react";
import AddToWishListButton from "../../components/OneTruthyLogicPlaceButtons/AddToWishListButton";

type ProductControlsProps = Pick<ProductType, "id">;

function ProductControls({ id: productId }: ProductControlsProps) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
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
        setQuantity={setQuantity}
      />
      <AddToCartButton id={productId} gridRow="2/3" gridColumn="1/-1" />
      <AddToWishListButton
        id={productId}
        isInCard={false}
        gridColumn="3/-1"
        gridRow="1/2"
      />
    </Box>
  );
}

export default ProductControls;
