import { Typography } from "@mui/material";
import WishListProduct from "../settings/WishListProduct";
import { formateCurrency } from "../../utils/helpers";
import QuantityInput from "../../components/QuantityInput";
import RemoveButton from "../../components/OneTruthyLogicPlaceButtons/RemoveButton";
import { CartItemType } from "../../Types/Types";
import { setQuantity } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

type CartItemProps = CartItemType;

function CartItem({
  name,
  image,
  price,
  id,
  quantity,
  subTotal,
}: CartItemProps) {
  const dispatch: AppDispatch = useDispatch();

  const handleSetQuantity = (quantity: number) =>
    dispatch(setQuantity({ id, quantity }));

  return (
    <>
      <WishListProduct productName={name} productImage={image} />

      <QuantityInput quantity={quantity} setQuantity={handleSetQuantity} />

      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          fontWeight: "500",
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
        {formateCurrency(subTotal)}
      </Typography>

      <RemoveButton productName={name} removeFrom="cart" productId={id} />
    </>
  );
}

export default CartItem;
