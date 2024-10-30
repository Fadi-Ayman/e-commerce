import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { theme } from "../../styles/theme";
import { CartItemType } from "../../Types/Types";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/CartSlice";
import { RootState } from "../../store/store";
import { useAuth } from "../../context/AuthContext";

type AddToCartButtonProps = Omit<CartItemType, "subTotal"> & {
  gridRow?: string;
  gridColumn?: string;
  isInTable?: boolean;
};

function AddToCartButton({
  id,
  image,
  name,
  price,
  quantity = 1,
  gridRow = "",
  gridColumn = "",
  isInTable = false,
}: AddToCartButtonProps) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state: RootState) =>
    state.Cart.cartList.some((item) => item.id === id)
  );
  const { isAuthenticated } = useAuth();

  const CartItemData: CartItemType = {
    id,
    image,
    name,
    price,
    quantity,
    subTotal: quantity * price,
  };

  function handleAddToCartButton() {
    if (!isAuthenticated) {
      toast.error("Please Login First");
      return;
    }

    if (isInCart) {
      toast.error(`( ${name} ) is Already in the Cart`);
      return;
    }

    toast.success(`( ${name} ) Added to the Cart successfully`);
    dispatch(addToCart(CartItemData));
  }

  return (
    <Button
      onClick={handleAddToCartButton}
      className="fadein"
      variant="contained"
      sx={{
        bgcolor: theme.palette.grey[700],
        width: isInTable ? "fit-content" : "100%",
        "&:hover": { scale: "1.02 1.02" },
        transition: "0.2s",
        gridRow: gridRow,
        gridColumn: gridColumn,
        padding: isInTable
          ? { xs: "0.5rem 0.7rem", sm: "0.5rem 1rem" }
          : "0.6rem 0.5rem ",
        borderRadius: isInTable ? "5px" : "10px",
        fontSize: isInTable ? { xs: "9px", sm: "12px", md: "14px" } : "",
      }}
    >
      Add To Cart
    </Button>
  );
}

export default AddToCartButton;
