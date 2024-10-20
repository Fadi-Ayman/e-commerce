import { Button, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { theme } from "../../styles/theme";

type AddToWishListButtonType = {
  id: string;
  isInCard: boolean;
  gridRow?: string;
  gridColumn?: string;
};

function AddToWishListButton({
  id,
  isInCard,
  gridRow = "",
  gridColumn = "",
}: AddToWishListButtonType) {
  const [isAddedToWishList, setIsAddedToWishList] = useState<boolean>(false);

  function handleAddedToWishListButton(
    e: React.MouseEvent<HTMLButtonElement>
  ): void {
    e.stopPropagation(); // Prevent the event from propagating up to the parent element
    setIsAddedToWishList((isClicked) => !isClicked);
    toast.success(`Product ${id} added to wishlist successfully`);
  }

  if (isInCard) {
    return (
      <Tooltip arrow placement="top" title="WishList">
        <IconButton
          onClick={handleAddedToWishListButton}
          className="fadein"
          size="small"
          sx={{
            bgcolor: "white",
            color: theme.palette.grey[300],
            position: "absolute",
            top: {xs:"5%",md:"4%"},
            right: {xs:"5%",md:"4%"},
            boxShadow: "80",
          }}
        >
          <FavoriteIcon
            sx={{
              fontSize: { xs: "20px", lg: "25px" },
              color: isAddedToWishList ? "red" : "",
            }}
          />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <Button
      variant="outlined"
      onClick={handleAddedToWishListButton}
      sx={{
        width: "100%",
        height: "100%",
        border: "1.5px solid black",
        color: "black",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        gridRow: gridRow,
        gridColumn: gridColumn,
        padding: "0.6rem 0.5rem ",
        borderRadius: "10px",
        "&:hover": { scale: "1.02 1.02" },
        transition: "0.2s",
      }}
    >
      <FavoriteIcon
        sx={{
          fontSize: "20px",
          color: isAddedToWishList ? "red" : "grey.300",
        }}
      />
      <span>Add to wishlist</span>
    </Button>
  );
}

export default AddToWishListButton;
