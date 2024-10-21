import { IconButton } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/CartSlice";

type RemoveButtonProps = {
  productId: string;
  productName: string;
  removeFrom: "cart" | "wishlist";
};

function RemoveButton({
  productId,
  productName,
  removeFrom,
}: RemoveButtonProps) {
  const dispatch = useDispatch();

  function handleRemove() {
    if (removeFrom === "cart") {
      dispatch(removeFromCart(productId));
      toast.success(`( ${productName} ) Removed from ${removeFrom} successfully`);
    }

    if (removeFrom === "wishlist") {
      // wishlist remove Logic
      toast.success(`( ${productName} ) Removed from ${removeFrom} successfully`);
    }
  }

  return (
    <IconButton
      onClick={handleRemove}
      size="small"
      sx={{ "&:hover": { color: "red" } }}
    >
      <ClearOutlinedIcon sx={{ fontSize: { xs: "1.3rem", md: "1.8rem" } }} />
    </IconButton>
  );
}

export default RemoveButton;
