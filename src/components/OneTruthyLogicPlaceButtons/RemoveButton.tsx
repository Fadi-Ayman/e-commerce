import { IconButton } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import toast from "react-hot-toast";

type RemoveButtonProps = {
  productId: string;
  removeFrom: "cart" | "wishlist";
};

function RemoveButton({ productId, removeFrom }: RemoveButtonProps) {
  function handleRemove() {
    toast.success(`Removed ${productId} from ${removeFrom} successfully`);
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
