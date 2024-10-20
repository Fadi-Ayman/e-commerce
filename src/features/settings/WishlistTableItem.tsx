import { Typography } from "@mui/material";
import { ProductType } from "../../Types/ProductTypes";
import WishListProduct from "./WishListProduct";
import RemoveButton from "../../components/OneTruthyLogicPlaceButtons/RemoveButton";
import { formateCurrency } from "../../utils/helpers";
import AddToCartButton from "../../components/OneTruthyLogicPlaceButtons/AddToCartButton";

type WishlistTableItemProps = Pick<
  ProductType,
  "id" | "image" | "name" | "price"
>;

function WishlistTableItem({ id, name, price, image }: WishlistTableItemProps) {
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
      <AddToCartButton id={id} isInTable={true} />
      <RemoveButton removeFrom="wishlist" productId={id} />
    </>
  );
}

export default WishlistTableItem;
