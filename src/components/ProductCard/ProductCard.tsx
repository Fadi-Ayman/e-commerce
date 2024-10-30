import Card from "@mui/material/Card";
import ProductCardDetails from "./ProductCardDetails";
import ProductCardImage from "./ProductCardImage";
import { ProductCardType } from "../../Types/ProductTypes";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  id,
  name,
  image,
  price,
  tag,
  ratingValue,
  isInSlider,
  discount,
}: ProductCardType) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/shop/products/${id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.9rem",
        boxShadow: "none",
        borderBottom: isInSlider ? "1.4px solid" : "1.5px solid",
        borderColor: "grey.200",
        width: "100%",
        cursor: "pointer",
        "&:hover":{
          transform: {xs:"scale(1.01,1.01)",md:"scale(1.05,1.05)"}
        },
        transition: "0.25s ease-in-out",
        minWidth: "100px",
        maxWidth: isInSlider
          ? { xs: "250px", md: "350px", xl: "450px" }
          : { xs: "350px", md: "230px", xl: "300px" },

      }}
    >
      {/* Product Image */}
      {/* Hover Effects & its Buttons hanler in ProductCardImage */}
      <ProductCardImage
        id={id}
        tag={tag}
        image={image}
        name={name}
        discount={discount}
        price={price}
      />
      {/* Product Details */}
      <ProductCardDetails
        isInSlider={isInSlider}
        price={price}
        name={name}
        ratingValue={ratingValue}
      />
    </Card>
  );
}
