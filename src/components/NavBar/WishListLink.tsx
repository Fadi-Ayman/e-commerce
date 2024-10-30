import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useWishlist from "../../hooks/wishlistHooks/useWishlist";

function WishListLink() {
  const { wishlists } = useWishlist();
  const wishListCount = wishlists?.length || 0;
  const navigate = useNavigate();
  return (
    <IconButton
      sx={{ height: "50px", width: "50px" }}
      size="medium"
      color="inherit"
      onClick={() => navigate("/settings/wishlist")}
    >
      <Badge badgeContent={wishListCount} max={99} color="error">
        <FavoriteBorderIcon sx={{ fontSize: "1.7rem" }} />
      </Badge>
    </IconButton>
  );
}

export default WishListLink;
