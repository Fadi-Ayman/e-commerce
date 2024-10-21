import { Typography } from "@mui/material";
import WishListProduct from "./WishListProduct";
import RemoveButton from "../../components/OneTruthyLogicPlaceButtons/RemoveButton";
import { formateCurrency } from "../../utils/helpers";
import AddToCartButton from "../../components/OneTruthyLogicPlaceButtons/AddToCartButton";
import { CartItemType } from "../../Types/Types";

type WishlistTableItemProps = Omit<CartItemType, "subTotal"|"quantity">;

function WishlistTableItem({
  id,
  name,
  price,
  image,
}: WishlistTableItemProps) {
  return (
    <>
      <WishListProduct productName={name} productImage={image} />
      <Typography
        sx={{
          fontSize: { xs: "12px", sm: "16px" },
          fontWeight: { xs: "500", sm: "bold" },
          textAlign: "center",
        }}
      >
        {formateCurrency(price)}
      </Typography>

      <AddToCartButton
        image={image}
        name={name}
        price={price}
        quantity={1}
        id={id}
        isInTable={true}
      />

      <RemoveButton productName={name} removeFrom="wishlist" productId={id} />
    </>
  );
}

export default WishlistTableItem;
