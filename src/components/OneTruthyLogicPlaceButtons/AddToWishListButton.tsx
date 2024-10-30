import { Button, IconButton, Tooltip } from "@mui/material";
import toast from "react-hot-toast";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { theme } from "../../styles/theme";
import { useAuth } from "../../context/AuthContext";
import { ApiWishlistItem } from "../../Types/ApiTypes";
import useWishlist from "../../hooks/wishlistHooks/useWishlist";
import { useState } from "react";

type AddToWishListButtonType = {
  id: string;
  name: string;
  image: string;
  price: number;
  isInCard: boolean;
  gridRow?: string;
  gridColumn?: string;
};

function AddToWishListButton({
  id: productId,
  image: productImage,
  name: productName,
  price: productPrice,
  isInCard,
  gridRow = "",
  gridColumn = "",
}: AddToWishListButtonType) {
  const { isAuthenticated } = useAuth();
  const [isDisabled, setIsDisabled] = useState(false);

  const {
    wishlists,
    addItemToWishlist,
    addItemLoading,
    deleteWishlistItem,
    deleteItemLoading,
  } = useWishlist();

  const isAddedToWishList = wishlists?.some(
    (wishlistItem) => wishlistItem.productId === productId
  );

  const isButtonLoading = deleteItemLoading || addItemLoading;

  const wishlistItem: Omit<ApiWishlistItem, "id"> = {
    name: productName,
    image: productImage,
    price: productPrice,
    productId: productId,
    wishlistId: localStorage.getItem("wishlistId")!,
  };

  function handleAddedToWishListButton(
    e: React.MouseEvent<HTMLButtonElement>
  ): void {
    // Prevent the event from propagating up to the parent element
    e.stopPropagation();

    if (!isAuthenticated) {
      toast.error("Please Login First");
      return;
    }

    if (isAddedToWishList) {
      setIsDisabled(true);
      deleteWishlistItem(productId);
      setTimeout(() => setIsDisabled(false), 1000);
      return;
    }

    if (!isAddedToWishList) {
      setIsDisabled(true);
      addItemToWishlist(wishlistItem);
      setTimeout(() => setIsDisabled(false), 1000);
      return;
    }
  }

  if (isInCard) {
    return (
      <Tooltip arrow placement="top" title="WishList">
        <IconButton
          onClick={handleAddedToWishListButton}
          disabled={isDisabled || isButtonLoading}
          className="fadein"
          size="small"
          sx={{
            bgcolor: "white",
            color: theme.palette.grey[300],
            position: "absolute",
            top: { xs: "5%", md: "4%" },
            right: { xs: "5%", md: "4%" },
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
      disabled={isDisabled || isButtonLoading}
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
        padding: { xs: "0.6rem 1rem", lg: "0.6rem 0.5rem" },
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
