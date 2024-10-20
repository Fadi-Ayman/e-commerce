import { Button } from "@mui/material";
import toast from "react-hot-toast";
import { theme } from "../../styles/theme";

type AddToCartButtonProps = {
  id: string;
  gridRow?: string;
  gridColumn?: string;
  isInTable?: boolean;
};

function AddToCartButton({
  id,
  gridRow = "",
  gridColumn = "",
  isInTable = false,
}: AddToCartButtonProps) {
  function handleAddToCartButton(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    toast.success(`The Product ${id} Added to the Cart successfully`);
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
