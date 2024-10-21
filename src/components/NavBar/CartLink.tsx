import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

// From Store

function CartLink() {
  const navigate = useNavigate();
  const cartCount = useSelector(
    (state: RootState) => state.Cart.cartList.length
  );

  return (
    <IconButton
      sx={{ height: "50px", width: "50px" }}
      size="medium"
      color="inherit"
      onClick={() => navigate("/cart")}
    >
      <Badge badgeContent={cartCount} max={99} color="error">
        <ShoppingCartOutlinedIcon sx={{ fontSize: "1.7rem" }} />
      </Badge>
    </IconButton>
  );
}

export default CartLink;
