import { Badge, IconButton } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";

// From Store
const cartCount: number = 12;

function CartLink() {
  const navigate = useNavigate();

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
