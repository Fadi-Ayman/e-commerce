import { Typography } from "@mui/material";
import WishListProduct from "../settings/WishListProduct";
import { formateCurrency } from "../../utils/helpers";
import { useState } from "react";
import QuantityInput from "../../components/QuantityInput";
import RemoveButton from "../../components/OneTruthyLogicPlaceButtons/RemoveButton";

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  image: string;
};

function CartItem({ name, image, price, id }: CartItemProps) {
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <>
      <WishListProduct productName={name} productImage={image} />

      <QuantityInput quantity={quantity} setQuantity={setQuantity} />

      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          fontWeight: "400",
          textAlign: "center",
        }}
      >
        {formateCurrency(price)}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {formateCurrency(price * quantity)}
      </Typography>

      <RemoveButton removeFrom="cart" productId={id} />
    </>
  );
}

export default CartItem;
