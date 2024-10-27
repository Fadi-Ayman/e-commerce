import { Box, CardMedia } from "@mui/material";
import { theme } from "../../styles/theme";

import ProductBadge from "./ProductBadge";
import { ProductCardImageType } from "../../Types/ProductTypes";
import AddToWishListButton from "../OneTruthyLogicPlaceButtons/AddToWishListButton";

function ProductCardImage({
  image,
  name,
  tag,
  discount,
  id,
  
}: ProductCardImageType) {
  const isDiscount = discount ? true : false;

  return (
    <Box
      sx={{
        aspectRatio: "1/1.15",
        height: "100%",
        width: "100%",
        position: "relative",
        bgcolor: theme.palette.grey[100],
      }}
    >
      {/* Product Image */}
      <CardMedia
        sx={{ height: "100%", width: "100%", objectFit: "fill" }}
        component="img"
        image={image}
        alt={name}
      />
      
      {/* Tags & Discount Badges Container */}
      <Box
        sx={{
          position: "absolute",
          top: "4.5%",
          left: "4%",
          display: "flex",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        {tag && <ProductBadge data={tag} />}
        {isDiscount && <ProductBadge data={discount} />}
      </Box>

      <AddToWishListButton id={id} isInCard={true} />
    </Box>
  );
}

export default ProductCardImage;
